import WhatWeOffer from "@/app/about-us/components/WhatWeOffer/WhatWeOffer";
import styles from "./AboutUs.module.css";
import Hero from '@/app/about-us/components/Hero/Hero';
import Timeline from "./components/Timeline/Timeline";
import WhyChosePharmalist from "@/components/WhyChosePharmalist/WhyChosePharmalist";
import MultipleItems from "@/app/about-us/components/Specialist/Specialist";
import Patients from "@/components/about/Patients/Patients";
import Specialist from "@/app/about-us/components/Specialist/Specialist";

const page = () => {
  return (
    <main className={styles['about-page']}>
      <div className="container">
        <h1 className={styles['about-title']}>About Us</h1>


        <div className={styles['about-content']}>
          <Hero/>
          <WhatWeOffer/>
          <Timeline/>
          <WhyChosePharmalist/>
          {/* <div style={{maxWidth:"700px"}}><MultipleItems/></div> */}
          <Specialist/>
          <Patients/>
            
        </div>
      </div>
    </main>
  )
} 

export default page
