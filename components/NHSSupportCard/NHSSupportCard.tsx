
import styles from "./NHSSupportCard.module.css";
import Button from "../Button/Button";
const NHSSupportCard = () => {
  return (
    <div className={styles["nhs-support"]}>
      <h2>Check if your condition is covered by <span>NHS support</span></h2>
      <div className={styles["nhs-form-section"]}>
        <div className={styles["nhs-gender-con"]}>
          <label className={styles['nhs-label']}>Gender at Birth</label>

          <div className={styles["nhs-gender-section"]}>
            <div className={styles["nhs-gender-wrapper"]}>
              <input type="radio" name="Male" id="Male" />
              <label htmlFor="male">Male</label>
            </div>

            <div className={styles["nhs-gender-wrapper"]}>
            
              <input type="radio" name="Female" id="Female" />
              <label htmlFor="femail">Femail</label>
            </div>
          </div>
        </div>
       
       <div className={styles["nhs-birthdate-wrapper"]}>
        <label htmlFor="dob" className={styles["nhs-label"]}>Date of birth</label>
        <div className={styles['nhs-input-wrapper']}>
            <input type="date" id="dob" placeholder="MM/DD/YYYY"/>
        </div>
       </div>
       <Button showArrow>Check Eligibility</Button>
      </div>
    </div>
  );
};

export default NHSSupportCard;
