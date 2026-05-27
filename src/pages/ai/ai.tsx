import { useState } from "react";

function AI() {

  const [message,setMessage] = useState("");

  const [chat,setChat] = useState<string[]>([]);

  const send = async () => {

    if(!message.trim()) return;

    setChat(prev=>[
      ...prev,
      "You: " + message
    ]);

    try{

      const response = await fetch(
        "https://gpt-pnm-temp.onrender.com/chat",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            message
          })
        }
      );

      const data = await response.json();

      setChat(prev=>[
        ...prev,
        "AI: " + data.text
      ]);

    }

    catch{

      setChat(prev=>[
        ...prev,
        "AI offline"
      ]);

    }

    setMessage("");

  };

  return(

    <div
      style={{
        background:"#efeee5",

        minHeight:"100vh",

        display:"flex",

        justifyContent:"center",

        alignItems:"center"
      }}
    >

      <div
        style={{
          width:"900px",

          background:"#f9f9f7",

          padding:"40px",

          borderRadius:"25px"
        }}
      >

        <h1
          style={{
            color:"#355872"
          }}
        >
          AI Mentor
        </h1>

        <div
          style={{
            height:"400px",

            overflow:"auto"
          }}
        >

          {
            chat.map(
              (msg,i)=>

              <p key={i}>
                {msg}
              </p>
            )
          }

        </div>

        <input

          value={message}

          onChange={(e)=>
            setMessage(e.target.value)
          }

          placeholder="Ask AI"

          style={{
            width:"80%"
          }}
        />

        <button onClick={send}>
          Send
        </button>

      </div>

    </div>

  );

}

export default AI;