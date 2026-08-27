import { DrAisaKhan, DrSharahChen } from "@/data/assets";
import styles from "./Specialist.module.css";
import Image from "next/image";
import {  ChevronRight } from "lucide-react";

const SpecialistCard = () => {
  return (
    <div className={styles['specialist-card-container']}>
       

            <div className={styles['specialist-card-image-container']}>
            <Image 
            src={DrSharahChen}
            alt="DrAlias"
            className={styles['specialist-card-image']}
            priority
            />
            </div>

            {/* Description  */}
            <div className={styles['specialist-card-desc-section']}>
                <div className={styles['specialist-card-heading-section']}>
                    <h3>Dr.Aisha Khan</h3>
                    <b>Mental Health Specialist</b> 
                    <p>GMC Registration:7654321</p>

                </div>
                <div className={styles['specialist-card-description-section']}>
                    <p>Dr. Aisha Khan provides specialist oversight for mental health services, including anxiety and ADHD treatment.</p>

                   <div className={styles['specialist-card-link-section']}>
                     <a href="#">Meet Dr. Aisha Khan </a>
                    <ChevronRight className={styles['link-icon']}/>
                   </div>
                </div>
            </div>
        
    </div>
  )
}

export default SpecialistCard