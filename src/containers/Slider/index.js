import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Trie les événements par date décroissante si data.focus est défini
  const byDateDesc = data?.focus?.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  useEffect(() => {
    // Définit un intervalle pour changer automatiquement les cartes du slider
    const timer = setInterval(() => {
      if (byDateDesc && byDateDesc.length > 1) {
        setIndex((prevIndex) => (prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0));
      }
    }, 5000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => {
      clearInterval(timer);
    };
  }, [byDateDesc]); // Déclenche l'effet à chaque changement de byDateDesc

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.id || idx} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => (
            <input
              key={`radio-${event.id || radioIdx}`} 
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              readOnly // Utilisation de readOnly pour empêcher les modifications
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
