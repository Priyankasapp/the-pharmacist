import { DrAisaKhan } from "@/data/assets";
import styles from "./PatientsCard.module.css";
import { Star } from "lucide-react";
import Image from "next/image";

const PatientsCard = ({ rating = 5   }) => {
  return (
    <div className={styles["patient-card-module"]}>
      {/* top  */}
      <div>
        <p className={styles["patient-card-description"]}>
          Uniquely strategize 2.0 portals after fully researched vortals.
          Quickly repurpose front- end metrics through
        </p>
      </div>
      {/* middle  */}
      <div className={styles["patients-card-middle-section"]}>
        {/* line  */}
        <div className={styles["patients-card-line"]}></div>
        {/* image  */}
        <div className={styles["patients-card-image-container"]}>
          <div className={styles["patients-card-image-wrapper"]}>
            <Image
              src={DrAisaKhan}
              alt="dfsd"
              className={styles["patients-card-image"]}
            />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className={styles["patient-card-bottom-section"]}>
        {/* left   */}
        <div>
          <h3>Moris Jonson</h3>
          <p>CEO, Hook Int.Ltd.</p>
        </div>

        {/* images  */}
        <div className={styles["patient-card-star-container"]}>
        {[...Array(5)].map((_, index) => {
                    const starNumber = index + 1;
                    return (
                        <Star 
                            key={index} 
                            size={18}
                            className={starNumber <= rating ? styles['star-filled'] : styles['star-empty']} 
                        />
                    );
                })}
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
