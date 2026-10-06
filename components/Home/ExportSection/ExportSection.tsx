/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ChevronLeft, ChevronRight } from "@/components/Icon/Icon";
import styles from "./ExportSection.module.css";
import Slider from "react-slick";
import { exportCardInfo } from "@/lib/data";
import ExportCard from "@/components/ExportCard/ExportCard";
import Button from "@/components/Button/Button";
import { useRef } from "react";

const ExportSection = () => {
  const sliderRef = useRef<any>(null);

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <section className={styles["export-section"]}>
      

         <div className={styles["export-header"]}>
        <div className={styles["export-header-text"]}>
          <h2 className={styles["section-title"]}>
            Your Health Supported by Our <span>Export Pharmacy</span> Team
          </h2>

          <div className={styles["export-header-bottom"]}>
            <p>
              Whether it&apos;s a repeat prescription or an online consultation,
              we have the right service for you.
            </p>
          </div>
        </div>

        <div className={styles["export-header-actions"]}>
          <button
            type="button"
            className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
            onClick={goPrev}
            aria-label="Previous services"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className={`${styles["slider-arrow"]} ${styles["next-arrow"]}`}
            onClick={goNext}
            aria-label="Next services"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={styles['export-info']}>
        <Slider ref={sliderRef} {...settings}>
          {exportCardInfo.map((info) => (
            <div key={info.id} className={styles["export-card-wrapper"]}>
              <ExportCard
                img={info.img}
                id={info.id}
                title={info.title}
                desc={info.desc}
                isnhs={info.isnhs}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles['export-card-button-wrapper']}>
            <Button showArrow className={styles['export-card-button']}>View All Services</Button>
          </div>
    </section>
  )
}

export default ExportSection;