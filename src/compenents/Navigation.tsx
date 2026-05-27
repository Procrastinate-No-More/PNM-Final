import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      padding: "20px",
      background: "#355872"
    }}>

      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        HOME
      </Link>

      <Link
        to="/timer"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        TIMER
      </Link>

      <Link
        to="/todo"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        TO DO
      </Link>

      <Link
        to="/ai"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        AI
      </Link>

    </nav>
  );
}

export default Navigation;