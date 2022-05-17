import { HiHome } from "react-icons/hi";
import { HiNewspaper } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div style={{ padding: "1rem", display: "flex" }}>
      <a href="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#161240",
            padding: "0.8rem",
            marginRight: "0.8rem",
          }}
        >
          <HiHome color="white" size={20} style={{ margin: "0" }} />
          <p style={{ margin: "0 0 0 0.5rem" }}>Home</p>
        </div>
      </a>
      <a href="/blogs" style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#161240",
            padding: "0.8rem",
          }}
        >
          <HiNewspaper color="white" size={20} style={{ margin: "0" }} />
          <p style={{ margin: "0 0 0 0.5rem" }}>Blogs</p>
        </div>
      </a>
    </div>
  );
};
