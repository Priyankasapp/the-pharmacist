import Button from '@/components/Button/Button';
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero-container']}>
      <div className={styles['hero-text-wrapper']}>
           <h1 className={styles['hero-header']}>Manage Your <span>Health</span>  with Ease.</h1>
        <p className={styles['hero-text']}>From common ailments to daily medications, our pharmacists provide professional guidance and prescriptions delivered safely to you.</p>
      </div>
        <div className={styles['hero-button-wrapper']}>
                  <Button showArrow className={styles['hero-button']}>Book Appointment Now</Button></div> 
      </div>
    </div>
  ) 
}

export default Hero;
