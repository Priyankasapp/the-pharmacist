// 'use client'
// import React, {useRef} from 'react';
// import {Swiper, SwiperSlide} from 'swiper/react';
// import {} from 'swiper/modules';


// import PatientsCard from '@/components/PatientsCard/PatientsCard';
// import styles from "./Patients.module.css"
// import { patients } from '@/lib/data';
// import { ChevronLeft, ChevronRight } from '@/components/Icon/Icon';

// const Patients = () => {
//   return (
//     <div className={styles['patients-container']}>
//       <h2>Hear From Our Patients</h2>

//       {/* slider */}
//       <div className={styles['patients-slider-viewport']}>
//         <div className={styles['patients-cards-wrapper']}>
//           {patients.map((patient)=>{
//             return(
//               <div key={patient.id} className={styles['patients-card-item']}>
//                 <PatientsCard
//                 key={patient.id}
//                 id={patient.id}
//                 title={patient.title}
//                 name={patient.name}
//                 rating={patient.rating}
//                 imgSrc={patient.imgSrc}
//                 description={patient.description}/>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <div className={styles['patient-controls']}>
//         <button className={styles['control-btn']}>
//           <ChevronLeft />
//         </button>
//           <button className={styles['control-btn']}>
//           <ChevronRight />
//           </button>
          
//       </div>
//     </div>
//   )
// }

// export default Patients;

"use client";

import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import PatientsCard from "@/components/PatientsCard/PatientsCard";
import styles from "./Patients.module.css";
import { patients } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "@/components/Icon/Icon";

const Patients = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const displayPatients = patients.length < 6 ? [...patients, ...patients, ...patients]: patients;

  const handlePrev = () => {
    if(swiperRef.current){
      swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if(swiperRef.current){
      swiperRef.current.slideNext();
    }
  }
  return (
    <section className={styles["patients-container"]}>
      <h2>Hear From Our Patients</h2>

      {/* Slider area */}
      <div className={styles["patients-slider-viewport"]}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          effect="coverflow"
          slidesPerView="auto"
          spaceBetween={24}
          centeredSlides={true}
          loop={true}
          
          grabCursor={true}
          speed={600}
           coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          className={styles["patients-swiper"]}
        >
          {patients.map((patient) => (
            <SwiperSlide key={patient.id} className={styles["patients-card-item"]}>
              <PatientsCard
                id={patient.id}
                title={patient.title}
                name={patient.name}
                rating={patient.rating}
                imgSrc={patient.imgSrc}
                description={patient.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Arrows */}
      <div className={styles["patient-controls"]}>
        <button
          className={styles["control-btn"]}
         onClick={handlePrev}
            aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>

        <button
          className={styles["control-btn"]}
           onClick={handleNext}
            aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Patients;






