import { ProcessData } from "@/lib/types"
import styles from "./ProcessSection.module.css"

const ProcessSection = ({id, heading, desc}:ProcessData) => {
  return (
    <div className={styles["process-section"]}>
      <div className={styles["process-section-container"]}>
        <span>{id}</span>
        <h2>{heading}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ProcessSection
