
import styles from "./WhatWeOffer.module.css";
import { whatWeOffereCardData } from "@/lib/data";

const WhatWeOffer = () => {
  return (
    <div className={styles["what-we-offer"]}>
      <h2>
        What We <span>Offer</span>
      </h2>

      {/* cards  */}
      <div className={styles["what-we-offer-container"]}>
        <div className={styles["what-we-offer-cards"]}>
          {whatWeOffereCardData.map((card, index) => (
            <div key={index} className={styles["what-we-offer-card"]}>
              <h3 className={styles["what-we-offer-title"]}>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <button className={styles['what-we-offer-button']}>Explore Our Treatments</button>
      </div>
    </div>
  );
};

export default WhatWeOffer;
