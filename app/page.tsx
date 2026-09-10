/* eslint-disable react/jsx-key */
"use client";

import Button from "@/components/Button/Button";
import ExportCard from "@/components/ExportCard/ExportCard";
import Hero from "@/components/Home/Hero/Hero";
import { exportCardInfo, treatmentData } from "@/lib/data";
import styles from "./Home.module.css";
import { useState } from "react";
import {  ChevronLeft, ChevronRight,  } from "lucide-react";
import Image from "next/image";
import {
  nhs_logo_icon,
  right_icon,
  VectorSeven,
} from "@/data/assets";
import TreatmentCard from "@/components/Home/TreatmentCard/TreatmentCard";
import CTA from "@/components/Home/CTA/CTA";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const exportPerPage = 4;
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
    <div>
      <Hero />
      {/* Exports detail section  */}
      <section className={styles["export-section"]}>
        <div className={styles["export-Header"]}>
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
                disabled={currentIndex === 0}
                aria-label="Previouse exports"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex + exportPerPage >= exportCardInfo.length}
                aria-label="Next export"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className={styles["export-cards"]}>
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
          ))}
        </div>

        <div className={styles["services-button"]}>
          <Button showArrow>View All Services</Button>
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
              <h2>Order Your Prepeat Prescriptions Online, Anytime</h2>
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
              <Button showArrow>Order Prescriptions</Button>
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



      {/* treatment section  */}
      <section className={styles['treatment-con']}>
      <div></div>
      <div style={{display:"flex",padding:"4%", justifyContent:"space-between"}}>
        {treatmentData.map((con)=>(
         <TreatmentCard
         id={con.id}
         img={con.img}
         title={con.title}
         condition={con.condition}/>
        ))}
      </div>
      </section>
      <CTA/>
    </div>
  );
};
export default Home;
