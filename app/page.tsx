"use client";

import Button from "@/components/Button/Button";
import ExportCard from "@/components/ExportCard/ExportCard";
import Hero from "@/components/Home/Hero/Hero";
import { exportCardInfo } from "@/lib/data";
import styles from "./Home.module.css";
import {  useEffect, useState } from "react";
import {  ChevronLeft, ChevronRight,  } from "lucide-react";
import Image from "next/image";
import {
  nhs_logo_icon,
  right_icon,
  VectorSeven,
} from "@/data/assets";;
import CTA from "@/components/Home/CTA/CTA";
import ArticleSection from "@/components/Home/ArticleSetion/ArticleSection";
import FAQ from "@/components/Contact/FAQ/FAQ";
import PatientReview from "@/components/Home/PatientsReview/PatientReview";
import WhyChosePharmalist from "@/components/WhyChosePharmalist/WhyChosePharmalist";
import ProductSection from "@/components/ProductSection/ProductSection";
import TreatmentSection from "@/components/Home/TreatmentSection/TreatmentSection";

const getExpertsPerPage = () => {
  if(typeof window === "undefined") return 4;
  if(window.innerWidth  <= 665) return 1;
  if(window.innerWidth <= 960) return 2;
  if(window.innerWidth <= 1280) return 3;
  return 4

}
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exportPerPage, setExportPage] = useState(4);

  
  useEffect(()=>{
  
    const handleResize = () => setExportPage(getExpertsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);  
  }, []);

  const visibleExports = exportCardInfo.slice(
    currentIndex,
    currentIndex + exportPerPage,
  );

  const handleNext = () => {
    if (currentIndex + exportPerPage < exportCardInfo.length) {
      setCurrentIndex((prev) => prev + exportPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - exportPerPage);
    }
  };

  return (
    <div className="container">
     
      <Hero />
     
      <section className={styles["export-section"]}>
         
        <div className={styles["export-header"]}>
          <h2 className={styles["section-title"]}>
            Your Health Supported by Our <span>Export Pharmacy</span> Team
          </h2>

          <div className={styles["export-header-bottom"]}>
            <p>
              {" "}
              Whether it&apos;s a repeat prescription or an online consultation,
              we have the right service for you.
            </p>

            <div className={styles["export-slider-button"]}>
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previouse exports"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next export"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

       
        <div className={styles['export-info']}>
          <div className={styles["export-cards-wrapper"]}>
            {visibleExports.map((info) => (
            <div key={info.id} className={styles["export-card-wrapper"]}>
              <ExportCard
                img={info.img}
                id={info.id}
                title={info.title}
                desc={info.desc}
                isnhs={info.isnhs}
              />
            </div>
          ))}</div> 
          
          <div className={styles['export-card-button-wrapper']}>
            <Button showArrow className={styles['export-card-button']}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Order Prescription section  */}
      <section className={styles["prescription-section"]}>
        <div className={styles["prescription-bg-img-wrapper"]}>
          <Image
            src={VectorSeven}
            alt="vectorIcon"
            className={styles["prescription-bg-img"]}
          />
        </div>
        <div className={styles["prescription-info-con"]}>
          {/* left section  */}
          <div className={styles["prescription-left-section"]}>
            <div className={styles["prescription-order-info-con"]}>
              <h2>Order Your <span>Repeat Prescriptions </span>Online, Anytime</h2>
              <p> 
                Managing your repeat medication has never been easier. Our
                secure online service lets you request, track and manage your
                prescriptions from any device, without the need to visit your GP
                or pharmacy.
              </p>

              <ul className={styles["prescription-unorder-list"]}>
                <li>
                  <Image
                    src={right_icon}
                    alt="point"
                    className={styles["right-icon"]}
                  />
                  <span>
                    Get your repeat medication sorted online in just a few
                    clicks
                  </span>
                </li>
                <li>
                  <Image
                    src={right_icon}
                    alt="point"
                    className={styles["right-icon"]}
                  />
                  <span>
                    Stay updated and track your prescription every step of the
                    way
                  </span>
                </li>
                <li>
                  <Image
                    src={right_icon}
                    alt="point"
                    className={styles["right-icon"]}
                  />{" "}
                  <span>
                    Your personal health information is always safe and secure
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles["prescription-wrapper"]}>
              <Button showArrow className={styles['prescription-button']}>Order Prescriptions</Button>
            </div>
          </div>
          {/* right section  */}
          <div className={styles["prescription-logo-img-wrapper"]}
          >
            <Image
              src={nhs_logo_icon}
              alt="nhs logo"
              className={styles["prescription-logo-img"]}
            />
          </div>
        </div>
      </section>

          <TreatmentSection/>

     
      {/* populer treatments  */}
      <ProductSection
      headingText="Treatments"
      highlightText="Popular"/>
      <WhyChosePharmalist/>
      <PatientReview/>
      <FAQ/>
      <ArticleSection/> 
      <CTA/>
    </div>
  );
};
export default Home;
