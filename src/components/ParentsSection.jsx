export default function ParentsSection() {
  const text = "Con el cariño de mi familia";

  return (
    <section className="parents">
      <img src="/images/flower-top-left.png" className="parents__flower parents__flower--left" />
      <img src="/images/flower-top-right.png" className="parents__flower parents__flower--right" />
      <div className="parents__container">

        <p className="parents__intro">
          {text.split("").map((l, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.035}s` }}>
              {l === " " ? "\u00A0" : l}
            </span>
          ))}
        </p>

        <h3 className="parents__names">
          Mi Familia 
        </h3>

        <p className="parents__message">
          Hoy celebro un momento muy especial en mi vida,<br />
          rodeada de las personas que han estado conmigo en cada paso,
          brindándome amor, apoyo y alegría.<br /><br />

          Gracias por ser parte de mi historia,<br />
          por acompañarme y hacer este día aún más inolvidable 💖
        </p>

      </div>
    </section>
  );
}