/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./TreatmentSection.module.css";
import { treatmentData } from "@/lib/data";
import TreatmentCard from "../TreatmentCard/TreatmentCard";
import Button from "@/components/Button/Button";
import { ChevronLeft, ChevronRight } from "@/components/Icon/Icon";
import Slider from "react-slick";
import { useRef } from "react";

const TreatmentSection = () => {
const slideRef = useRef<any>(null);

 const goPrev = () => slideRef.current?.slickPrev();
  const goNext = () => slideRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
       {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <section className={styles["treatment-section"]}>
      <div className={styles["treatment-header"]}>
        <h2 className={styles["treatment-heading"]}>
          From Better Sleep to Stronger Immunity, Discover{" "}
          <span>Lifestyle Treatments</span> That Improve Your <span>Daily</span>{" "}
          Wellness
        </h2>

        <div className={styles["treatment-header-actions"]}>
          <button
            type="button"
            className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
            onClick={goPrev}
            aria-label="Previous treatments"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className={`${styles["slider-arrow"]} ${styles["next-arrow"]}`}
            onClick={goNext}
            aria-label="Next treatments"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className={styles['treatment-cards']}>
         <div className={styles["treatment-card-container"]}>
        


        <Slider ref={slideRef} {...settings}>
              {treatmentData.map((treatment) => {
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
        </Slider>
      </div>
        <div className={styles['treatment-card-wrapper']}>
          <Button showArrow className={styles['treatment-card-button']}>View All Treatments</Button>
        </div>
      </div>
     
    </section>
  );
};

export default TreatmentSection;  
