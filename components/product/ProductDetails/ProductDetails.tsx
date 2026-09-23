"use client";

import { productData } from "@/lib/data";
import { useState } from "react";
import styles from "./ProductDetails.module.css";
import { ChevronLeft, ChevronRight, CircleCheck, Share2 } from "lucide-react";
import Image from "next/image";
import { stars } from "@/data/assets";
import Button from "@/components/Button/Button";

const ProductDetails = () => {
  const [activeImageWrap, setActiveImageWrap] = useState(0);
  

  const [activeStrength, setActiveStrength] = useState(productData.strengths?.[0] || "");
  const [activePack, setActivePack] = useState(productData.packSizes?.[0]?.id || "");

  const nextImage = () => {
    setActiveImageWrap((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setActiveImageWrap(
      (prev) => (prev - 1 + productData.images.length) % productData.images.length
    );
  };


  const selectedPackDetails = productData.packSizes.find(p => p.id === activePack);

  return (
    <section className={styles["product-content"]}>
      {/* left section  */}
      <div className={styles["gallary-col"]}>
        <div className={styles["gallary-card"]}>
          <div className={styles["gallary-top"]}>
            <h2 className={styles["brand"]}>{productData.name}</h2>
            <button
              type="button"
              className={styles["shareBtn"]}
              aria-label="share product"
            >
              <Share2 size={18} />
            </button>
          </div>

          <div className={styles["main-row"]}>
            <button
              type="button"
              className={styles["arrow-btn"]}
              onClick={prevImage} 
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <div className={styles["main-image-wrap"]}>
              <Image
                src={productData.images[activeImageWrap]}
                alt={`${productData.name} view ${activeImageWrap + 1}`}
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
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className={styles["product-images-thumbs"]}>
          {productData.images.map((img, index) => (
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
            {productData.inStock && (
              <div className={styles["product-in-stock"]}>
                <CircleCheck size={16} strokeWidth={2.5} />
                <span>In Stock</span>
              </div>
            )}
            <h1 className={styles["product-title"]}>{productData.title}</h1>

            <div className={styles["product-review-row"]}>
              <Image src={stars} alt="star" />
              <span>(9403 Reviews)</span>
            </div>

            <p>{productData.tabletCount}</p>
          </div>

          <div className={styles['product-price-block']}>

             <h3>{selectedPackDetails ? selectedPackDetails.price : productData.price}</h3>
             <span>{selectedPackDetails ? selectedPackDetails.pricePerTablet : productData.pricePerTablet}</span>
          </div>
        </div>

        <div className={styles['product-right-second']}>
          {/* Strength Selector */}
          <div className={styles['product-right-field']}>
            <p className={styles['product-right-label']}>Strength</p>
            <div className={styles['product-right-pill-row']}>
              {productData.strengths.map((strength) => (
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
              {productData.packSizes.map((pack) => (
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
          <h3 className={styles['product-right-delivery-title']}>{productData.delivery.title}</h3>
          <p className={styles['product-delivery-desc']}>{productData.delivery.description}</p>

          <table className={styles['product-delivery-table']}>
            <thead>
              <tr>
                <th>TYPE</th>
                <th>HOW LONG</th>
                <th>HOW MUCH</th>
              </tr>
            </thead>
            <tbody>
              {productData.delivery.options.map((option) => (
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
