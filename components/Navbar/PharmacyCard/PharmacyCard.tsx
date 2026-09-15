
'use client'
import { pharmacy } from "@/lib/data";
import styles from "./PharmacyCard.module.css"
import { ChevronRight } from "lucide-react";


const PharmacyCard = () => {
  return (
    <div className={styles['pharmacy-wrapper']}>
      <div className={styles['pharmacy-current-pharmacy']}>
        <div className={styles['pharmacy-info']}>
            <h3>{pharmacy.name}</h3>
            <div className={styles['pharmacy-contact-details']}>
                 <p>{pharmacy.address}</p>

            <div className={styles['pharmacy-contact']}>
                <a href={`tel:${pharmacy.phone}`}>
                    {pharmacy.phone}
                </a>
                <span>•</span>
                <a href={`mailto:${pharmacy.email}`}>
                    {pharmacy.email}
                </a>
            </div>

            </div>
           
            <div className={styles['pharmacy-hours']}>
                <span>Todays opening hours</span>
                <span>{pharmacy.openingHouers}</span>
            </div>
        </div>

        <ChevronRight className={styles['pharmacy-arrow']}/>
</div>
        {/* choose another pharmacy  */}
        <button className={styles['pharmacy-choose-button']}>
            <span>Choose another pharmacy</span>
            <ChevronRight className={styles['pharmacy-arrow']}/>
        </button>
      
    </div>
  )
}

export default PharmacyCard
