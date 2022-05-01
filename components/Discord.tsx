import WidgetBot from "@widgetbot/react-embed";
import styles from "../styles/Discord.module.css";

export const Discord = () => {
  return (
    <div className={styles.main_section}>
      <div className={styles.widget_container}>
        <WidgetBot
          className={styles.widget}
          server="769054813920559114"
          channel="769054813920559117"
        />
      </div>
      <h1
        style={{
          marginTop: "2.5rem",
          marginBottom: "0.9rem",
          fontSize: "3em",
          textAlign: "center",
        }}
      >
        C'mon, Join our Discord Server
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{ textAlign: "center", maxWidth: "600px", fontSize: "1.25em" }}
        >
          This is where all the fun happensLorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore aspernatur nobis perspiciatis
          velit possimus sapiente adipisci iste assumenda. Voluptates adipisci
          voluptatem rerum. Eaque facere placeat consequatur expedita excepturi
          blanditiis explicabo.
        </p>
      </div>
    </div>
  );
};
