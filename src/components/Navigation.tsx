import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
        background: "#f9f9f7",
        borderBottom: "1px solid #d1e3ee"
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#355872",
          fontSize: "30px",
          fontWeight: 700
        }}
      >
        Procrastinate No More!
      </h2>

      <div
        style={{
          display: "flex",
          gap: "40px"
        }}
      >
        <Link
          to="/"
          style={{
            color: "#355872",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "20px"
          }}
        >
          Home
        </Link>

        <Link
          to="/timer"
          style={{
            color: "#355872",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "20px"
          }}
        >
          Timer
        </Link>

        <Link
          to="/todo"
          style={{
            color: "#355872",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "20px"
          }}
        >
          To-Do
        </Link>

        <Link
          to="/ai"
          style={{
            color: "#355872",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "20px"
          }}
        >
          AI
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;