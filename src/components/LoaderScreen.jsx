import { useState } from "react";

export default function LoaderScreen({ onEnter }) {
  const [closing, setClosing] = useState(false);

  const handleEnter = () =>{
    setClosing(true);

    setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <div className={`loader ${closing ? "loader--exit" : ""}`}>
      <img
        src="/images/fondo.png" alt="fondo" className="loader__bg-img"/>

      <div className="loader__stars">
        {Array.from({ length: 70 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `scale(${0.4 + Math.random()})`
            }}
          />
        ))}
      </div>

      <div className="loader__overlay"></div>

      <img src="/images/flower-top-left.png" className="loader__flower loader__flower--tl" />
      <img src="/images/flower-top-right.png" className="loader__flower loader__flower--br" />
      <img src="/images/flower-bottom-left.png" className="loader__flower loader__flower--bl" />
      <img src="/images/flower-bottom-right.png" className="loader__flower loader__flower--tr" />
      <img src="/images/flower-top-right.png" className="loader__flower loader__flower--far-tr" />

      <div className="loader__envelope">
        <div className="loader__flap"></div>
      </div>

      <div className="loader__petals">
        {Array.from({ length: 20 }).map((_, i) => (
          <img
            key={i}
            src={i % 2 === 0 ? "/images/petal1.png" : "/images/petal2.png"}
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 8 + Math.random() * 8 + "s",
              animationDelay: Math.random() * 6 + "s",
              transform: `scale(${0.5 + Math.random() * 1.2}) rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      <div className="loader__gold-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="loader__content">
        <div className="loader__card">

          <p className="loader__top">
            ESTÁS INVITADO A CELEBRAR
          </p>

          <h2 className="loader__mis">MIS</h2>
          <h1 className="loader__xv">XV</h1>
          <span className="loader__years">AÑOS</span>

          <div className="loader__divider"></div>

          <h2 className="loader__name">Patas</h2>

          <p className="loader__text">
            TE INVITO A SER PARTE DE ESTE MOMENTO TAN ESPECIAL EN MI VIDA
          </p>

          <button className="loader__btn" onClick={handleEnter}>
            VER INVITACIÓN
          </button>

        </div>
        
        <div className="loader__card-stand">
          <div className="loader__triangles"></div>
            <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
              <path
                d="
                  M40,80
                  Q100,30 160,70
                  Q200,100 240,70
                  Q300,30 360,80
                  L360,120
                  Q200,160 40,120
                  Z
                "
                fill="#000"
              />

              <path
                d="
                  M40,80
                  Q100,30 160,70
                  Q200,100 240,70
                  Q300,30 360,80
                "
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
                opacity="0.5"
              />

              <path
                d="
                  M180,105
                  Q200,120 220,105
                  M170,110
                  Q200,135 230,110
                "
                stroke="#d4af37"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
            </svg>
        </div>
      </div> 
    </div>
  );
}