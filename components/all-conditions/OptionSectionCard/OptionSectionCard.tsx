import { NHS } from "@/data/assets";
import styles from "./OptionSectionCard.module.css"
import Image from "next/image";
import { HealthConditionData } from "@/lib/types";
const OptionSectionCard = ({name,id,desc,isNHS}:HealthConditionData) => {
  return (
    <div className={styles['option-section-card']} id={id}>
        <div className={styles['option-section-card-wrapper']}> 
            {/* image  */}
            {isNHS && (
                 <div className={styles['option-section-image-wrapper']}>
                <Image src={NHS} alt="NHS" className={styles['option-section-image']}/>
            </div>
            )}
           
            {/* contect  */}
            <div className={styles['option-section-card-container']}>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  );
}

export default OptionSectionCard
