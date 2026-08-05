import "../styles/components/rsvp.scss";

export default function RSVP() {
  return (
    <section className="rsvp">

      <div className="rsvp__card">

        <span className="rsvp__icon">💌</span>

        <h2 className="rsvp__title">
          Confirma tu asistencia
        </h2>

        <p className="rsvp__text">
          Tu presencia hará de este día un momento aún más especial.
          Por favor confirma tu asistencia antes del
          <strong> 10 de septiembre.</strong>
        </p>

        <div className="rsvp__buttons">

          <button className="rsvp__btn rsvp__btn--primary">
            Confirmar asistencia
          </button>

          <button className="rsvp__btn rsvp__btn--secondary">
            No podré asistir
          </button>

        </div>

      </div>

    </section>
  );
}