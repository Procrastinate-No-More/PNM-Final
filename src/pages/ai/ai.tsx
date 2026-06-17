import { useState } from "react";
import type { CSSProperties } from "react";
import ReactMarkdown from "react-markdown";

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
    <div style={styles.page}>
      <div style={styles.chatCard}>
        <div style={styles.header}>
          <h2 style={styles.heading}>PNM.ai</h2>

          <p style={styles.subheading}>
            Your productivity assistant
          </p>
        </div>

        <div style={styles.chatArea}>
          {chat.map((msg, index) => (
            <div
              key={index}
              style={
                msg.sender === "user"
                  ? styles.userMessage
                  : styles.botMessage
              }
            >
              <ReactMarkdown>
                {msg.text}
              </ReactMarkdown>
            </div>
          ))}
        </div>

        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            placeholder="Ask a question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
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
  page: {
    height: "calc(100vh - 70px)",
    background: "#efeee5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    overflow: "hidden"
  },

  chatCard: {
    width: "100%",
    maxWidth: "900px",
    height: "600px",
    background: "#f9f9f7",
    borderRadius: "25px",
    border: "1px solid #d1e3ee",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },

  header: {
    padding: "25px",
    borderBottom: "1px solid #d1e3ee",
    background: "#ffffff"
  },

  heading: {
    margin: 0,
    color: "#355872",
    fontSize: "32px",
    fontWeight: 800
  },

  subheading: {
    margin: "6px 0 0",
    color: "#6b8aa5",
    fontSize: "14px"
  },

  chatArea: {
    flex: 1,
    overflowY: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "#f7fafc"
  },

  userMessage: {
    alignSelf: "flex-end",
    background: "#355872",
    color: "white",
    padding: "12px 16px",
    borderRadius: "16px",
    maxWidth: "70%",
    textAlign: "left"
  },

  botMessage: {
    alignSelf: "flex-start",
    background: "white",
    color: "#355872",
    padding: "12px 16px",
    borderRadius: "16px",
    border: "1px solid #d1e3ee",
    maxWidth: "70%",
    textAlign: "left"
  },

  inputContainer: {
    display: "flex",
    gap: "10px",
    padding: "20px",
    borderTop: "1px solid #d1e3ee",
    background: "white"
  },

  input: {
    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #d1e3ee",
    outline: "none",
    fontSize: "16px"
  },

  button: {
    background: "#355872",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "14px 24px",
    cursor: "pointer",
    fontWeight: 700
  }
};

export default AI;