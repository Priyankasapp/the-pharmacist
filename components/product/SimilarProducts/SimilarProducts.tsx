"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import { ChevronLeft, ChevronRight } from "@/components/Icon/Icon";
import { client } from "@/sanity/lib/client";
import { RELATED_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import type { ProductCardData } from "@/lib/types";
import styles from "@/app/product/[slug]/Product.module.css";

export default function SimilarProducts({ excludeSlug }: { excludeSlug: string }) {
  const [products, setProducts] = useState<ProductCardData[]>([]);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    let cancelled = false;

    client
      .fetch<ProductCardData[]>(RELATED_PRODUCTS_QUERY, { slug: excludeSlug })
      .then((data) => {
        if (!cancelled) setProducts(data);
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          console.error("Failed to fetch similar products from Sanity:", error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [excludeSlug]);

  if (!products.length) return null;

  const settings = {
    dots: false,
    infinite: products.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, products.length),
    slidesToScroll: 1,
  };

  return (
    <section className={styles["similar-product-card"]}>
      <div className={styles["similar-product-header"]}>
        <h2>Similar Products</h2>
        <div className={styles["slider-button"]}>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous products"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next products"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={styles["product-cards-container"]}>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className={styles["product-card-item"]}>
              <ProductCard
                {...product}
                showAppointmentButton
                showTreatmentsButton={false}
                appointmentButtonText="Get Treatment"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
