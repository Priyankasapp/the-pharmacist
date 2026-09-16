/* eslint-disable react/jsx-key */
import styles from "./TreatmentCard.module.css";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { TreatmentDataProps } from "@/types/type";

const TreatmentCard = ({id, title, img, condition}:TreatmentDataProps) => {
  return (
    <div className={styles['treatment-card']} id={String(id)}>
        <div className={styles['treatment-card-container']}></div>
            <div className={styles['treatment-card-img-wrapper']} >
            <Image
            src = {img}
            alt ={title}
            className={styles['treatment-card-img']}/>
        </div>

        <div className={styles['treatment-card-info']}>

                <h3 >{title}</h3>
                <div className={styles['treatment-card-info-con']}>

                    {condition.map((con)=>(
                         <div className={styles['treatment-desc-wrapper']}>
                        <span>{con}</span>
                        <ChevronRight/>
                    </div>
                    ))}
                   

                    
                </div>
            
        </div>

           </div>
  )
}

export default TreatmentCard