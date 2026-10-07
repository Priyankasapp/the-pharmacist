'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import PatientsCard from '@/components/PatientsCard/PatientsCard';
import styles from './Patients.module.css';
import { patients } from '@/lib/data';
import { ChevronLeft, ChevronRight } from '@/components/Icon/Icon';

const Patients = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles['patients-container']}>
      <h2>Hear From Our Patients</h2>

      {/* slider */}
      <div className={styles['patients-slider-viewport']}>
        <Slider ref={sliderRef} {...settings}>
          {patients.map((patient) => (
            <div key={patient.id} className={styles['patients-card-item']}>
              <PatientsCard
                id={patient.id}
                title={patient.title}
                name={patient.name}
                rating={patient.rating}
                imgSrc={patient.imgSrc}
                description={patient.description}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles['patient-controls']}>
        <button
          type="button"
          className={styles['control-btn']}
          onClick={goPrev}
          aria-label="Previous patient feedback"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className={styles['control-btn']}
          onClick={goNext}
          aria-label="Next patient feedback"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Patients;