import styles from "../../styles/AboutCard.module.css";
import Tilt from "react-parallax-tilt"
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

export const AboutCard = ({
  imgsrc,
  name,
  role,
  description,
}: {
  imgsrc?: string;
  name: string;
  role: string;
  description: string;
}) => {

  const [flipped, setFlipped] = useState(false);
  return (
    
    // <div className={styles.card}>
    
      <Tilt glareEnable={true}
glareMaxOpacity={0.45}  perspective={1200} className={styles.card}>
      <div className={styles.innerelement} onMouseEnter={()=>{setFlipped(!flipped)}} onMouseLeave={()=>{setFlipped(!flipped)}}>
        
        {/* <ReactCardFlip isFlipped={flipped}> */}
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={
                "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/18/187e319677d6b74ed094b5d3bf9c6a86679f8ce4_full.jpg"
              }
              style={{
                borderRadius: "100%",
                width: "150px",
                height: "150px",
                border: "5px solid transparent ",
                background:
                  "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(90deg, rgba(0,187,197,1) 0%, rgba(79,172,254,1) 50%) border-box",
              }}
            />
          </div>
          <h1 style={{ textAlign: "center" }}>{name}</h1>
          <p
            style={{
              textAlign: "center",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "grey",
              fontSize: "0.8em",
            }}
          >
            {role}
          </p>

        <p style={{ textAlign: "center" }}>{description}</p>
        </div>
        {/* </ReactCardFlip> */}
      </div>
      </Tilt>
    // </div>

  //   <Tilt className={styles.parallaxeffect!} perspective={500}>

  //   <div className={styles.innerelement}>

  //     <div>React</div>

  //     <div>Parallax Tilt</div>

  //     <div>👀</div>

  //   </div>

  // </Tilt>
  );
};
