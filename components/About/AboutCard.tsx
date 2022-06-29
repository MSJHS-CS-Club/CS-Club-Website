import styles from "../../styles/AboutCard.module.css";

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
  return (
    <div className={styles.card}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={
            "https://this-person-does-not-exist.com/img/avatar-0581035a076f01adb2a061321a6977b7.jpg"
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
  );
};
