import WhatWeOffer from "@/app/about-us/components/WhatWeOffer/WhatWeOffer";
import styles from "./AboutUs.module.css";
import Hero from '@/app/about-us/components/Hero/Hero';
import Timeline from "./components/Timeline/Timeline";

const page = () => {
  return (
    <main className={styles['about-page']}>
      <div className="container">
        <h1 className={styles['about-title']}>About Us</h1>


        <div className={styles['about-content']}>
          <Hero/>
          <WhatWeOffer/>
          <Timeline/>
              {/* <WhatWeOffer />
          <Timeline />
          <WhyChosePharmalist />
          <Specialist />
          <Patients /> */}
        </div>
      </div>
    </main>
  )
}

export default page
