/* eslint-disable react-hooks/set-state-in-effect */
import { ChevronLeft, ChevronRight, Indent } from "lucide-react";
import styles from "./ProductSection.module.css";
import { useEffect, useState } from "react";
import { productCardData } from "@/lib/data";
import ProductCard from "../Shop/ProductCard/ProductCard";
import Button from "../Button/Button";

interface productProps {
  headingText: string;
  highlightText?: string;
}

const getProductPerPage = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
};

const ProductSection = ({ headingText, highlightText }: productProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Initialize with 3 to match the server render and prevent hydration mismatch
  const [productPerPage, setPrductPerPage] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setPrductPerPage(getProductPerPage());

    const handleResize = () => setPrductPerPage(getProductPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const totalPages = Math.ceil(productCardData.length / productPerPage);
  const currentPage = Math.floor(currentIndex / productPerPage);

  return (
    <section className={styles["product-section"]}>
      <div className={styles["product-header"]}>
        <h2>
          {highlightText ? <span>{highlightText}</span> : " "} {headingText}
        </h2>
        <div className={styles["product-slider-button"]}>
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous products"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex + productPerPage >= productCardData.length}
            aria-label="Next products"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={styles["product-card-container"]}>
        {visibleProducts.map((product) => {
          return (
            <div key={product.id} className={styles["product-card-item"]}>
              <ProductCard
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
                slug={""}
              />
            </div>
          );
        })}
      </div>

      <div className={styles["product-pagination"]}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`${styles["pagination-dot"]} ${
              index === currentPage ? styles["pagination-dot-active"] : ""
            }`}
            onClick={() => setCurrentIndex(index * productPerPage)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles["product-button-wrapper"]}>
        <Button showArrow>Shop Pharmacy Essentials</Button>
      </div>
    </section>
  );
};

export default ProductSection;