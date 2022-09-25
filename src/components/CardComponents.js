import "./CardComponents.css";

export default function CardComponents({ name, color }) {
  return (
    <div className="section1">
      <div className="box" style={{ backgroundColor: color }}>
        <p className="cardname">{name}</p>
        <p className="colorcode">{color}</p>
      </div>
    </div>
  );
}
