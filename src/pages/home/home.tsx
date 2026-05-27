import { Link } from "react-router-dom";

function Home(){

return(

<div style={styles.page}>

<div style={styles.card}>

<h1 style={styles.title}>
Procrastinate No More!
</h1>

<p style={styles.subtitle}>
Study smarter.
Focus longer.
Organise better.
</p>

<div style={styles.buttons}>

<Link to="/timer">

<button style={styles.button}>
Focus Timer
</button>

</Link>

<Link to="/todo">

<button style={styles.button}>
Task Manager
</button>

</Link>

<Link to="/ai">

<button style={styles.button}>
AI Mentor
</button>

</Link>

</div>

</div>

</div>

)

}

const styles:any={

page:{
height:"85vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#efeee5"
},

card:{
width:"900px",
padding:"70px",
background:"#f9f9f7",
borderRadius:"30px",
border:"1px solid #d1e3ee",
textAlign:"center"
},

title:{
fontSize:"60px",
color:"#355872",
marginBottom:"20px"
},

subtitle:{
fontSize:"22px",
color:"#6b7280",
marginBottom:"40px"
},

buttons:{
display:"flex",
justifyContent:"center",
gap:"20px"
},

button:{
padding:"18px 28px",
border:"none",
borderRadius:"14px",
background:"#9cd5ff",
fontWeight:"700",
cursor:"pointer"
}

}

export default Home;