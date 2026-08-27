import SpecialistCard from './SpecialistCard'
import styles from "./Specialist.module.css";

const Specialist = () => {
  return (
    <div className={styles['specialist-container']}>
      <h2 className={styles['specialist-heading']}>
        Specialist Care You Can <span>Trust</span>
      </h2>

      <div className={styles['specialist-cards']}>
        <SpecialistCard/>
        <SpecialistCard/>
        <SpecialistCard/>
        <SpecialistCard/>
      </div>
    </div>
  )
}

export default Specialist