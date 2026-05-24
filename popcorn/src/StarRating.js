export default function StarRating({ maxRating = 5 }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const starContainer = {
    display: "flex",
    gap: "4px",
  };
  return (
    <div style={containerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>

      <p>10</p>
    </div>
  );
}
