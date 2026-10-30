'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./Product.module.css";
import { tabs } from "@/lib/data";
import type { ProductData } from "@/lib/types";
import {  VectorFour, VectorThree } from "@/data/assets";
import ProductDetails from "@/components/product/ProductDetails/ProductDetails";
import { HealthBrokenIcon } from "@/components/Icon/Icon";
import SimilarProducts from "@/components/product/SimilarProducts/SimilarProducts";

const ProductPageClient = ({
  product,
  isStaticFallback,
}: {
  product: ProductData;
  isStaticFallback: boolean;
}) => {
  const [activeTab, setActiveTab] = useState("Description");

  
  return (
    <div className={styles["product-page"]}>
      <div className="container">
        <div className={styles["product-gallery-container"]}>
      
        <ProductDetails product={product} />
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
       
          <nav className={styles["product-details-tab-container"]}>
           
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

        
          <div className={styles["product-content"]}>
            {activeTab === "Description" && isStaticFallback && (
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
            {activeTab === "Description" && !isStaticFallback && (
              <section className={styles["product-content-section"]}>
                <h2 className={styles["product-content-heading"]}>
                  About {product.title}
                </h2>
                <p className={styles["product-content-paragraph"]}>
                  {product.description ||
                    "See the product packaging and leaflet for full product information."}
                </p>
              </section>
            )}
          </div>
        </div>
      </div>

    
      <SimilarProducts excludeSlug={product.slug || ""} />

      </div>
          </div>
  );
};

export default ProductPageClient;
