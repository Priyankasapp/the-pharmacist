import styles from "./Timeline.module.css";
import TimeLineCard from "./TimeLineCard";
import { timelineData } from "@/lib/data";

const Timeline = () => {
  return (
    <section className={styles["timeline-section"]}>
      <h2 className={styles["timeline-heading"]}>
        A pharmacy built on care since{" "}
        <span>1954</span>
      </h2>

      <div className={styles["timeline-container"]}>
        <div className={styles["timeline-spine-line"]}/>

        {timelineData.map((Milestone, idx) => {
          const isEvenRow = idx % 2 === 0;

          return (
            <div
              key={Milestone.year}
              className={`${styles["timeline-row"]} ${isEvenRow ? styles["row-left-align"] : styles["row-right-align"]}`}
            >
              <div className={styles["timeline-card-wrapper"]}>
                <TimeLineCard
                  year={Milestone.year}
                  title={Milestone.title}
                  description={Milestone.description}
                  imgSrc={Milestone.imgSrc}
                />
              </div>

              <div className={styles["timeline-spine-dot"]}/>

              <div className={styles["timeline-row-spacer"]}/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
