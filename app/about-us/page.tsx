import WhatWeOffer from "@/app/about-us/components/WhatWeOffer/WhatWeOffer";
import styles from "./AboutUs.module.css";
import Hero from "@/app/about-us/components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import WhyChosePharmalist from "@/components/WhyChosePharmalist/WhyChosePharmalist";
import Patients from "@/components/about/Patients/Patients";
import Specialist, { type SpecialistDoc } from "@/app/about-us/components/Specialist/Specialist";
import { PATIENT_REVIEWS_QUERY, SPECIALISTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Patients as PatientReviewData } from "@/lib/types";

const page = async () => {
  let specialists: SpecialistDoc[] = [];
  try {
    specialists = await client.fetch<SpecialistDoc[]>(SPECIALISTS_QUERY);
  } catch (error) {
    console.error("Failed to fetch specialists from Sanity:", error);
  }
  let patientReviews: PatientReviewData[] = [];
  try {
    patientReviews = await client.fetch<PatientReviewData[]>(PATIENT_REVIEWS_QUERY);
  } catch (error) {
    console.error("Failed to fetch patient reviews from Sanity:", error);
  }

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
          <Patients patients={patientReviews} />
        </div>
      </div>
    </main>
  );
};

export default page;
