import React from 'react'
import styles from "./StepSectionCard.module.css";
import { StepInfo } from '@/lib/types';
const StepSectionCard = ({id, name, desc}:StepInfo) => {
  return (
    <div className={styles['step-section']}>
      <div className={styles['step-section-con']}>
        <span>{id}</span>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default StepSectionCard
