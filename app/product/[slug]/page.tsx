/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./Product.module.css";

import { productCardData, tabs } from "@/lib/data";
import { healthBroken, VectorFour, VectorThree } from "@/data/assets";
import ProductDetails from "@/components/product/ProductDetails/ProductDetails";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getProductPerPage = () =>{
  if(typeof window === "undefined") return 4;
  if(window.innerWidth <= 670) return 1;
  if(window.innerWidth <= 960) return 2;
  if(window.innerWidth <= 1280) return 3;
  return 4
};

const page = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [currentIndex, setCurrentIndex] = useState(0);
const [productPerPage, setProductPerPage] = useState(4);
const [isMounted, setIsMouted] = useState(false);

useEffect(()=>{
  setIsMouted(true);
  setProductPerPage(getProductPerPage());
  const handleResize = () => setProductPerPage(getProductPerPage());
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

  return (
    <div className={styles["product-page"]}>
      <div className={styles["product-gallary-container"]}>
        {/* left section */}
        <ProductDetails />
      </div>

      {/* description */}
      <div className={styles["product-details"]}>
        {/* background image */}
        <div className={styles["product-container-bg-wrapper"]}>
          <Image
            src={VectorFour}
            alt="VectorIcon"
            className={styles["product-container-bg-vector"]}
          />

          <Image
            src={VectorThree}
            alt="VectorIcon"
            className={styles["product-container-bg-vector"]}
          />
        </div>

        <div className={styles["product-details-container"]}>
          {/* navigation */}
          <nav className={styles["prodcut-details-tab-container"]}>
            {/* details */}
            <div className={styles["product-details-tab-wrapper"]}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles["product-details-tab-button"]} ${
                    activeTab === tab ? styles["active"] : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          {/* main details */}
          <main className={styles["product-content"]}>
            {activeTab === "Description" && (
              <>
                {/* first section */}
                <section className={styles["product-content-section"]}>
                  <h2 className={styles["product-content-heading"]}>
                    What is Pandol?
                  </h2>
                  <div className={styles["product-content-text-group"]}>
                    <div className={styles["product-content-bullet-paragraph"]}>
                      <Image
                        src={healthBroken}
                        alt="point"
                        className={styles["product-content-bullet"]}
                      />
                      <p className={styles["product-content-paragraph"]}>
                        Panadol is a pain relief and fever-reducing medicine
                        that contains paracetamol (acetaminophen). It &apos;s
                        avalable in several forms:
                      </p>
                    </div>
                    <ul className={styles["product-content-list"]}>
                      <li>Standard Tablets</li>
                      <li>Caplets</li>
                      <li>Soluble Tablets</li>
                      <li>Quick-Dissolve Tablets</li>
                      <li>Children&apos;s Suspension</li>
                    </ul>

                    <div className={styles["product-content-bullet-paragraph"]}>
                      <Image
                        src={healthBroken}
                        alt="point"
                        className={styles["product-content-bullet"]}
                      />
                      <p className={styles["product-content-paragraph"]}>
                        All of these contain the same active ingredient,
                        paracetamol, which works to relive pain and reduce
                        fever.
                      </p>
                    </div>
                    <div className={styles["product-content-bullet-paragraph"]}>
                      <Image
                        src={healthBroken}
                        className={styles["product-content-bullet"]}
                        alt="point"
                      />
                      <p className={styles["product-content-paragraph"]}>
                        Pandol is commonly used for headaches, toothaches,
                        musicle pain, back pain, back pain, period pain, and the
                        aches and fever associated with colds or flu.
                      </p>
                    </div>
                  </div>
                </section>
                <section className={styles["product-content-section"]}>
                  <h2 className={styles["product-content-heading"]}>
                    How does Panadol work?
                  </h2>
                  <div className={styles["product-content-text-group"]}>
                    <div className={styles["product-content-bullet-paragraph"]}>
                      <Image
                        src={healthBroken}
                        className={styles["product-content-bullet"]}
                        alt="point"
                      />
                      <p className={styles["product-content-paragraph"]}>
                        Paracetamol, the active ingredient in Pandol, works in
                        the body to relieve pain and reduce fever by:
                      </p>
                    </div>
                    <ol className={styles["product-content-order-list"]}>
                      <li>
                        Reducting pain signals - its blocks certain chemicals in
                        the brain that send pain messages, helping to reduce
                        discomfort.
                      </li>
                      <li>
                        Lowering fever - It acts on the part of the brain that
                        regulates body temperature, helping bring a hign
                        temperature down.
                      </li>
                      <li>
                        Gentle on the stomach - Unlike some painkillers, Panadol
                        doesn&apos;t usually irritate the stomach, making it
                        suitable for most people.
                      </li>
                    </ol>
                  </div>
                </section>

                <section className={styles["product-content-section"]}>
                  <h2 className={styles["product-content-heading"]}>
                    What is the recommended does of Panadol?
                  </h2>
                  <div className={styles["product-content-text-group"]}>
                    <div className={styles["product-content-bullet-paragraph"]}>
                      <Image
                        src={healthBroken}
                        alt="bullet icon"
                        className={styles["product-content-bullet"]}
                      />
                      <p className={styles["product-content-paragraph"]}>
                        The usual adult dose is 500mg–1000mg every 4–6 hours as
                        needed, with a maximum of 4000mg in 24 hours. For
                        children, dosing depends on weight and age, so check the
                        packaging or ask your clinician. Always follow the
                        instructions and do not exceed the recommended dose.
                      </p>
                    </div>
                  </div>
                </section>
              </>
            )}
          </main>
        </div>
      </div>

      {/* another products */}
      <div className={styles["similar-product-card"]}>
        <div className={styles["similar-product-header"]}>
          <h2>Similar Products</h2>
          <div className={styles["slider-button"]}>
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
              disabled={
                currentIndex + productPerPage >= productCardData.length
              }
              aria-label="Next products"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className={styles["product-cards-container"]}>
          {visibleProducts.map((product) => {
            return (
              <div key={product.id} className={styles["product-card-item"]}>
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
                  slug={""}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
