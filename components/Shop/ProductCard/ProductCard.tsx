import styles from "./ProductCard.module.css";
import Image from "next/image";
import { stars } from "@/data/assets";
import Button from "@/components/Button/Button";
import { ProductCardData } from "@/lib/types";

const ProductCard = ({
  id,
  title,
  subtitle,
  image,
  isPrescriptionOnly,
  savingsText,
  reviewCount,
  price,
  originalPrice,
  weightText,
  unitPriceText,
}: ProductCardData) => {
  return (
    <div className={styles["product-card"]} id={id}>
      <div className={styles["product-card-container"]}>
        {/* image  */}
        <div className={styles["product-card-img-container"]}>
          <Image
            src={image}
            alt={title}
            className={styles["product-card-image"]}
          />

          {(isPrescriptionOnly || savingsText)&&
            ( (
              <div className={styles["product-card-badge-container"]}>
                {isPrescriptionOnly && (
                  <span className={styles["product-card-pres-badge"]}>
                    Perscription Only
                  </span>
                )}
                {savingsText && (
                  <span className={styles["product-card-badge"]}>
                    Save £{savingsText}
                  </span>
                )}
              </div>
            ))}
        </div>
        {/* description  */}
        <div className={styles["product-card-desc"]}>
          <div className={styles["product-card-desc-wrapper"]}>
            <h3>{title}</h3>
            <p> {subtitle}</p>
            <div className={styles["product-card-star-wrapper"]}>
              <Image src={stars} alt="stars" />
              <span>({reviewCount})</span>
            </div>
          </div>

          <div className={styles["product-card-price-section"]}>
            <p>
              £{price}/pack {(originalPrice)&&( <span>was £{originalPrice}</span>)}
            </p>
            <span>
              {weightText} | {unitPriceText}
            </span>
          </div>

          <div className={styles["product-card-button-container"]}>
            <Button showArrow>Add to Bag</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

