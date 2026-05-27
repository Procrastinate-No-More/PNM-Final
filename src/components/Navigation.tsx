import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={styles.nav}>

      <div style={styles.logo}>
        Procrastinate No More!
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>HOME</Link>

        <Link to="/timer" style={styles.link}>
          TIMER
        </Link>

        <Link to="/todo" style={styles.link}>
          TO-DO
        </Link>

        <Link to="/ai" style={styles.link}>
          AI
        </Link>
      </div>

    </nav>
  );
}

const styles:any = {

nav:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"22px 50px",
background:"#f9f9f7",
borderBottom:"1px solid #d1e3ee"
},

logo:{
fontSize:"24px",
fontWeight:"700",
color:"#355872"
},

links:{
display:"flex",
gap:"30px"
},

link:{
textDecoration:"none",
color:"#355872",
fontWeight:"600"
}

}

export default Navigation;