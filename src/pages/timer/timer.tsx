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

        <div style={{ ...styles.buttonRow, marginBottom: "30px" }}>
          <button
            style={styles.secondaryButton}
            onClick={() => {
              reset();
              setInputMinutes("25");
            }}
          >
            Pomodoro
          </button>

          <button
            style={styles.secondaryButton}
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
          <button style={styles.button} onClick={start}>
            Start
          </button>

          <button style={styles.button} onClick={pause}>
            Pause
          </button>

          <button style={styles.button} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "calc(100vh - 70px)",
    background: "#efeee5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    fontFamily: "Inter, sans-serif"
  },

  card: {
    width: "100%",
    maxWidth: "700px",
    background: "#f9f9f7",
    padding: "50px",
    borderRadius: "30px",
    border: "1px solid #d1e3ee",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
  },

  title: {
    color: "#355872",
    fontSize: "42px",
    fontWeight: 800,
    marginBottom: "25px"
  },

  timer: {
    fontSize: "72px",
    fontWeight: 800,
    color: "#355872",
    margin: "35px 0"
  },

  inputRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px"
  },

  input: {
    width: "110px",
    padding: "18px",
    fontSize: "24px",
    borderRadius: "14px",
    border: "1px solid #d1e3ee",
    textAlign: "center",
    background: "#efeee5",
    color: "#355872"
  },

  separator: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#355872"
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },

  button: {
    background: "#355872",
    color: "white",
    border: "none",
    borderRadius: "14px",
    padding: "16px 36px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  secondaryButton: {
    background: "#9cd5ff",
    color: "#355872",
    border: "none",
    borderRadius: "14px",
    padding: "14px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Timer;