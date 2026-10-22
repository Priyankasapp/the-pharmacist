import WhatWeOffer from "@/app/about-us/components/WhatWeOffer/WhatWeOffer";
import styles from "./AboutUs.module.css";
import Hero from "@/app/about-us/components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import WhyChosePharmalist from "@/components/WhyChosePharmalist/WhyChosePharmalist";
import Patients from "@/components/about/Patients/Patients";
import Specialist, { type SpecialistDoc } from "@/app/about-us/components/Specialist/Specialist";
import { SPECIALISTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const page = async () => {
  const specialists = await client.fetch<SpecialistDoc[]>(SPECIALISTS_QUERY);

  return (
    <main className={styles["about-page"]}>
      <div className="container">
        <h1 className={styles["about-title"]}>About Us</h1>

        <div className={styles["about-content"]}>
          <Hero />
          <WhatWeOffer />
          <Timeline />
          <WhyChosePharmalist />
          <Specialist specialists={specialists} />
          <Patients />
        </div>
      </div>
    </main>
  );
};

export default page;