
'use client';


import styles from "./Specialist.module.css";
import Slider from "react-slick";
import SpecialistCard from "./SpecialistCard";
import { specalistDataSet } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "@/components/Icon/Icon";

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

const Specialist = () => {
  const settings = {
    dots: false,
    infinite: true,
    accessibility: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["specialist-container"]}>
      <h2 className={styles["specialist-heading"]}>
        Specialist Care You can <span>Trust</span>
      </h2>

      <div className={styles["specialist-viewport"]}>
        <Slider {...settings}>
          {specalistDataSet.map((specialist) => (
            <div key={specialist.name} className={styles["slide-item"]}>
              <SpecialistCard
                name={specialist.name}
                imgSrc={specialist.imgSrc}
                role={specialist.role}
                registration={specialist.registration}
                description={specialist.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Specialist;