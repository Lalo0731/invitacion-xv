export default function ParentsSection() {
  const text = "Con la bendición de mis padres";

  return (
    <section className="parents">
      <div className="parents__container">

        <p className="parents__intro">
          {text.split("").map((l, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.035}s` }}>
              {l === " " ? "\u00A0" : l}
            </span>
          ))}
        </p>

        <h3 className="parents__names">
          Juan Pérez <span>&</span> María López
        </h3>

        <p className="parents__message">
          Te invitan a celebrar este momento tan especial
        </p>

      </div>
    </section>
  );
}