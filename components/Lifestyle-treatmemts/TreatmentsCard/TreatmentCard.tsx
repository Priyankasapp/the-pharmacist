
import styles from "./TreatmentCard.module.css";
import Image from "next/image";
import { Treatments } from "@/lib/types";
import Button from "@/components/Button/Button";

const TreatmentCard = ({ name, desc, imgSrc }: Treatments) => {
  return (
    <div className={styles["treatment-card"]}>
      <div className={styles["treatment-card-header"]}>
        <h3 className={styles["treatment-card-title"]}>{name}</h3>
        <p className={styles["treatment-card-description"]}>{desc}</p>
      </div>

      <div className={styles["treatment-card-image-wrapper"]}>
        <Image
          src={imgSrc}
          alt={name}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 423px"
          className={styles["treatment-card-image"]}
        />
      </div>

      <div className={styles["treatment-card-button-wrapper"]}>
        <Button className={styles["treatment-card-wrapper-button"]} showArrow>
          View Treatments
        </Button>
      </div>
    </div>
  );
};

export default TreatmentCard;