import "./Button.css";

export default function Button({ icon, children, onClick, color }) {
  return (
    <button style={{ background: color }} onClick={onClick}>
      <div className="button-inner">
        {icon}
        {children}
      </div>
    </button>
  );
}
