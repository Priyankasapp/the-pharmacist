import React from 'react';
import styles from './Hero.module.css';
import {Hero_img} from "@/data/assets";
import { Button } from '../Button/Button';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero-container']}>
        <h1 className={styles['hero-header']}>Manage Your Health with Ease.</h1>
        <p className={styles['hero-text']}>From common ailments to daily medications, our pharmacists provide professional guidance and prescriptions delivered safely to you.</p>
        <Button variant='primary' showArrow>Book Appointment Now</Button>
      </div>
    </div>
  ) 
}

export default Hero
