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
        {["Home", "Timer", "To-Do", "AI"].map((item) => (
          <Link
            key={item}
            to={
              item === "Home"
                ? "/"
                : item === "To-Do"
                ? "/todo"
                : /${item.toLowerCase()}
            }
            style={{
              color: "#355872",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "20px"
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;