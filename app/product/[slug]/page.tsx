/* eslint-disable react-hooks/set-state-in-effect */


"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Product.module.css";
import { productData, tabs } from "@/lib/data";
import {  VectorFour, VectorThree } from "@/data/assets";
import ProductDetails from "@/components/product/ProductDetails/ProductDetails";
import { HealthBrokenIcon } from "@/components/Icon/Icon";
import { notFound } from "next/navigation";
import SimilarProducts from "@/components/product/SimilarProducts/SimilarProducts";

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
        <div className={styles["product-gallery-container"]}>
      
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
          </div>
        </div>
      </div>

    
      <SimilarProducts excludeSlug={selectedProduct.slug || ""} />

      </div>
          </div>
  );
};

export default ProductPage;
