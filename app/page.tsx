"use client";

import Button from "@/components/Button/Button";
import ExportCard from "@/components/ExportCard/ExportCard";
import Hero from "@/components/Home/Hero/Hero";
import { exportCardInfo } from "@/lib/data";
import styles from "./Home.module.css";
import Image from "next/image";
import {
  nhs_logo_icon,
} from "@/data/assets";;
import CTA from "@/components/Home/CTA/CTA";
import ArticleSection from "@/components/Home/ArticleSetion/ArticleSection";
import FAQ from "@/components/Contact/FAQ/FAQ";
import PatientReview from "@/components/Home/PatientsReview/PatientReview";
import WhyChosePharmalist from "@/components/WhyChosePharmalist/WhyChosePharmalist";
import ProductSection from "@/components/ProductSection/ProductSection";
import TreatmentSection from "@/components/Home/TreatmentSection/TreatmentSection";
import { Check, ChevronLeft, ChevronRight } from "@/components/Icon/Icon";
import Slider from "react-slick";
import ExportSection from "@/components/Home/ExportSection/ExportSection";

type CustomArrowProps = {
  onClick?: () => void;
};

function NextArrow({onClick}:CustomArrowProps){
  return(
    <button
    type="button"
    className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
    onClick={onClick}
    aria-label="Next">
      <ChevronRight/>
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps){
  return(
    <button
    type="button"
    className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
    onClick={onClick}
    aria-label="Previous">
      <ChevronLeft/>
    </button>
  )
}


const Home = () => {
  const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll: 1,
    arrows:true,
    NextArrow: <NextArrow/>,
    PrevArrow: <PrevArrow/>,
    
    responsive:[
        {
      breakpoint: 1200,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 670,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    ]
  }


  



 

  return (
    <div>
      <Hero />
      
       <div className="container">     
<ExportSection/>
        {/* export section  */}

    

      {/* Order Prescription section  */}
      <section className={styles["prescription-section"]}>
        <div className={styles["prescription-bg-img-wrapper"]}>
          <Image
            src="/icons/VectorIcon9.svg"
            alt="vectorIcon"
            width={422}
            height={422}
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
                
                  <Check className={styles["right-icon"]}/>
                  <span>
                    Get your repeat medication sorted online in just a few
                    clicks
                  </span>
                </li>
                <li>
                  <Check className={styles["right-icon"]}/>
                  <span>
                    Stay updated and track your prescription every step of the
                    way
                  </span>
                </li>
                <li>
                  <Check className={styles["right-icon"]}/>
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
    </div>
   
  );
};
export default Home;
