import { useState } from "react";
import type { CSSProperties } from "react";

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

function AI() {

  const [message, setMessage] = useState<string>("");

  const [chat, setChat] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Welcome, Aisha. What academic objectives shall we address today?"
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
          text: "Cannot reach server"
        }
      ]);

    }

  };

  return (

    <div style={styles.body}>

      <div style={styles.chatContainer}>

        <h1 style={styles.title}>
          Aisha.ai
        </h1>

        <div style={styles.chatbox}>

          {chat.map((msg, index) => (

            <div
              key={index}
              style={
                msg.sender === "user"
                  ? styles.user
                  : styles.bot
              }
            >

              {msg.text}

            </div>

          ))}

        </div>

        <div style={styles.inputArea}>

          <input
            style={styles.input}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              sendMessage()
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
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  chatContainer: {
    width: "95%",
    maxWidth: "450px",
    height: "85vh",
    background: "rgba(156,213,255,0.2)",
    border: "1px solid #7aaace",
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },

  title: {
    padding: "20px",
    margin: "0",
    background: "white",
    color: "#355872"
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
    padding: "12px",
    borderRadius: "18px",
    color: "white",
    maxWidth: "80%"
  },

  bot: {
    alignSelf: "flex-start",
    background: "white",
    padding: "12px",
    borderRadius: "18px",
    color: "#355872",
    maxWidth: "80%"
  },

  inputArea: {
    display: "flex",
    gap: "10px",
    padding: "20px",
    background: "white"
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #7aaace",
    color: "#355872"
  },

  button: {
    background: "#355872",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "12px",
    cursor: "pointer"
  }

};

export default AI;