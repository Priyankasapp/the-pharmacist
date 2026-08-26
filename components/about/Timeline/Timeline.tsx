import { Timeline1954, Timeline1975, Timeline2026, Timeline9191 } from "@/data/assets";
import styles from "./Timeline.module.css"
import { Milestone } from "lucide-react";
import TimeLineCard from "./TimeLineCard";

const timelineDataSet = [
  {
    year: "1954",
    title: "Where It All Started",
    description: "Barry Lestner qualified as a pharmacist and began serving the Leeds community seven days a week, laying the foundation of patient-first care that still defines us today.",
    imgSrc: Timeline1954
  },
  {
    year:"1975",
    title:"Taking Ownership",
    description:"Barry took ownership of his pharmacy and went on to acquire two more local pharmacies, growing a trusted presence at the heart of the community.",
    imgSrc:Timeline1975
  },
  {
    year:"1991",
    title:"Building Medical Centres",
    description:"David Lestner took ownership and pioneered a new approach, co-locating pharmacies within GP medical centres to bring healthcare closer to patients.",
    imgSrc:Timeline9191
  },
  {
    year:"2026",
    title:"Continuing to Care",
    description:"Today we combine our trusted pharmacy heritage with modern digital services, making NHS and private care more accessible than ever.",
    imgSrc:Timeline2026
  }
];

const Timeline = () => {
  return (
    <section className={styles['timeline-section']}>
      <h2 className={styles['timeline-heading']}>A pharmacy built on care since <span style={{color:"var(--tp-green)"}}>1954</span></h2>

      <div className={styles['timeline-container']}>
        <div className={styles['timeline-spine-line']}></div>

        {timelineDataSet.map((Milestone, idx)=>{
          const isEvenRow = idx % 2 === 0;

          return(
            <div key={Milestone.year}
            className={`${styles['timeline-row']} ${isEvenRow ? styles['row-left-align']: styles['row-right-align']}`}
            >
              <div className={styles['timeline-card-wrapper']}>
                <TimeLineCard
                  year={Milestone.year}
                  title={Milestone.title}
                  description={Milestone.description}
                  imgSrc={Milestone.imgSrc}
                />
              </div>

              <div className={styles['timeline-spine-dot']}></div>

              <div className={styles['timleline-row-spacer']}></div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Timeline;