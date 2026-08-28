import SpecialistCard from './SpecialistCard'
import styles from "./Specialist.module.css";
import { DrAisaKhan, DrEmily, DrEmilyWaston, DrJamesRobertson, DrSharahChen } from '@/data/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const specialistDataSet = [
  {
    imgSrc:DrSharahChen,
    name:"Dr. Sarah Chen",
    role:"Lead Clinician & GP",
    registration:"GMC Registration: 9876543",
    description:"Dr. Sarah Chen is a practising NHS GP who brings extensive primary care expertise to our clinical team. "
  },
  {
    imgSrc:DrAisaKhan,
    name:"Dr. Aisha Khan",
    role:"Mental Health Specialist ",
    registration:"GPhC Registration: 7654321",
    description:"Dr. Aisha Khan provides specialist oversight for mental health services, including anxiety and ADHD treatment."
  },
  {
    imgSrc:DrEmily,
    name:"Mrs. Emily Watson",
    role:"Clinical Pharmacist & Advisor",
    registration:"GMC Registration: 9876543",
    description:"Ms. Emily Watson specialises in women's health and contraception, focusing on patient education and support."
  },
  {
    imgSrc:DrJamesRobertson,
    name:"Mr. James Robertson",
    role:"Lead Clinician & GP",
    registration:"GMC Registration: 9876543",
    description:"James provides final clinical review for all prescriptions, ensuring medication safety and appropriateness."
  }
];

const Specialist = () => {
  return (
    <div className={styles['specialist-container']}>
      <h2 className={styles['specialist-heading']}>
        Specialist Care You Can <span>Trust</span>
      </h2>

      <div className={styles['specialist-cards']}>
        {specialistDataSet.map((specialist)=>{
          return(
            <div key={specialist.name}>
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

      <div className={styles['specialist-icon-con']}>
        <ChevronLeft className={styles['specialist-icon']}/>
        <ChevronRight className={styles['specialist-icon']}/>
      </div>
    </div>
  )
}

export default Specialist