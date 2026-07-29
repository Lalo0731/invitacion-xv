export default function DressCode() {
  return (
    <section className="dresscode">

      <h2 className="dresscode__title">Dress Code</h2>

      <div className="dresscode__content">

        {/* 👗 MUJERES */}
        <div className="dresscode__card dresscode__card--left">
          <h3>Damas</h3>
          <p>
            Vestido elegante<br />
            Tonos neutros, dorado o negro<br />
            <span className="dresscode__note">
              * Reservar el color rojo para la quinceañera
            </span>
          </p>
        </div>

        {/* 🤵 HOMBRES */}
        <div className="dresscode__card dresscode__card--right">
          <h3>Caballeros</h3>
          <p>
            Traje formal<br />
            Colores oscuros o elegantes
          </p>
        </div>

      </div>

    </section>
  );
}