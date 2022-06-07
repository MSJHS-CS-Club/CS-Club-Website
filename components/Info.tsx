import styles from "../styles/Info.module.css";
import { Tile } from "./Tile";

export const Info = () => {
  return (
    <div className={styles.info}>
      {/* <div className={styles.content}> */}
      <div className={styles.mosaic_container}>
        <div>
          <Tile img={"/thinking.png"} />
          <div style={{ marginTop: "2.815rem" }}>
            <Tile img={"/apple.png"} />
          </div>
        </div>
        <div className={styles.shifted_tiles}>
          <Tile img={"/computer.png"} />
          <div style={{ marginTop: "2.815rem" }}>
            <Tile img={"/nerd.png"} />
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "500px" }}>
        <h1 className={styles.cool_stuff}>We talk about really cool stuff.</h1>
        <p className={styles.cool_stuff_stuff}>
          From memory management to OpenGL, we talk about it all. We talk about
          all concepts with depth and conciseness, with effective lectures.
          Attend our meetings to learn about this cool stuff, and to have a
          great time in the process.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};
