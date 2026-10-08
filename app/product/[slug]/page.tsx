/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import { use, useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./Product.module.css";
import { productCardData, productData, tabs } from "@/lib/data";
import {  VectorFour, VectorThree } from "@/data/assets";
import ProductDetails from "@/components/product/ProductDetails/ProductDetails";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import { ChevronLeft, ChevronRight, HealthBrokenIcon } from "@/components/Icon/Icon";
import Slider from "react-slick";
import { notFound } from "next/navigation";

const normalizeSlug = (value: string) =>
  decodeURIComponent(value).trim().toLowerCase().replace(/\s+/g, " ");

const getProductPerPage = () =>{
  if(typeof window === "undefined") return 4;
  if(window.innerWidth <= 670) return 1;
  if(window.innerWidth <= 960) return 2;
  if(window.innerWidth <= 1280) return 3;
  return 4
};

const ProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug ?? "";
  const normalizedSlug = normalizeSlug(slug);

  const selectedProduct =
    normalizeSlug(productData.name) === normalizedSlug ||
    normalizeSlug(productData.title) === normalizedSlug ||
    normalizeSlug(productData.slug || "") === normalizedSlug
      ? productData
      : null;

  if (!selectedProduct) {
    notFound();
  }

  const sliderRef = useRef<any>(null);

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots:false,
    infinite: true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3, 
    
  }
const [activeTab, setActiveTab] = useState("Description");
const [productPerPage, setProductPerPage] = useState(4);

useEffect(()=>{
  setProductPerPage(getProductPerPage());
  const handleResize = () => setProductPerPage(getProductPerPage());
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  
  return (
    <div className={styles["product-page"]}>
      <div className="container">
        <div className={styles["product-gallary-container"]}>
      
        <ProductDetails product={selectedProduct} />
      </div>

    
      <div className={styles["product-details"]}>
        
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
       
          <nav className={styles["prodcut-details-tab-container"]}>
           
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

        
          <main className={styles["product-content"]}>
            {activeTab === "Description" && (
              <>
              
                <section className={styles["product-content-section"]}>
                  <h2 className={styles["product-content-heading"]}>
                    What is Panadol?
                  </h2>
                  <div className={styles["product-content-text-group"]}>
                    <div className={styles["product-content-bullet-paragraph"]}>
                     <HealthBrokenIcon/>
                      <p className={styles["product-content-paragraph"]}>
                        Panadol is a pain relief and fever-reducing medicine
                        that contains paracetamol (acetaminophen). It &apos;s
                        available in several forms:
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
                      <HealthBrokenIcon/>
                      <p className={styles["product-content-paragraph"]}>
                        All of these contain the same active ingredient,
                        paracetamol, which works to relieve pain and reduce
                        fever.
                      </p>
                    </div>
                    <div className={styles["product-content-bullet-paragraph"]}>
                      <HealthBrokenIcon/>
                      <p className={styles["product-content-paragraph"]}>
                        Pandol is commonly used for headaches, toothaches,
                        muscle pain, back pain, back pain, period pain, and the
                        aches and fever associated with colds or flu.
                      </p>
                    </div>
                  </div>
                </section>
                <section className={styles["product-content-section"]}>
                  <h2 className={styles["product-content-heading"]}>
                    How dose Panadol work?
                  </h2>
                  <div className={styles["product-content-text-group"]}>
                    <div className={styles["product-content-bullet-paragraph"]}>
                      <HealthBrokenIcon/>
                      <p className={styles["product-content-paragraph"]}>
                        Paracetamol, the active ingredient in Pandol, works in
                        the body to relieve pain and reduce fever by:
                      </p>
                    </div>
                    <ol className={styles["product-content-order-list"]}>
                      <li>
                        Reducing pain signals - its blocks certain chemicals in
                        the brain that send pain messages, helping to reduce
                        discomfort.
                      </li>
                      <li>
                        Lowering fever - It acts on the part of the brain that
                        regulates body temperature, helping bring a high
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
                      <HealthBrokenIcon/>
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

    
      <div className={styles["similar-product-card"]}>
        <div className={styles["similar-product-header"]}>
          <h2>Similar Products</h2>
          <div className={styles["slider-button"]}>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous products"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next products"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className={styles["product-cards-container"]}>
         <Slider ref={sliderRef}
         {...settings}>
           {productCardData.map((product) => {
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
                    showAppointmentButton={true}
                        showTreatmentsButton={false}
                        appointmentButtonText="Get Treatment"
                />
              </div>
            );
          })}
         </Slider>
        </div>
      </div>

      </div>
          </div>
  );
};

export default ProductPage;
