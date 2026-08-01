import { useState } from "react";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo1.jpg",
];

export default function PhotoPreview() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="photos">

      <h2 className="photos__title">Sesión de Fotos</h2>

      <div className="photos__stack" onClick={() => setOpen(true)}>
        <img src={images[1]} className="photos__img photos__img--back1" />
        <img src={images[2]} className="photos__img photos__img--back2" />
        <img src={images[0]} className="photos__img photos__img--main" />
      </div>

      <p className="photos__hint">
        Toca la imagen para ver la galería ✨
      </p>

      {open && (
        <div className="photos__modal" onClick={() => setOpen(false)}>

          <button className="photos__close" onClick={() => setOpen(false)}>
            ✕
          </button>

          <button className="photos__nav photos__nav--left" onClick={prev}>
            ‹
          </button>

          <div className="photos__viewer" onClick={(e) => e.stopPropagation()}>
            <img src={images[current]} />
          </div>

          <button className="photos__nav photos__nav--right" onClick={next}>
            ›
          </button>

        </div>
      )}

    </section>
  );
}