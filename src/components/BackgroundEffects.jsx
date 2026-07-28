// BackgroundEffects.jsx
export default function BackgroundEffects() {
  return (
    <div className="bg-effects">
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}