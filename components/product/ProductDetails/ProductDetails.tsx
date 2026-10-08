"use client";

import { useState } from "react";
import styles from "./ProductDetails.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { ChevronLeft, ChevronRight, StarIcon,} from "@/components/Icon/Icon";
import { ShareIcon, CircleCheck} from "lucide-react";
import type { ProductData } from "@/lib/types";

const ProductDetails = ({ product }: { product: ProductData }) => {
  const [activeImageWrap, setActiveImageWrap] = useState(0);
  

  const [activeStrength, setActiveStrength] = useState(product.strengths?.[0] || "");
  const [activePack, setActivePack] = useState(product.packSizes?.[0]?.id || "");

  const nextImage = () => {
    setActiveImageWrap((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImageWrap(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };


  const selectedPackDetails = product.packSizes.find(p => p.id === activePack);

  return (
    <section className={styles["product-content"]}>
      {/* left section  */}
      <div className={styles["gallery-col"]}>
        <div className={styles["gallery-card"]}>
          <div className={styles["gallery-top"]}>
            <h2 className={styles["brand"]}>{product.name}</h2>
            <button
              type="button"
              className={styles["shareBtn"]}
              aria-label="share product"
            >
              <ShareIcon />
            </button>
          </div>

          <div className={styles["main-row"]}>
            <button
              type="button"
              className={styles["arrow-btn"]}
              onClick={prevImage} 
              aria-label="Previous image"
            >
              <ChevronLeft/>
            </button>

            <div className={styles["main-image-wrap"]}>
              <Image
                src={product.images[activeImageWrap]}
                alt={`${product.name} view ${activeImageWrap + 1}`}
                fill
                sizes="(max-width:768px) 100vw, 600px"
                priority
                className={styles["main-img"]}
              />
            </div>

            <button
              type="button"
              className={styles["arrow-btn"]}
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className={styles["product-images-thumbs"]}>
          {product.images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImageWrap(index)}
              className={`${styles["thumb"]} ${activeImageWrap === index ? styles["active-thumb"] : ""}`}
              aria-label={`View image ${index + 1}`}
            >
              <div className={styles["thumb-img-wrap"]}>
                <Image
                  src={img}
                  alt={`Thumbnail view ${index + 1}`}
                  fill
                  sizes="137px"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* right section  */}
      <div className={styles["product-buy-col"]}>
        <div className={styles["product-right-first"]}>
          <div className={styles["product-right-first-wrapper"]}>
            {product.inStock && (
              <div className={styles["product-in-stock"]}>
                <CircleCheck  />
                <span>In Stock</span>
              </div>
            )}
            <h1 className={styles["product-title"]}>{product.title}</h1>

            <div className={styles["product-review-row"]}>
              {/* <Image src="./images/star.svg" alt="star" /> */}
             <StarIcon/>
              
              <span>(9403 Reviews)</span>
            </div>

            <p>{product.tabletCount}</p>
          </div>

          <div className={styles['product-price-block']}>

             <h3>{selectedPackDetails ? selectedPackDetails.price : product.price}</h3>
             <span>{selectedPackDetails ? selectedPackDetails.pricePerTablet : product.pricePerTablet}</span>
          </div>
        </div>

        <div className={styles['product-right-second']}>
          {/* Strength Selector */}
          <div className={styles['product-right-field']}>
            <p className={styles['product-right-label']}>Strength</p>
            <div className={styles['product-right-pill-row']}>
              {product.strengths.map((strength) => (
                <button
                  key={strength}
                  type="button"
                  onClick={() => setActiveStrength(strength)}
                  className={`${styles["product-right-pill"]} ${activeStrength === strength ? styles["active-pill"] : ""}`}
                >
                  {strength}
                </button>
              ))}
            </div>
          </div>

          {/* Pack Size Selector */}
          <div className={styles['product-right-field']}>
            <p className={styles['product-right-label']}>Pack Size</p>
            <div className={styles['product-right-pill-row']}>
              {product.packSizes.map((pack) => (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() => setActivePack(pack.id)}
                  className={`${styles['product-pack-card']} ${activePack === pack.id ? styles['active-pack-card'] : ""}`}
                >
                  <span className={styles['product-right-pack-title']}>
                    {pack.label} {pack.price}   
                  </span>
                  <div className={styles['product-right-pack-con']}> 
                    <span className={styles['product-right-pack-unit']}>{pack.saving}</span>
                    <span className={styles['product-right-pack-unit']}>({pack.pricePerTablet})</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles['btn-container']}>
          <Button showArrow className={styles['product-right-button']}>Add to Bag</Button>
        </div>

        {/* Delivery Details table */}
        <div className={styles['product-right-delivery']}>
          <h3 className={styles['product-right-delivery-title']}>{product.delivery.title}</h3>
          <p className={styles['product-delivery-desc']}>{product.delivery.description}</p>

          <table className={styles['product-delivery-table']}>
            <thead>
              <tr>
                <th>TYPE</th>
                <th>HOW LONG</th>
                <th>HOW MUCH</th>
              </tr>
            </thead>
            <tbody>
              {product.delivery.options.map((option) => (
                <tr key={option.type}>
                  <td>{option.type}</td>
                  <td>{option.duration}</td>
                  <td>{option.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
