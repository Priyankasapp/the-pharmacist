"use client";

import FAQ from "@/components/Contact/FAQ/FAQ";
import TreatmentCard from "@/components/Lifestyle-treatmemts/TreatmentsCard/TreatmentCard";
import { treatments } from "@/lib/data";
import styles from "./LifestyleTreatments.module.css";
import Button from "@/components/Button/Button";

const LifestyleTreatments = () => {
  return (
    <div className="container">
      <div className={styles['lifestyle-header']}>
        <h1>Lifestyle Treatments</h1>
        <div className={styles['lifestyle-searchbar-wrapper']}>
            <input 
            type="text"
            placeholder="What condition are you looking for?"
            
            />
            <Button showArrow className={styles['lifestyle-button']}>Search</Button>
        </div>
      </div>

      <div className={styles['lifestyle-cards-container']}>
        {treatments.map((treatment, index) => (
          <div key={`${treatment.name || "treatment"}-${index}`}
          className={styles['lifestyle-card-wrapper']}>
            <TreatmentCard
              name={treatment.name}
              desc={treatment.desc}
              imgSrc={treatment.imgSrc}
            />
          </div>
        ))}
      </div>
      <div className={styles['faq-wrapper']}>
        <FAQ />
      </div>
    </div>
  );
};

export default LifestyleTreatments;
