import React, { useEffect, useRef, useState } from "react";

export default function LocationSection() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`location ${visible ? "is-visible" : ""}`}>

      <img 
        src="/images/glass.png" 
        className="location__deco location__deco--left"
      />

      <img 
        src="/images/champagne.png" 
        className="location__deco location__deco--right"
      />

      <div className="location__card">
        <h2 className="location__title">Ubicación</h2>

        <p className="location__place">
          Salón flamingos
        </p>

        <p className="location__address">
          Calle Halcón número 371, entre Av Flamingos y priv. Flamingos, Col. Los Pájaros.<br />
          Tuxtla Gutiérrez, Chiapas.
        </p>

        <a
          href="https://maps.app.goo.gl/Cgn7cqkE1sQVsNFf6"
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