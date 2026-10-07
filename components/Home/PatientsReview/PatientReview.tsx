'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { VectorEight } from '@/data/assets';
import styles from './PatientReview.module.css';
import { patients } from '@/lib/data';
import PatientsCard from '@/components/PatientsCard/PatientsCard';
import { ChevronLeft, ChevronRight } from '@/components/Icon/Icon';

const PatientReview = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles['patient-review-section']}>
      {/* background img */}
      <div className={styles['patient-review-bg-img-wrapper']}>
        <Image
          src={VectorEight}
          alt="vector Image"
          className={styles['patient-review-bg-img']}
        />
      </div>

      <div className={styles['patient-review-info-con']}>
        {/* left section */}
        <div className={styles['patient-review-left-section']}>
          <h2>
            Hear From Our <span>Patients</span>
          </h2>

          <p>
            Discover patient experiences that highlight our commitment to
            trusted care and professional guidance.
          </p>

          <div className={styles['patient-icon-wrapper']}>
            <button type="button" onClick={handlePrevious} aria-label="previous">
              <ChevronLeft className={styles['chevron-icon']} />
            </button>
            <button type="button" onClick={handleNext} aria-label="next">
              <ChevronRight className={styles['chevron-icon']} />
            </button>
          </div>
        </div>

        {/* right section */}
        <div className={styles['patient-review-right-section']}>
          <Slider ref={sliderRef} {...settings}>
            {patients.map((patient) => (
              <div key={patient.id} className={styles['patient-card-item']}>
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
      </div>
    </section>
  );
};

export default PatientReview;