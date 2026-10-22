import styles from "./TreatmentCard.module.css";
import Image from "next/image";
import { ChevronRight } from "@/components/Icon/Icon";
import { TreatmentDataProps } from "@/lib/types";

type TreatmentCardProps = TreatmentDataProps & { index?: number };

const TreatmentCard = ({
  _id,
  id,
  title,
  img,
  condition,
  index = 99,
}: TreatmentCardProps) => {
  const cardId = String(_id ?? id);

  return (
    <div className={styles["treatment-card"]} id={cardId}>
      <div className={styles["treatment-card-img-wrapper"]}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 400px) 100vw, 400px"
          priority={index < 3}
          className={styles["treatment-card-img"]}
        />
      </div>

      <div className={styles["treatment-card-info"]}>
        <h3>{title}</h3>
        <div className={styles["treatment-card-info-con"]}>
          {/* Guard against null/undefined */}
          {condition?.map((con, i) => (
            <div
              key={`${cardId}-${i}`}
              className={styles["treatment-desc-wrapper"]}
            >
              <span>{con}</span>
              <ChevronRight className={styles["treatment-arrow-icon"]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;