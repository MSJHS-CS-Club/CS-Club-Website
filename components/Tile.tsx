interface TileProps {
  img: string;
}

export const Tile: React.FC<TileProps> = ({ img }) => {
  return (
    <div
      style={{
        padding: "2.5rem",
        backgroundColor: "#fff",
        borderRadius: "25px",
      }}
    >
      <img src={img} alt="tile" style={{ userSelect: "none" }} />
    </div>
  );
};
