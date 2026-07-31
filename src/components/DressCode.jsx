export default function DressCode() {
  return (
    <section className="dresscode">

      <h2 className="dresscode__title">Dress Code</h2>

      <div className="dresscode__content">

        {/* 👗 MUJERES */}
        <div className="dresscode__card dresscode__card--left">
          <img 
            src="/images/dress-woman.png" 
            alt="Damas" 
            className="dresscode__icon"
          />
          <h3>Damas</h3>
          <p>
            Outfit formal–casual<br />
            Vestidos o conjuntos elegantes<br />
            Tonos neutros, pasteles o dorados<br />

            <span className="dresscode__note">
              ✦ El color rojo está reservado para la quinceañera
            </span>
          </p>
        </div>

        {/* 🤵 HOMBRES */}
        <div className="dresscode__card dresscode__card--right">
          <img 
            src="/images/dress-man.png" 
            alt="Caballeros" 
            className="dresscode__icon"
          />
          <h3>Caballeros</h3>

          <p>
            Estilo formal–casual<br />
            Camisa, saco o traje relajado<br />
            Colores neutros u oscuros
          </p>
        </div>

      </div>

    </section>
  );
}