/* eslint-disable react/jsx-key */
"use client";
import { stepInfo } from "@/lib/data";
import styles from "./ConditionSlug.module.css";
import FAQ from "@/components/Contact/FAQ/FAQ";
import Symptoms from "@/components/all-conditions/Symptoms/Symptoms";
import StepSectionCard from "@/components/all-conditions/StepSectionCard/StepSectionCard";
import NHSSupportCard from "@/components/NHSSupportCard/NHSSupportCard";
import Image from "next/image";
import { NHS } from "@/data/assets";
import ProductSection from "@/components/ProductSection/ProductSection";

const ConditionSlug = () => {
  return (
    <div className={styles["condition-page"]}>
      <div className="container">
        <div className={styles["condition-header"]}>
        <h2>Sore Throat </h2>
        <div className={styles["header-img-wrapper"]}>
          <Image src={NHS} alt="NHS" fill priority />
        </div>
      </div>

      {/* hero section  */}
      <div className={styles["condition-hero-section"]}>
        <h1>
          A sore throat is irritation or pain in the throat, often caused by
          infection or dryness.
        </h1>
        <div className={styles["nhs-card-wrapper"]}>
          <NHSSupportCard />
        </div>
      </div>
      <div className={styles["condition-step-cards"]}>
        {stepInfo.map((step) => (
          <div className={styles["condition-step-card-item"]}
          key={step.id}>
            <StepSectionCard 
            key={step.id}
            id={step.id} 
            desc={step.desc} name={step.name} />
          </div>
        ))}
      </div>

      <Symptoms />

      {/* product section  */}
      <div className={styles["condition-product-card"]}>
        <ProductSection headingText="Sore Throat Relif Products" />
      </div>
      <div className={styles["faq-section-wrapper"]}>
        <FAQ />
      </div>

      </div>
          </div>
  );
};

export default ConditionSlug;
