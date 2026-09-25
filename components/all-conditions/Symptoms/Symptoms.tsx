import { CovidIcon, groupIcon, VectorFive, VectoruSix } from "@/data/assets";
import styles from "./Symptoms.module.css";
import Image from "next/image";

const Symptoms = () => {
  return (
    <section className={styles["symptoms"]}>
      <div className={styles["symptoms-container"]}>
        {/* background images  */}
        <div className={styles["symptoms-background-img-wrapper"]} aria-hidden>
          <div className={styles["vector-one-wrapper"]}>
            <Image
              src={VectorFive}
              alt="Vector Icon"
              className={styles["vector-image"]}
            />
          </div>
          <div className={styles["vector-two-wrapper"]}>
            <Image
              src={VectoruSix}
              alt="Vector Icon"
              className={styles["vector-image"]}
            />
          </div>
        </div>

        <div className={styles["symptoms-info-wrapper"]}>
          <div className={styles["symptoms-left-section"]}>
            <div className={styles["symptoms-top"]}>
              <div className={styles["symtoms-heading-con"]}>
                <Image src={CovidIcon} alt="hdsj" />
                <h2>Symptoms</h2>
              </div>

              <ul className={styles['symtoms-ulist']}>
                <li>Pain or scratchy sensation in the throat.</li>
                <li>Difficulty swallowing.</li>
                <li>Red or swollen tonsils.</li>
                <li>Swollen glands in the neck or jaw.</li>
                <li>Hoarseness or loss of voice.</li>
                <li>White patches or pus on tonsils (bacterial cause).</li>
              </ul>
            </div>
            <div className={styles["symptoms-bottom"]}>
              <div className={styles["symtoms-heading-con"]}>
                <Image src={groupIcon} alt="hdsj" />
                <h2>How to treat a sore throat</h2>
              </div>
              <ul className={styles["symtoms-ulist"]}>
                <li>
                  Gargle with warm, salty water (children should not try this)
                </li>
                <li>Drink plenty of water</li>

                <li>Eat cool or soft foods</li>
                <li>Avoid smoking or smoky places</li>
                <li>
                  Suck ice cubes, ice lollies or hard sweets – but do not give
                  young children anything small and hard to suck because of the
                  risk of choking
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["symptoms-right-section"]}>
            <p>High fever, difficulty breathing, or severe pain requires <span>urgent medical</span> attention.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
