import styles from "./TreatmentCard.module.css";
import Image from "next/image";
import { Treatments } from "@/lib/types";
import Button from "@/components/Button/Button";
const TreatmentCard = ({ name, desc, imgSrc}:Treatments) => {
  return (
    <div className={styles["treatement-card"]}>
      <div className={styles["treatment-card-header"]}>
        <h3>{name}</h3>
        <p className={styles["treatment-crard-description"]}>
          {desc}
        </p>
      </div>

      <div className={styles['treatment-card-image-wrapper']}>
        <Image
        src={imgSrc}
        alt={name}
        className={styles['treatment-card-Image']}/>
      </div>

      <div className={styles['treatment-card-button-wrapper']}>
        <Button className={styles['treatment-card-wrapper-button']} showArrow>View Treatments</Button>
      </div>
    </div>
  );
};

export default TreatmentCard;
