"use client";

import { useState, useMemo } from "react";
import styles from "./ProductDetails.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { ChevronLeft, ChevronRight, StarIcon } from "@/components/Icon/Icon";
import { ShareIcon, CircleCheck } from "lucide-react";
// Ensure your types are updated to match the GROQ query!
import type { ProductData } from "@/lib/types"; 

const ProductDetails = ({ product }: { product: ProductData }) => {
  const [activeImageWrap, setActiveImageWrap] = useState(0);
  const [activeInfoTab, setActiveInfoTab] = useState(0);

  const productInformation = product.productInformation ?? [];
  const activeInformation = productInformation[activeInfoTab];

  // Handle Gallery
  const gallery = product.gallery ?? [];
  
  // Handle Selectors
  const strengths = product.strengths ?? [];
  const packSizes = product.packSizes ?? [];
  
  // Initialize with first item
  const [activeStrength, setActiveStrength] = useState(strengths[0]?.label || "");
  const [activePack, setActivePack] = useState(packSizes[0]?._key || "");

  const nextImage = () => {
    if (gallery.length > 1) {
      setActiveImageWrap((prev) => (prev + 1) % gallery.length);
    }
  };
  const prevImage = () => {
    if (gallery.length > 1) {
      setActiveImageWrap((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  const selectedPackDetails = packSizes.find((pack) => pack._key === activePack);

  // 🧠 HELPER CALCULATIONS (This fixes the missing data from Sanity)
  
  // 1. Calculate Price Per Tablet
  const currentPrice = selectedPackDetails ? selectedPackDetails.price : product.price;
  const currentQuantity = selectedPackDetails?.quantity || 24; // fallback to 24 if not set
  const pricePerTablet = (currentPrice / currentQuantity).toFixed(2);

  // 2. Calculate Savings Text
  const getSavingText = (pack: any) => {
    if (pack.originalPrice && pack.originalPrice > pack.price) {
      const saving = (pack.originalPrice - pack.price).toFixed(0);
      return `(Save £${saving})`;
    }
    return null;
  };

  return (
    <>
    <section className={styles["product-content"]}>
      {/* left section  */}
      <div className={styles["gallery-col"]}>
        <div className={styles["gallery-card"]}>
          <div className={styles["gallery-top"]}>
            {/* Fallback to product name if brand image isn't available */}
            <h2 className={styles["brand"]}>{product.brandName || product.name}</h2>
            <button type="button" className={styles["shareBtn"]} aria-label="share product">
              <ShareIcon />
            </button>
          </div>

          <div className={styles["main-row"]}>
            {gallery.length > 1 && (
              <button type="button" className={styles["arrow-btn"]} onClick={prevImage} aria-label="Previous image">
                <ChevronLeft />
              </button>
            )}

            <div className={styles["main-image-wrap"]}>
              {gallery[activeImageWrap]?.imageUrl ? (
                <Image
                  src={gallery[activeImageWrap].imageUrl}
                  alt={`${product.name} view ${activeImageWrap + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, 600px"
                  priority
                  unoptimized
                  className={styles["main-img"]}
                />
              ) : (
                <div className={styles["main-img"]} role="img" aria-label={`${product.name} image unavailable`} />
              )}
            </div>

            {gallery.length > 1 && (
              <button type="button" className={styles["arrow-btn"]} onClick={nextImage} aria-label="Next image">
                <ChevronRight />
              </button>
            )}
          </div>
        </div>

        {/* Thumbnails */}
        {gallery.length > 1 && (
          <div className={styles["product-images-thumbs"]}>
            {gallery.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImageWrap(index)}
                className={`${styles["thumb"]} ${activeImageWrap === index ? styles["active-thumb"] : ""}`}
                aria-label={`View image ${index + 1}`}
              >
                <div className={styles["thumb-img-wrap"]}>
                  {item.imageUrl && (
                    <Image src={item.imageUrl} alt={`Thumbnail view ${index + 1}`} fill sizes="137px" unoptimized />
                  )}
                  {/* Render the red label overlay if it exists */}
                  {item.label && <span className={styles["thumb-label"]}>{item.label}</span>}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* right section  */}
      <div className={styles["product-buy-col"]}>
        <div className={styles["product-right-first"]}>
          <div className={styles["product-right-first-wrapper"]}>
            {product.inStock && (
              <div className={styles["product-in-stock"]}>
                <CircleCheck size={18} />
                <span>In Stock</span>
              </div>
            )}
            
            <h1 className={styles["product-title"]}>{product.name}</h1>

            <div className={styles["product-review-row"]}>
              <StarIcon />
              <span>({product.reviewCount?.toLocaleString() || 0} Reviews)</span>
            </div>

            {/* FIXED: Use Sanity subtitle */}
            {product.subtitle && <span className={styles["product-subtitle"]}>{product.subtitle}</span>}
            
            {product.prescriptionOnly && <p className={styles["prescription-text"]}>Prescription required</p>}
          </div>

          <div className={styles["product-price-block"]}>
            {/* FIXED: Dynamic Price */}
            <h3>£{currentPrice.toFixed(2)}</h3>
            
            {/* FIXED: Dynamic Price Per Tablet */}
            <span className={styles["price-per-tablet"]}>
              £{pricePerTablet} / per tablet
            </span>
          </div>
        </div>

        <div className={styles["product-right-second"]}>
          {/* Strength Selector */}
          {strengths.length > 0 && (
            <div className={styles["product-right-field"]}>
              <p className={styles["product-right-label"]}>Strength</p>
              <div className={styles["product-right-pill-row"]}>
                {strengths.map((strength) => (
                  <button
                    key={strength._key}
                    type="button"
                    onClick={() => setActiveStrength(strength.label)}
                    className={`${styles["product-right-pill"]} ${activeStrength === strength.label ? styles["active-pill"] : ""}`}
                  >
                    {strength.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pack Size Selector */}
          {packSizes.length > 0 && (
            <div className={styles["product-right-field"]}>
              <p className={styles["product-right-label"]}>Pack Size</p>
              <div className={styles["product-right-pill-row"]}>
                {packSizes.map((pack) => (
                  <button
                    key={pack._key}
                    type="button"
                    onClick={() => setActivePack(pack._key)}
                    className={`${styles["product-pack-card"]} ${activePack === pack._key ? styles["active-pack-card"] : ""}`}
                  >
                    {/* Top line: Label and Price */}
                    <span className={styles["product-right-pack-title"]}>
                      {pack.label} £{pack.price.toFixed(2)}
                    </span>
                    
                    {/* Bottom line: Savings and Price per tablet */}
                    <div className={styles["product-right-pack-con"]}>
                      <span className={styles["product-right-pack-unit"]}>
                        {pack.originalPrice && `£${pack.originalPrice.toFixed(0)} `}
                        {getSavingText(pack)}
                      </span>
                      <span className={styles["product-right-pack-unit"]}>
                        (£{(pack.price / (pack.quantity || 1)).toFixed(2)} / tablet)
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles["btn-container"]}>
          <Button showArrow className={styles["product-right-button"]}>
            Add to Bag
          </Button>
        </div>

        {/* Delivery Details table */}
        {/* FIXED: Mapped exactly to the new Sanity query structure */}
        {product.deliveryOptions && product.deliveryOptions.length > 0 && (
          <div className={styles["product-right-delivery"]}>
            <h3 className={styles["product-right-delivery-title"]}>Delivery</h3>
            <p className={styles["product-delivery-desc"]}>
              Free standard shipping on orders over $35 before tax, plus free returns.
            </p>

            <table className={styles["product-delivery-table"]}>
              <thead>
                <tr>
                  <th>TYPE</th>
                  <th>HOW LONG</th>
                  <th>HOW MUCH</th>
                </tr>
              </thead>
              <tbody>
                {product.deliveryOptions.map((option) => (
                  <tr key={option._key}>
                    <td>{option.type}</td>
                    <td>{option.time}</td>
                    <td>{option.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default ProductDetails;