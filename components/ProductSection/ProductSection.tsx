
import styles from "./ProductSection.module.css";
import { productCardData } from "@/lib/data";
import ProductCard from "../Shop/ProductCard/ProductCard";
import Button from "../Button/Button";
import { ChevronLeft, ChevronRight } from "../Icon/Icon";
import Slider from "react-slick";

type CustomArrowProps = {
  onClick?: () => void;
  
};

function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["next-arrow"]}`}
      onClick={onClick}
      aria-label="Next specialist"
    >
     <ChevronRight/>
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
      onClick={onClick}
      aria-label="Previous specialist"
    >
     
        <ChevronLeft/> 
    </button>
  );
}

interface productProps {
  headingText: string;
  highlightText?: string;
}


const ProductSection = ({ headingText, highlightText }: productProps) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

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
        
      </div>

      <div className={styles["product-card-container"]}>
       <Slider {...settings}>
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