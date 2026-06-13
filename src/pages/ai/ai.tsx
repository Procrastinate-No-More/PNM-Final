import { useState } from "react";
import type { CSSProperties } from "react";

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

function AI() {
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! How can I help you today?"
    }
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userText = message;

    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText
      }
    ]);

    setMessage("");

    try {
      const response = await fetch(
        "https://gpt-pnm-temp.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userText
          })
        }
      );

      const data = await response.json();

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.text || "No response"
        }
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Cannot reach server."
        }
      ]);
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.chatContainer}>
        <h1 style={styles.title}>PNM.ai</h1>

        <div style={styles.chatbox}>
          {chat.map((msg, index) => (
            <div
              key={index}
              style={msg.sender === "user" ? styles.user : styles.bot}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div style={styles.inputArea}>
          <input
            style={styles.input}
            placeholder="Ask anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
          />

          <button
            style={styles.button}
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  body: {
    background: "#f7f8f0",
    height: "calc(100vh - 90px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  chatContainer: {
    width: "90%",
    maxWidth: "700px",
    height: "750px",
    background: "rgba(156,213,255,0.2)",
    border: "1px solid #7aaace",
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
  },

  title: {
    padding: "24px",
    margin: 0,
    background: "white",
    color: "#355872",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700"
  },

  chatbox: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  user: {
    alignSelf: "flex-end",
    background: "#7aaace",
    color: "white",
    padding: "14px 18px",
    borderRadius: "18px",
    maxWidth: "80%"
  },

  bot: {
    alignSelf: "flex-start",
    background: "white",
    color: "#355872",
    padding: "14px 18px",
    borderRadius: "18px",
    maxWidth: "80%",
    border: "1px solid #9cd5ff"
  },

  inputArea: {
    display: "flex",
    gap: "12px",
    padding: "20px",
    background: "white"
  },

  input: {
    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #7aaace",
    color: "#355872",
    fontSize: "1rem"
  },

  button: {
    background: "#355872",
    color: "white",
    border: "none",
    padding: "14px 24px",
    borderRadius: "12px",
    fontWeight: "700",
    cursor: "pointer"
  }
};

export default AI;