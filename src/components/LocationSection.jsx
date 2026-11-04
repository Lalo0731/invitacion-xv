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
        <h2 className="location__title">Ubicaciones</h2>

        <div className="location__item">
          <p className="location__place">Ceremonia religiosa</p>
          <p className="location__time">7:00 p. m.</p>
          <p className="location__address">
            Iglesia Parroquia Señor de la Divina Misericordia y San Antonio Abad.
          </p>
          <a
            href="https://www.google.com/maps/place/16%C2%B044'13.0%22N+93%C2%B004'47.9%22W/@16.736945,-93.0825416,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.736945!4d-93.0799667?hl=es&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="location__btn"
          >
            Ver ubicación de la ceremonia
          </a>
        </div>

        <div className="location__divider" />

        <div className="location__item">
          <p className="location__place">Fiesta</p>
          <p className="location__time">Salón Flamingos</p>
          <p className="location__address">
            Calle Halcón número 371, entre Av. Flamingos y
            Priv. Flamingos, Col. Los Pájaros.
            <br />
            Tuxtla Gutiérrez, Chiapas.
          </p>
          <p className="location__time">8:00 p. m.</p>
          <a
            href="https://maps.app.goo.gl/Cgn7cqkE1sQVsNFf6"
            target="_blank"
            rel="noopener noreferrer"
            className="location__btn"
          >
            Ver ubicación de la fiesta
          </a>
        </div>
      </div>
    </section>
  );
}