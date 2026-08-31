import Button from "@/components/Button/Button";
import {
  ChevronDown,
  MapPin,
  PhoneCall,
  RotateCwFadingClock,
} from "lucide-react";
import styles from "./FindPharmacyCard.module.css";

const FindPharmacyCard = () => {
  return (
    <div className={styles["find-pharmacy-card"]}>
      <div className={styles["find-pharmacy-card-container"]}>
        {/* Header details  */}
        <div className={styles["find-pharmacy-header-details"]}>
          <div className={styles["find-pharamacy-header-wrapper"]}>
            <h3>Dr. Stone Pharmacy</h3>
            <span>Open Now</span>
          </div>
          <p>123 High Street, Boston, Lincolnshre, PE21 1AA, United Kingdom</p>
        </div>

        {/* metadata  */}
        <div className={styles["find-pharmacy-card-info"]}>
          <div className={styles["find-pharamacy-card-info-item"]}>
            <RotateCwFadingClock
              className={styles["find-pharamacy-card-info-icon"]}
            />
            <span>Today: 9 AM - 9 PM</span>
            <ChevronDown className={styles["find-pharamacy-card-info-icon"]} />
          </div>

          <div className={styles["find-pharamacy-card-info-item"]}>
            <PhoneCall className={styles["find-pharamacy-card-info-icon"]} />
            <span>+44 123 456 7800</span>
          </div>

          <div className={styles["find-pharamacy-card-info-item"]}>
            <MapPin className={styles["find-pharamacy-card-info-icon"]} />
            <span>100m - 500m away</span>
          </div>
        </div>

        {/* button  */}
        <div className={styles["find-pharmacy-card-button-wrapper"]}>
            <button>Select Pharmacy</button>
        </div>
      </div>
    </div>
  );
};

export default FindPharmacyCard;
