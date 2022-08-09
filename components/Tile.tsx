import Tilt from "react-parallax-tilt"

interface TileProps {
  img: string;
}

export const Tile: React.FC<TileProps> = ({ img }) => {
  return (

    <Tilt glareEnable={true}
    glareMaxOpacity={0.45}  perspective={1200} 
    
      style={{
        padding: "2.5rem",
        backgroundColor: "#fff",
        borderRadius: "25px",
        transformStyle:"preserve-3d"
      }}
    >
        
      <img src={img} alt="tile" style={{ userSelect: "none", transform: "translateZ(40px)" }} />
    </Tilt>
  );
};
