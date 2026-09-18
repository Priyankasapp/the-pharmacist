/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */

"use client";
import { productCardData, stepInfo } from "@/lib/data";
import { useState } from "react";
import styles from "./ConditionSlug.module.css";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FAQ from "@/components/Contact/FAQ/FAQ";
import Symptoms from "@/components/all-conditions/Symptoms/Symptoms";
import StepSectionCard from "@/components/all-conditions/StepSectionCard/StepSectionCard";
import NHSSupportCard from "@/components/NHSSupportCard/NHSSupportCard";
import Image from "next/image";
import { NHS } from "@/data/assets";
import ProductSection from "@/components/ProductSection/ProductSection";
const ConditionSlug = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productPerPage = 3;
  const visibleProducts = productCardData.slice(
    currentIndex,
    currentIndex + productPerPage,
  );
  const handleNext = () => {
    if (currentIndex + productPerPage < productCardData.length) {
      setCurrentIndex((prev) => prev + productPerPage);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - productPerPage);
    }
  };

  return (
    <div className={styles["condition-page"]}>
      <div className={styles["condition-header"]}>
        {" "}
        <h2>Sore Throat </h2>
        <Image src={NHS} alt="NHS" className={styles["header-img"]} />
      </div>

      {/* hero section  */}
      <div className={styles["condition-hero-section"]}>
        <h1>
          A sore throat is irritation or pain in the throat, often caused by
          infection or dryness.
        </h1>
        <NHSSupportCard />
      </div>
      <div className={styles["condition-step-cards"]}>
        {stepInfo.map((step) => (
          <StepSectionCard id={step.id} desc={step.desc} name={step.name} />
        ))}
      </div>

      {/**/}
      {/* <StepSectionCard
      /> */}
      <Symptoms />

      {/* product section  */}
      <div className={styles["condition-product-card"]}>
        <ProductSection headingText="Sore Throat Relif Products" />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default ConditionSlug;
