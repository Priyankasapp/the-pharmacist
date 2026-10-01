
import styles from "./TreatmentCard.module.css";
import Image from "next/image";
import { TreatmentDataProps } from "@/types/type";
import { ChevronRight } from "@/components/Icon/Icon";


const TreatmentCard = ({ id, title, img, condition }: TreatmentDataProps) => {
  return (
    <div className={styles["treatment-card"]} id={String(id)}>
      <div className={styles["treatment-card-img-wrapper"]}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 400px) 100vw, 400px"
          priority={id <= 3}
          className={styles["treatment-card-img"]}
        />
      </div>

      <div className={styles["treatment-card-info"]}>
        <h3>{title}</h3>
        <div className={styles["treatment-card-info-con"]}>
          {condition.map((con, index) => (
            <div key={`${id}-${index}`} className={styles["treatment-desc-wrapper"]}>
              
              <span >{con}</span>
                <ChevronRight  className={styles['treatment-arrow-icon']}/>
              
              
            </div>

          ))}
         
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
