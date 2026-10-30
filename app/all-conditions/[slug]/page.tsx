"use client";
import styles from "./ConditionSlug.module.css";
import FAQ from "@/components/Contact/FAQ/FAQ";
import Symptoms from "@/components/all-conditions/Symptoms/Symptoms";
import StepSectionCard from "@/components/all-conditions/StepSectionCard/StepSectionCard";
import NHSSupportCard from "@/components/NHSSupportCard/NHSSupportCard";
import Image from "next/image";
import { NHS } from "@/data/assets";
import ProductSection from "@/components/ProductSection/ProductSection";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { conditionBySlugQuery } from "@/sanity/lib/queries";
import { ConditionData } from "@/lib/types";

const ConditionSlug = () => {
  const params = useParams();
  const slug = params?.slug as string;

    const [condition, setCondition] = useState<ConditionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    if(!slug) return;

    const fetchCondition = async () =>{
      try{
        setLoading(true);
        setError(null);

        const data = await client.fetch(conditionBySlugQuery, { slug });
        console.log("SEO Data from Sanity:", data?.seo); 

        if(!data){
          setError("condition not found.");
          return;
        }

        setCondition(data);

      }catch(err){
        console.error("Error fetching condition:", err);
        setError("Failed to load condition data.");
      }finally{
        setLoading(false);
      }
    };

    fetchCondition();
  }, [slug]);

  if(loading){
    return <div className="container">Loading condition...</div>
  }

  if(error || !condition){
    return(
      <div className="container">
        <p>{error || "Condition not found."}</p>
      </div>
    );
  }

  return (
    <div className={styles["condition-page"]}>
      <div className="container">

        <div className={styles["condition-header"]}>
          <h1 className={styles["condition-heading"]}>{condition.name} </h1>

          {condition.isNHS && (
             <div className={styles["header-img-wrapper"]}>
            <Image src={NHS} alt="NHS" fill priority />
          </div>
          )}
         
        </div>

        {/* hero section  */}
        <div className={styles["condition-hero-section"]}>
          <h2 className={styles["condition-hero-header"]}>
            {condition.heroDescription || condition.desc}
          </h2>

          {condition.isNHS && (
            <div className={styles["nhs-card-wrapper"]}>
            <NHSSupportCard />
          </div>
          )}
          
        </div>
        {condition.steps && condition.steps.length > 0 && (
          <div className={styles["condition-step-cards"]}>
            {condition.steps.map((step, index)=>(
              <div className={styles["condition-step-card-item"]} key={index}>
              <StepSectionCard
                id={step.stepNumber}
                desc={step.description}
                name={step.title}
              />
            </div>
            ))}
          </div>
        )}
      

        <Symptoms />

        {/* product section  */}
        <div className={styles["condition-product-card"]}>
          <ProductSection headingText={`${condition.name} Relief Products`} />
        </div>

        <div className={styles["faq-section-wrapper"]}>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default ConditionSlug;
