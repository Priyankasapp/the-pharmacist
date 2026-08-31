/* eslint-disable react/jsx-key */
import PatientsCard from '@/components/PatientsCard/PatientsCard';
import styles from "./Patients.module.css"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { patients } from '@/lib/data';

const Patients = () => {
  return (
    <div className={styles['patients-container']}>
      <h2>Hear From Our Patients</h2>

      {/* slider */}
      <div className={styles['patients-slider-viewport']}>
        <div className={styles['patients-cards-wrapper']}>
          {patients.map((patient)=>{
            return(
              <div key={patient.id} className={styles['patients-card-item']}>
                <PatientsCard
                id={patient.id}
                title={patient.title}
                name={patient.name}
                rating={patient.rating}
                imgSrc={patient.imgSrc}
                description={patient.description}/>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles['patient-controls']}>
        <button className={styles['control-btn']}>
          <ChevronLeft size={24}/>
        </button>
          <button className={styles['control-btn']}>
          <ChevronRight size={24}/>
          </button>
          
      </div>
    </div>
  )
}

export default Patients;
