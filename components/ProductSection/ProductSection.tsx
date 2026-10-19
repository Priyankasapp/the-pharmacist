/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {  useRef } from "react";
import styles from "./ProductSection.module.css";
import { productCardData } from "@/lib/data";
import ProductCard from "../Shop/ProductCard/ProductCard";
import Button from "../Button/Button";
import { ChevronLeft, ChevronRight } from "../Icon/Icon";
import Slider from "react-slick";

export interface ProductSectionItem{
  _id: string;
  title:string;
  subtitle?:string;
  slug:string;
  price:number;
  originalPrice?:number;
  savingsText?:string;
  reviewCount?:number;
  isPrescriptionOnly?: boolean;
  image:string;
  categories?: {_id:string; name:string, slug:string}[];
}
interface ProductSectionProps {
  headingText: string;
  highlightText?: string;
  products: ProductSectionItem[];
}

const ProductSection = ({ 
  headingText, 
  highlightText,
  products,
}: ProductSectionProps) => {
  const sliderRef = useRef<any>(null);

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: true,
    infinite: products.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, products.length),
    slidesToScroll: 2,
    dotsClass: `slick-dots ${styles["custom-dots-wrapper"]}`,
    customPaging: () => (
      <div className="custom-dot"></div>
    ),

    responsive: [
       {
        breakpoint: 1415,
        settings: {
          slidesToShow: Math.min(2, products.length),
          slidesToScroll: 2,
        },
      },
      
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if(!products?.length) return null;



  return (
    <section className={styles["product-section"]}>
      <div className={styles["product-header"]}>
        <h2>
          {highlightText ? <span>{highlightText}</span> : " "} {headingText}
        </h2>

        <div className={styles["product-header-actions"]}>
          <button
            type="button"
            className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
            onClick={goPrev}
            aria-label="Previous products"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className={`${styles["slider-arrow"]} ${styles["next-arrow"]}`}
            onClick={goNext}
            aria-label="Next products"
          >
            <ChevronRight />
          </button>
        </div>
      </ div>

      <div className={styles["product-card-container"]}>
       <Slider ref={sliderRef} {...settings}>
           {productCardData.map((product) => {
          return (
            <div key={product.id} className={styles["product-card-item"]}>
             <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                reviewCount={product.reviewCount}
                // weightText={product.weightText}
                // unitPriceText={product.unitPriceText}
                originalPrice={product.originalPrice}
                isPrescriptionOnly={product.isPrescriptionOnly}
                savingsText={product.savingsText}
                price={product.price}
                // Conditional controls:
                // showAppointmentButton={false} slug={""}
                showTreatmentsButton={false}
                appointmentButtonText="Add to Bag" slug={""}                />

            </div>
          );
        })}


       </Slider>
      </div>


      <div className={styles["product-button-wrapper"]}>
        <Button showArrow className={styles["product-button"]}>Shop Pharmacy Essentials</Button>
      </div>
    </section>
  );
};

export default ProductSection;