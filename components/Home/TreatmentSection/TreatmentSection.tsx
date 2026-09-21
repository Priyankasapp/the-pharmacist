/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import styles from "./TreatmentSection.module.css";
import { treatmentData } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TreatmentCard from "../TreatmentCard/TreatmentCard";

const getTreatmentCardsPerPage = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 550) return 1;
  if (window.innerWidth <= 700) return 2;
  if (window.innerWidth <= 1000) return 3;

  return 3;
};

const TreatmentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [treatmentCardPerPage, setTreatmentCardPerPage] = useState(3);
  

  useEffect(() => {
  
    setTreatmentCardPerPage(getTreatmentCardsPerPage);

    const handleResize = () =>
      setTreatmentCardPerPage(getTreatmentCardsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTreatmentCards = treatmentData.slice(
    currentIndex,
    currentIndex + treatmentCardPerPage,
  );
  const handleNext = () => {
    if (currentIndex + treatmentCardPerPage < treatmentData.length) {
      setCurrentIndex((prev) => prev + treatmentCardPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - treatmentCardPerPage);
    }
  };

  return (
    <section className={styles["treatment-section"]}>
      <div className={styles["treatment-header"]}>
        <h2 className={styles["treatment-heading"]}>
          From Better Sleep to Stronger Immunity, Discover{" "}
          <span>Lifestyle Treatments</span> That Improve Your <span>Daily</span>{" "}
          Wellness
        </h2>
        <div className={styles["treatment-slider"]}>
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous Treatment"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={
              currentIndex + treatmentCardPerPage >= treatmentData.length
            }
            aria-label="Next Treatment"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className={styles["treatment-card-container"]}>
        {visibleTreatmentCards.map((treatment) => {
          return (
            <div
              key={treatment.id}
              className={styles["treatment-card-item"]}
              id={String(treatment.id)}
            >
              <TreatmentCard
                id={treatment.id}
                img={treatment.img}
                title={treatment.title}
                condition={treatment.condition}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TreatmentSection;
