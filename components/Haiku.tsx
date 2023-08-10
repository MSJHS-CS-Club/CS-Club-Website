import styles from "../styles/Haiku.module.css";
export const Haiku = () => {
  return (
    <div className={styles.haiku_vh}>
      <div>
        <div className={styles.haiku_line}>
          "Come to <span className={styles.green}>N3</span>
        </div>
        <div className={styles.haiku_line}>
          To <span className={styles.yellow}>code and learn together</span>,
        </div>
        <div className={styles.haiku_line}>
          On <span className={styles.red}>Fridays</span> at{" "}
          <span className={styles.red}>Lunch</span>!"
        </div>
        <p className={styles.haiku_note}>- A Haiku by the CS Club</p>
      </div>
    </div>
  );
};
