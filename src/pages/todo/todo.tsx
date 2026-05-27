import { useState } from "react";

function Todo() {
  const [taskText, setTaskText] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const addTask = () => {
    if (!taskText.trim()) return;
    setTaskList([...taskList, taskText]);
    setTaskText("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>My To-Do List</h2>

        <div style={styles.inputRow}>
          <input 
            style={styles.input} 
            value={taskText} 
            onChange={(e) => setTaskText(e.target.value)} 
            onKeyDown={(e) => e.key === "Enter" && addTask()} 
            placeholder="What needs to be done?" 
          />
          <button onClick={addTask} style={styles.button}>Add Task</button>
        </div>

        <ul style={styles.list}>
          {taskList.map((task, index) => (
            <li key={index} style={styles.taskItem}>
              {task}
              <span 
                onClick={() => setTaskList(taskList.filter((_, i) => i !== index))} 
                style={styles.deleteBtn}
              >
                ✕
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    height: "calc(100vh - 65px)",
    background: "#efeee5", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    width: "900px", 
    background: "#f9f9f7",
    padding: "40px",
    borderRadius: "28px",
    border: "1px solid #d1e3ee",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    maxHeight: "80vh",
  },
  title: {
    fontFamily: "'Inter', sans-serif",
    color: "#355872",
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "700",
  },
  inputRow: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #d1e3ee",
    fontSize: "1rem",
    outline: "none",
    background: "#efeee5",
    fontFamily: "'Inter', sans-serif",
  },
  button: {
    background: "#355872",
    color: "white",
    border: "none",
    padding: "0 30px",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    overflowY: "auto",
  },
  taskItem: {
    background: "white",
    padding: "15px 20px",
    borderRadius: "12px",
    marginBottom: "10px",
    border: "1px solid #d1e3ee",
    display: "flex",
    justifyContent: "space-between", // FIXED: Added quotes around space-between
    alignItems: "center",
    color: "#355872",
    fontWeight: "500",
    fontFamily: "'Inter', sans-serif",
  },
  deleteBtn: {
    color: "#f87171",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.2rem",
    fontFamily: "'Inter', sans-serif",
  }
};

export default Todo;