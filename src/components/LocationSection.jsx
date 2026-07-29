import React from "react";

export default function LocationSection() {
  return (
    <section className="location">

      <div className="location__card">

        <h2 className="location__title">Ubicación</h2>

        <p className="location__place">
          Salón Jardín Primavera
        </p>

        <p className="location__address">
          Av. Siempre Viva #123<br />
          Ciudad, Estado
        </p>

        <a
          href="https://www.google.com/maps?q=19.4326,-99.1332"
          target="_blank"
          rel="noopener noreferrer"
          className="location__btn"
        >
          Ver Ubicación
        </a>

      </div>
    </section>
  );
}