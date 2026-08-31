// 'use client'
// import styles from "./PharmacyCard.module.css"
// import {ChevronRight} from "lucide-react"

// type PharmacyMenuProps = {
//     isOpen:boolean;
// }
// const PharmacyCard = ({isOpen}:PharmacyMenuProps) => {
//     if(!isOpen) return null;
//   return (
//     <div className={styles['pharmacy-mini-card']}>
//         <div className={styles['pharmacy-box']}>
//             {/* Details  */}
//             <div className={styles['pharmacy-details']}>
//                 <h3>Silver Lane - The Pharmacist</h3>
//                 <p>45 Maple Drive in Light, WN7 1AA</p>
//                 <div className={styles['pharmacy-links']}>
//                     <a href="tel-01234567890">01234567890</a>
//                     <span className={styles['pharmacy-dot']}>•</span>
//                     <a>contact@yourpharmacy.co.uk</a>
//                 </div>
//                  <p className={styles['pharmacy-hours']}>Today&apos;s opening hours <span>9:00 AM - 5:30 PM</span></p>
//             </div>
//             <div>
//                 <ChevronRight style={{ color: "var(--tp-green)"}}/>
//             </div>
        
//         </div>
//         <div className={styles['pharmacy-another-detail']}>
//             <span>Choose another pharmacy</span>
//             <ChevronRight style={{ color: "var(--tp-green)"}}/>
//         </div>
//     </div>
//   )
// }

// export default PharmacyCard

'use client'
import { pharmacy } from "@/lib/data";
import styles from "./PharmacyCard.module.css"
import { ChevronRight } from "lucide-react";

interface PharmacyCardProps {
    onClose?: () => void;
}

const PharmacyCard = ({onClose}: PharmacyCardProps) => {
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
