import { useState, useEffect } from "react";
import "../styles/components/rsvp.scss";

export default function RSVP() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [passes, setPasses] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [responseType, setResponseType] = useState(null); // "yes" | "no"
  const [validInvite, setValidInvite] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const inv = params.get("inv");

    const codes = {
      agod1: { passes: 1 },
      agod2: { passes: 2 },
      agod3: { passes: 3 },
      agod4: { passes: 4 },
      agod5: { passes: 5 },
    };

    if (inv && codes[inv]) {
      setPasses(codes[inv].passes);
      setValidInvite(true);
    } else {
      setValidInvite(false);
    }
  }, []);

  const handleConfirm = (attending) => {
    if (!name.trim()) {
      setError("Por favor escribe tu nombre ✨");
      return;
    }

    const data = new URLSearchParams();
    data.append("name", name);
    data.append("attending", attending);
    data.append("passes", passes);

    fetch("https://script.google.com/macros/s/AKfycbyq_fUMO5TgWdPU1B2s7SdVlf9ZywLAkhrf8k-aq_qQifne3oRwk3Bxb-Ety8QwbRupcA/exec", {
      method: "POST",
      body: data,
    })
    .then(() => {
      setResponseType(attending ? "yes" : "no");
      setShowModal(true);
    })
    .catch(() => {
      setResponseType("error");
      setShowModal(true);
    });
  };

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

        {!validInvite && (
          <p className="rsvp__error">
            Esta invitación no es válida 💔
          </p>
        )}

        <input
          type="text"
          placeholder="Escribe tu nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rsvp__input"
        />

        {error && <p className="rsvp__error">{error}</p>}

        <p className="rsvp__passes">
          Tienes <strong>{passes}</strong> pase{passes > 1 ? "s" : ""} asignado{passes > 1 ? "s" : ""}
        </p>

        <div className="rsvp__buttons">

          <button 
            className="rsvp__btn rsvp__btn--primary" 
            onClick={() => handleConfirm(true)}
            disabled={!validInvite}
          >
            Confirmar asistencia
          </button>

          <button 
            className="rsvp__btn rsvp__btn--secondary" 
            onClick={() => handleConfirm(false)}
            disabled={!validInvite}
          >
            No podré asistir
          </button>

        </div>

      </div>

      {showModal && (
        <div className="rsvp__modal">

          <div className="rsvp__modalContent">

            <button 
              className="rsvp__close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            {responseType === "yes" && (
              <>
                <h3>¡Gracias! ✨</h3>
                <p>
                  Tu asistencia ha sido confirmada.<br/>
                  Nos llena de alegría compartir este momento contigo 💖
                </p>
              </>
            )}

            {responseType === "no" && (
              <>
                <h3>Te extrañaremos 💔</h3>
                <p>
                  Gracias por avisarnos.<br/>
                  Esperamos coincidir en otra ocasión especial ✨
                </p>
              </>
            )}

            {responseType === "error" && (
              <>
                <h3>Oops...</h3>
                <p>
                  Hubo un problema al enviar tu respuesta 😢<br/>
                  Intenta nuevamente.
                </p>
              </>
            )}

          </div>

        </div>
      )}

    </section>
  );
}