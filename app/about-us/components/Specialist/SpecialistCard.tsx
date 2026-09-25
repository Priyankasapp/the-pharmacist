
import styles from "./Specialist.module.css";
import Image, { StaticImageData } from "next/image";
import {  ChevronRight } from "lucide-react";

interface SpecialistCardProps {
    imgSrc: string | StaticImageData;
    name: string;
    role:string;
    registration:string;
    description:string;
    
    
}
const SpecialistCard = ({name, imgSrc,role,registration,description}:SpecialistCardProps) => {
  return (
    <div className={styles['specialist-card-container']}>
       

            <div className={styles['specialist-card-image-container']}>
            <Image 
            src={imgSrc}
            alt={name}
            className={styles['specialist-card-image']}
            priority
            />
            </div>

            {/* Description  */}
            <div className={styles['specialist-card-desc-section']}>
                <div className={styles['specialist-card-heading-section']}>
                    <h3>{name}</h3>
                    <b>{role}</b> 
                    <p>{registration}</p>

                </div>
                <div className={styles['specialist-card-description-section']}>
                    <p>{description}</p>

                   <div className={styles['specialist-card-link-section']}>
                     <a href="#">Meet {name} </a>
                    <ChevronRight className={styles['link-icon']}/>
                   </div>
                </div>
            </div>
        
    </div>
  )
}

export default SpecialistCard