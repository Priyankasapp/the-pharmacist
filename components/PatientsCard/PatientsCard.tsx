'use client'
import styles from "./PatientsCard.module.css";
import { Star } from "lucide-react";
import Image from "next/image";
import { Patients } from "@/lib/types";

const PatientsCard = ({ id, name, title, description,imgSrc,rating = 5   }:Patients) => {
  return (
    <div className={styles["patient-card-module"]}>
      {/* top  */}
      <div className={styles["patient-card-top-section"]}>
        <p className={styles["patient-card-description"]}>
          {description}
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
              src={imgSrc}
              alt={name}
              className={styles["patients-card-image"]}
            />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className={styles["patient-card-bottom-section"]}>
        {/* left   */}
        <div>
          <h3>{name}</h3>
          <p>{title}</p>
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
