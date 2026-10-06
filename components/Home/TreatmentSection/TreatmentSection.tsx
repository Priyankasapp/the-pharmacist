
import styles from "./TreatmentSection.module.css";
import { treatmentData } from "@/lib/data";
import TreatmentCard from "../TreatmentCard/TreatmentCard";
import Button from "@/components/Button/Button";
import { ChevronLeft, ChevronRight } from "@/components/Icon/Icon";
import Slider from "react-slick";

type CustomArrowProps = {
  onClick?: () => void;
  
};


function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["next-arrow"]}`}
      onClick={onClick}
      aria-label="Next specialist"
    >
     <ChevronRight/>
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
      onClick={onClick}
      aria-label="Previous specialist"
    >
     
        <ChevronLeft/> 
    </button>
  );
}


const TreatmentSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

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
      
      </div>
      <div className={styles['treatment-cards']}>
         <div className={styles["treatment-card-container"]}>
        


        <Slider {...settings}>
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
