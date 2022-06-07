import styles from "../styles/Discord.module.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
});

export const Discord = () => {
  // useEffect(() => {
  //   async function loadCrate() {
  //     const result = await import("@widgetbot/crate");
  //     const Crate = await result.cdn();

  //     new Crate({
  //       server: "769054813920559114",
  //       channel: "769054813920559117",
  //     });
  //   }

  //   loadCrate();
  // }, []);

  return (
    <div className={styles.main_section}>
      <h1
        style={{
          marginBottom: "1.5rem",
          fontSize: "clamp(2em,5vw,2.5em)",
          textAlign: "center",
        }}
      >
        C'mon, Join our Discord Server
      </h1>

      <div className={styles.widget_container}>
        <WidgetBot
          className={styles.widget}
          server="742231372860489779"
          channel="742231373305348166"
        />
      </div>
    </div>
  );
};
