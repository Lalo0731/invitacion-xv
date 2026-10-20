




import { useState, useEffect } from "react";
import "../styles/components/rsvp.scss";

export default function RSVP() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [phoneConsent, setPhoneConsent] = useState(false);
  const [error, setError] = useState("");
  const [passes, setPasses] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [responseType, setResponseType] = useState(null); // "yes" | "no"
  const [validInvite, setValidInvite] = useState(false);
  const [sending, setSending] = useState(false);

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

  // const normalizedPhone = phone.replace(/[\s()-]/g, "");
  // const phoneIsValid = /^(?:\+?52)?\d{10}$/.test(normalizedPhone);

  const normalizedPhone = phone.replace(/\D/g, "");
  const phoneIsValid = /^\d{10}$/.test(normalizedPhone);

  const handleConfirm = (attending) => {
    if (!name.trim()) {
      setError("Por favor escribe tu nombre ✨");
      return;
    }

    if (!phoneIsValid) {
      setError(
        "Escribe un número de WhatsApp válido(10 dígitos)."
      );
      return;
    }

    // if (attending && !phoneConsent) {
    //   setError(
    //     "Acepta el aviso del recordatorio por WhatsApp para continuar."
    //   );
    //   return;
    // }

    setError("");
    setSending(true);

    const data = new URLSearchParams();
    data.append("name", name);
    data.append("attending", attending);
    data.append("passes", passes);
    data.append("phone", normalizedPhone);
    // data.append("phoneConsent", String(phoneConsent));

    fetch("https://script.google.com/macros/s/AKfycby_j0tCLIWenQZO60BQ_KWi4tJejCZoaT7mEYOcJkEsPKOjA9N5qQoUNqSg9oAPb-cGoQ/exec", {
      method: "POST",
      body: data,
    })
    .then(response => response.text())
    .then(result => {
      if (result.includes("DUPLICATE_PHONE")) {
        setError("Este número de WhatsApp ya fue registrado. Verifica el número e intenta con el correcto.");
        return;
      }

      if (!result.includes("OK")) {
        throw new Error("No se pudo confirmar el registro.");
      }
      setName("");
      setPhone("");
      setError("");

      setResponseType(attending ? "yes" : "no");
      setShowModal(true);
    })
    .catch(() => {
      setResponseType("error");
      setShowModal(true);
    })
    .finally(() => {
        setSending(false);
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
          disabled={!validInvite || sending}
        />

        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={10}
          placeholder="Tu número de WhatsApp (10 dígitos)"
          value={phone}
          onChange={(e) => {
            // Permite números, espacios, +, paréntesis y guiones.
            const value = e.target.value
              .replace(/[^\d+\s()-]/g, "")
              .slice(0, 18);

            setPhone(value);
            setError("");
          }}
          className="rsvp__input"
          disabled={!validInvite || sending}
        />
        {phoneIsValid && (
          <p className="rsvp__hint">
            ✨ Un día antes de la celebración te enviaremos un
            recordatorio por WhatsApp. ¡Esperamos verte ahí! 💖
          </p>
        )}

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