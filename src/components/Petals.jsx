export default function Petals() {
  return (
    <div className="petals">
      {Array.from({ length: 25 }).map((_, i) => (
        <img
          key={i}
          src={i % 2 === 0 ? "/images/petal1.png" : "/images/petal2.png"}
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 8 + Math.random() * 6 + "s",
            animationDelay: Math.random() * 5 + "s",
            transform: `scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
}