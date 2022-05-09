import { HiHome } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const BlogNavbar = () => {
  return (
    <div style={{ padding: "1rem", display: "flex" }}>
      <a href="/blogs">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#161240",
            padding: "0.5rem",
            marginRight: "0.5rem",
          }}
        >
          <HiArrowNarrowLeft color="white" size={20} style={{ margin: "0" }} />
          <p style={{ margin: "0 0 0 0.5rem" }}>Blogs</p>
        </div>
      </a>

      <a href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#161240",
            padding: "0.5rem",
          }}
        >
          <HiHome color="white" size={20} style={{ margin: "0" }} />
          <p style={{ margin: "0 0 0 0.5rem" }}>Home</p>
        </div>
      </a>
    </div>
  );
};
