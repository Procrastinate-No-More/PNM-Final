import { Link } from "react-router-dom";

function Home() {

  return (

    <div
      style={{
        minHeight:"100vh",

        background:"#efeee5",

        display:"flex",

        justifyContent:"center",

        alignItems:"center"
      }}
    >

      <div
        style={{
          width:"900px",

          background:"#f9f9f7",

          padding:"60px",

          borderRadius:"30px",

          border:"1px solid #d1e3ee",

          textAlign:"center"
        }}
      >

        <h1
          style={{
            color:"#355872"
          }}
        >
          Procrastinate No More!
        </h1>

        <p
          style={{
            color:"#4a6a8a"
          }}
        >
          Productivity Companion
        </p>

        <div
          style={{
            display:"flex",

            gap:"20px",

            justifyContent:"center",

            marginTop:"40px"
          }}
        >

          <Link to="/timer">
            <button>
              Timer
            </button>
          </Link>

          <Link to="/todo">
            <button>
              To-Do
            </button>
          </Link>

          <Link to="/ai">
            <button>
              AI
            </button>
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Home;