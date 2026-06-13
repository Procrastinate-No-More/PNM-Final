import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        background: "#efeee5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#f9f9f7",
          padding: "70px",
          borderRadius: "30px",
          border: "1px solid #d1e3ee",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#355872",
            marginBottom: "15px"
          }}
        >
          Procrastinate No More!
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#4a6a8a"
          }}
        >
          Your Productivity Companion
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            marginTop: "50px"
          }}
        >
          <Link to="/timer">
            <button
              style={{
                background: "#355872",
                color: "white",
                border: "none",
                padding: "18px 40px",
                borderRadius: "14px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              Timer
            </button>
          </Link>

          <Link to="/todo">
            <button
              style={{
                background: "#355872",
                color: "white",
                border: "none",
                padding: "18px 40px",
                borderRadius: "14px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              To-Do
            </button>
          </Link>

          <Link to="/ai">
            <button
              style={{
                background: "#355872",
                color: "white",
                border: "none",
                padding: "18px 40px",
                borderRadius: "14px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              AI
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;