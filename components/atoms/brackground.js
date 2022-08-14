export const Background = ({ children }) => {
  const bg = {
    width: "100%",
    height: "100%",
    backgroundImage: `url("/img/background4.jpg")`,
    backgroundPosition: "left",
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
    filter: "blur(1rem)",
    position: "absolute",
    zIndex: "-1",
  };

  return (
    <div style={{ position: "relative" }}>
      <main style={bg}></main>
      {children}
    </div>
  );
};
