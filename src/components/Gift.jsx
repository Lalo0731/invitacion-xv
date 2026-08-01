import { useState } from "react";
import butterfly from "../../public/images/butterfly-1.png";
import envelopeIcon from "../../public/images/envelopeIcon.png";
import giftIcon from "../../public/images/giftIcon.png";

export default function Gift() {
     const [open, setOpen] = useState(false);
     return (
          <section className="gift">

               <div 
                    className={`present ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
               >
                    <div className="gift__hint">
                         Toca para abrir
                    </div>

                    <div className="lid">
                         <span></span>
                    </div>

               <div className="gift__message">
                    <h3>TU PRESENCIA ES MI MAYOR REGALO</h3>
                    <p>
                         Sin embargo, si deseas obsequiarme algo <br/>
                         especial lo agradecería de corazón.
                    </p>
                    <div className="gift__options">

                         <div className="gift__option">
                              <img src={envelopeIcon} alt="sobre" />
                              <p>Lluvia de sobres</p>
                         </div>

                         <div className="gift__option">
                              <img src={giftIcon} alt="regalo" />
                              <p>Regalo</p>
                         </div>

                         </div>
                    </div>

               <div className="gift__inside">
                    <img src={butterfly} className="b b1" />
                    <img src={butterfly} className="b b2" />
                    <img src={butterfly} className="b b3" />
                    <img src={butterfly} className="b b4" />
                    <img src={butterfly} className="b b5" />
               </div>

               <div className="box">
                    <span></span>
                    <span></span>
               </div>

               </div>

          </section>
     );
}