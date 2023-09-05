export default function Logo({ width, height }) {
  return (
    <img
      style={{ cursor: "pointer", width: `${width}px`, height: `${height}px` }}
      src="./assets/Logo.svg"
      alt=":/"
    />
  );
}
