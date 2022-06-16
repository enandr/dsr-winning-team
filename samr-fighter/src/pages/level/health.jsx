const Health = ({ currentHealth, maxHealth, name }) => {
  var healthWidth = (currentHealth / maxHealth) * 100;
  return (
    <div
      className="health"
      style={{
        position: "relative",
        backgroundColor: "red",
        height: "40px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <p
        style={{
          position: "absolute",
          zIndex: "2",
          marginInline: "1rem",
          fontWeight: "bold",
        }}
      >
        {name}
      </p>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          backgroundColor: "green",
          width: `${healthWidth}%`,
          height: "40px",
        }}
      />
    </div>
  );
};
export default Health;
