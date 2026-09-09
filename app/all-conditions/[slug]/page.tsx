/* eslint-disable react/jsx-no-undef */

'use client';
import { productCardData } from "@/lib/data";
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
const ConditionSlug = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productPerPage = 3 ;
  const visibleProducts = productCardData.slice(
    currentIndex,
    currentIndex  + productPerPage 
  );
  const handleNext = () =>{
    if(currentIndex + productPerPage < productCardData.length){
      setCurrentIndex((prev)=>prev + productPerPage)
    }
  };
  const handlePrevious = () => {
    if(currentIndex > 0){
      setCurrentIndex((prev) => prev - productPerPage);
    }
  };

  return (
    <div className={styles["condition-page"]}>
    <div className={styles["condition-header"]}> <h2>Sore Throat </h2>
      <Image
      src={NHS}
      alt="NHS"
      className={styles['header-img']}/></div>

    {/* hero section  */}
    <div className={styles["condition-hero-section"]}>
      <h1>A sore throat is irritation or pain in the throat, often caused by infection or dryness.</h1>
       <NHSSupportCard/>

    </div>
    <div>
      
    </div>

      {/**/}
      {/* <StepSectionCard
      /> */}
      <Symptoms/>

      <div className={styles['condition-product-card']}>
        
        <div className={styles['condition-product-header']}>
          <h2>Sore Throat Relif Products</h2>
          <div className={styles["condition-slider-button"]}>
            <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous products">
              <ChevronLeft/>
            </button>
            <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex + productPerPage >= productCardData.length}
            aria-label="Next products">
              <ChevronRight/>
            </button>
          </div>
        </div>  

          <div className={styles['condition-product-card-container']}>  
            {visibleProducts.map((product)=>{
              return(
                <div key={product.id} className={styles['condition-product-card-item']}>
                 <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    subtitle={product.subtitle}
                    reviewCount={product.reviewCount}
                    weightText={product.weightText}
                    unitPriceText={product.unitPriceText}
                    originalPrice={product.originalPrice}
                    isPrescriptionOnly={product.isPrescriptionOnly}
                    savingsText={product.savingsText}
                    price={product.price} 
                    id={product.id}
                  />
                </div>
              )
            })}
          </div>
      </div>

      <div>
        <FAQ/>
      </div>

    </div>
  )
}

export default ConditionSlug;