import { useState, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [inputHours, setInputHours] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputSeconds, setInputSeconds] = useState("");

  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current !== null) return;

    let total = seconds;

    if (seconds === 0) {
      total =
        Number(inputHours || 0) * 3600 +
        Number(inputMinutes || 0) * 60 +
        Number(inputSeconds || 0);

      if (total === 0) return;

      setSeconds(total);
    }

    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    setSeconds(0);

    setInputHours("");
    setInputMinutes("");
    setInputSeconds("");

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const hrs = Math.floor(seconds / 3600);

  const mins = Math.floor((seconds % 3600) / 60);

  const secs = seconds % 60;

  const display = `${hrs
    .toString()
    .padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Timer</h1>

        <div
          style={{
            ...styles.buttonRow,
            marginBottom: "30px"
          }}
        >
          <button
            style={{
              ...styles.button,
              background: "#9cd5ff"
            }}
            onClick={() => {
              reset();
              setInputMinutes("25");
            }}
          >
            Pomodoro
          </button>

          <button
            style={{
              ...styles.button,
              background: "#9cd5ff"
            }}
            onClick={() => {
              reset();
              setInputMinutes("5");
            }}
          >
            Break
          </button>
        </div>

        <div style={styles.inputRow}>
          <input
            style={styles.input}
            placeholder="hh"
            value={inputHours}
            onChange={(e) => setInputHours(e.target.value)}
          />

          <span style={styles.separator}>:</span>

          <input
            style={styles.input}
            placeholder="mm"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
          />

          <span style={styles.separator}>:</span>

          <input
            style={styles.input}
            placeholder="ss"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
          />
        </div>

        <h1 style={styles.timer}>{display}</h1>

        <div style={styles.buttonRow}>
          <button
            style={{
              ...styles.button,
              background: "#9cd5ff"
            }}
            onClick={start}
          >
            Start
          </button>

          <button
            style={{
              ...styles.button,
              background: "#9cd5ff"
            }}
            onClick={pause}
          >
            Pause
          </button>

          <button
            style={{
              ...styles.button,
              background: "#9cd5ff"
            }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    height: "calc(100vh - 90px)",
    background: "#efeee5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter, sans-serif",
    padding: "20px"
  },

  card: {
    width: "1100px",
    maxWidth: "95%",
    background: "#f9f9f7",
    padding: "60px",
    borderRadius: "28px",
    border: "1px solid #d1e3ee",
    textAlign: "center",
    boxShadow: "0 15px 35px rgba(0,0,0,0.05)"
  },

  title: {
    color: "#355872",
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "35px"
  },

  timer: {
    fontSize: "7rem",
    color: "#355872",
    margin: "40px 0",
    fontWeight: "800",
    letterSpacing: "4px"
  },

  buttonRow: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  button: {
    border: "none",
    borderRadius: "14px",
    padding: "16px 30px",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    color: "#355872"
  },

  inputRow: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25px"
  },

  input: {
    width: "100px",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #d1e3ee",
    textAlign: "center",
    fontSize: "1.2rem",
    background: "#efeee5",
    color: "#355872"
  },

  separator: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#355872"
  }
};

export default Timer;