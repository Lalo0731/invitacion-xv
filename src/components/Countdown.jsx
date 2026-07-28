import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2027-01-09T18:00:00");

  const [time, setTime] = useState(getTime());

  function getTime() {
    const now = new Date();
    const diff = targetDate - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <h2>Faltan</h2>

      <div className="countdown__grid">
        <div><span>{time.days}</span><p>Días</p></div>
        <div><span>{time.hours}</span><p>Horas</p></div>
        <div><span>{time.minutes}</span><p>Min</p></div>
        <div><span>{time.seconds}</span><p>Seg</p></div>
      </div>

      <p className="countdown__date">
        09 de Enero 2027 · 6:00 PM
      </p>
    </section>
  );
}