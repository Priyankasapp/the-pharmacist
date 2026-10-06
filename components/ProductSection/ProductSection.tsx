/* eslint-disable @typescript-eslint/no-explicit-any */

import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useRef } from "react";
import styles from "./ProductSection.module.css";
import { productCardData } from "@/lib/data";
import ProductCard from "../Shop/ProductCard/ProductCard";
import Button from "../Button/Button";
import { ChevronLeft, ChevronRight } from "../Icon/Icon";
import Slider from "react-slick";

interface productProps {
  headingText: string;
  highlightText?: string;
}


const ProductSection = ({ headingText, highlightText }: productProps) => {
  const sliderRef = useRef<any>(null);

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    appendDots: (dots: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
    <div className={styles["product-dots"]}>
      <ul>{dots}</ul>
    </div>
  ),

  customPaging:()=>(
    <button className={styles["product-dot"]}/>
  ),

    responsive: [
       {
        breakpoint: 1415,
        settings: {
          slidesToShow: 2,
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