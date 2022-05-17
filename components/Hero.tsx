import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Computer } from "../components/Computer";
import { OrbitControls } from "@react-three/drei";
import styles from "../styles/Home.module.css";
import { FaDiscord, FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <h1 style={{ fontSize: "clamp(36px,8vw,54px)" }}>MSJ CS Club</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          aspernatur nobis perspiciatis velit possimus sapiente adipisci iste
          assumenda. Voluptates adipisci voluptatem rerum. Eaque facere placeat
          consequatur expedita excepturi blanditiis explicabo.
        </p>
        <div className={styles.button_container}>
          <a
            href="https://discord.gg/dqaSMVEF69"
            style={{ textDecoration: "none" }}
          >
            <button
              className={styles.button_link}
              style={{
                backgroundColor: "#5865F2",
                color: "white",
                marginRight: "1rem",
                alignItems: "center",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <FaDiscord size={25} />
              <span
                style={{
                  marginLeft: "10px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Join our Discord
              </span>
            </button>
          </a>

          <a href="/blogs" style={{ textDecoration: "none" }}>
            <div
              className={styles.button_link}
              style={{
                backgroundColor: "#5865F2",
                color: "white",
                marginRight: "1rem",
                background:
                  "linear-gradient(90deg, rgba(0,187,197,1) 0%, rgba(79,172,254,1) 50%)",
                display: "flex",
                alignItems: "center",
                height: "57px",
              }}
            >
              <span style={{ marginRight: "10px" }}>Blogs</span>
              <FaArrowRight size={15} />{" "}
            </div>
          </a>
        </div>
      </div>
      <div className={styles.canvas}>
        <Canvas>
          <Suspense fallback={null}>
            <Computer />
            <OrbitControls enableZoom={false} />
            <directionalLight position={[0, 0, 6]} color="white" />
            <directionalLight position={[0, 6, 0]} color="white" />
            <directionalLight position={[6, 0, 0]} color="white" />
            <ambientLight intensity={0.3} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};
