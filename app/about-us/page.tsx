import styles from "./AboutUs.module.css";
import Hero from '@/app/about-us/components/Hero/Hero';

const page = () => {
  return (
    <main className={styles['about-page']}>
      <div className="container">
        <h1 className={styles['about-title']}>About Us</h1>


        <div className={styles['about-content']}>
          <Hero/>
          
        </div>
      </div>
    </main>
  )
}

export default page
