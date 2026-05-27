import { Link } from "react-router-dom";

function Navigation() {

  return (

    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "20px 50px",

        background: "#f9f9f7",

        borderBottom: "1px solid #d1e3ee"
      }}
    >

      <h2
        style={{
          margin: 0,
          color: "#355872"
        }}
      >
        Procrastinate No More!
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px"
        }}
      >

        <Link
          to="/"
          style={{
            color:"#355872",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Home
        </Link>

        <Link
          to="/timer"
          style={{
            color:"#355872",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Timer
        </Link>

        <Link
          to="/todo"
          style={{
            color:"#355872",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          To-Do
        </Link>

        <Link
          to="/ai"
          style={{
            color:"#355872",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          AI
        </Link>

      </div>

    </nav>

  );
}

export default Navigation;