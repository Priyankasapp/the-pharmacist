/* eslint-disable react-hooks/set-state-in-effect */

'use client';
import SpecialistCard from './SpecialistCard'
import styles from "./Specialist.module.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { specalistDataSet } from '@/lib/data';
import { useEffect, useState } from 'react';


const getSpecialistPerPage = () =>{
  if(typeof window === "undefined") return 4;
  if(window.innerWidth <= 670) return 1;
  if(window.innerWidth <= 960) return 2;
  if(window.innerWidth <= 1280) return 3;
  return 4
};

const Specialist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specialisrPerPage, setSpecialistPerPage] = useState(4);
  const [isMounted, setIsMouted] = useState(false);

  useEffect(()=>{
    setIsMouted(true);
    setSpecialistPerPage(getSpecialistPerPage());
    const handleResize = () => setSpecialistPerPage(getSpecialistPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize",handleResize);
  }, []);


  const visibleSpecialists = specalistDataSet.slice(
    currentIndex,
    currentIndex + specialisrPerPage,
  );

  const handleNext = () => {
    if(currentIndex + specialisrPerPage < specalistDataSet.length){
      setCurrentIndex((prev) => prev + specialisrPerPage);
    }
  };

  const handlePrevious = () =>{
    if(currentIndex > 0){
      setCurrentIndex((prev) => prev - specialisrPerPage);
    }
  };

  
  return (
    <div className={styles['specialist-container']}>
      <h2 className={styles['specialist-heading']}>
        Specialist Care You Can <span>Trust</span>
      </h2>

      <div className={styles['specialist-viewport']}>
        <div className={styles['specialist-cards']}
        >
        {visibleSpecialists.map((specialist)=>{
          return(
            <div 
            key={specialist.name} 
            className={styles['specialist-card-item']}
        >
              <SpecialistCard
              name={specialist.name}
              imgSrc={specialist.imgSrc}
              role={specialist.role}
              registration={specialist.registration}
              description={specialist.description}
              />
            </div>
          )
        })}
      </div>

      </div>
      
      <div className={styles['specialist-icon-con']}>
        <button 
        type='button' 
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        aria-label='Previous specialist'>
          <ChevronLeft className={styles['specialist-icon']}/>
        </button>
        
        <button 
        type='button'
        onClick={handleNext}
        disabled={currentIndex + specialisrPerPage >= specalistDataSet.length}
        aria-label='Next Specialist'>
          <ChevronRight 
          className={styles['specialist-icon']}/>
        </button>
        
      </div>
    </div>
  )
}

export default Specialist