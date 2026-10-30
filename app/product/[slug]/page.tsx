/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */

'use client'
import { use, useEffect, useState } from "react";
import Image from "next/image";

import styles from "./Product.module.css";
import { VectorFour, VectorThree } from "@/data/assets";
import { tabs } from "@/lib/data";
import ProductDetails from "@/components/product/ProductDetails/ProductDetails";
import SimilarProducts from "@/components/product/SimilarProducts/SimilarProducts";
import { HealthBrokenIcon } from "@/components/Icon/Icon";

import { client } from "@/sanity/lib/client";
import { productBySlugQuery } from "@/sanity/lib/queries";
import { ProductData } from "@/lib/types";

const normalizeSlug = (value: string) =>
  decodeURIComponent(value).trim().toLowerCase().replace(/\s+/g, " ");

const getProductPerPage = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth <= 670) return 1;
  if (window.innerWidth <= 960) return 2;
  if (window.innerWidth <= 1280) return 3;
  return 4;
};

const ProductPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug ?? "";
  const normalizedSlug = normalizeSlug(slug);

  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState("Description");
  const [productPerPage, setProductPerPage] = useState(4);

  useEffect(() => {
    if (!normalizedSlug) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const slugCandidates = [
          normalizedSlug,
          normalizedSlug.replace(/\s+/g, "-"),
        ];

        const data = await client.fetch(productBySlugQuery, { slugCandidates });
        
        console.log("Sanity product:", data);

        if (!data) {
          setError("Product not found.");
          return;
        }

        const sanityProduct: ProductData = {
          _id: data._id,
          name: data.name,
          title: data.name,
          subtitle: data.subtitle, 
          slug: data.slug,
          description: data.description ?? "",
          price: data.price ?? 0, 
          originalPrice: data.originalPrice ?? undefined,
          reviewCount: data.reviewCount ?? 0,
          reviews: data.reviewCount ?? 0, 
          inStock: data.inStock ?? true,
          prescriptionOnly: data.prescriptionOnly ?? false,
          brandName: data.brandName,
          
          gallery: (data.gallery ?? []).map((item: any) => ({
            imageUrl: item.imageUrl,
            label: item.label,
          })),
          images: [], 

          strengths: (data.strengths ?? []).map((item: any) => ({
            _key: item._key,
            label: item.label,
            price: item.price ?? 0,
          })),

          packSizes: (data.packSizes ?? []).map((item: any) => ({
            _key: item._key,
            label: item.label,
            quantity: item.quantity, 
            price: item.price ?? 0,
            originalPrice: item.originalPrice ?? undefined,
          })),

          deliveryOptions: (data.deliveryOptions ?? []).map((item: any) => ({
            _key: item._key,
            type: item.type,
            time: item.time,
            cost: item.cost,
          })),

          productInformation: data.productInformation ?? [],
        };

        setProduct(sanityProduct);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Unable to load this product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [normalizedSlug]);

  useEffect(() => {
    setProductPerPage(getProductPerPage());
    const handleResize = () => setProductPerPage(getProductPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <div className="container">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="container">
        <p>{error || "Product not found."}</p>
      </div>
    );
  }

  // ✅ Find the active content from Sanity based on the selected tab
  const activeInfoContent = product.productInformation?.find(
    (info) => info.title.toLowerCase() === activeTab.toLowerCase()
  );

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
              {activeInfoContent ? (
                <section className={styles["product-content-section"]}>
                  <h2 className={styles["product-content-heading"]}>
                    {activeInfoContent.title}
                  </h2>
                  <div className={styles["product-content-text-group"]}>
                    <div className={styles["product-content-bullet-paragraph"]}>
                      <HealthBrokenIcon />
                    
                      <p 
                        className={styles["product-content-paragraph"]}
                        style={{ whiteSpace: "pre-line" }} 
                      >
                        {activeInfoContent.content}
                      </p>
                    </div>
                  </div>
                </section>
              ) : (
                // Fallback if no content exists in Sanity for this tab yet
                <section className={styles["product-content-section"]}>
                  <h2 className={styles["product-content-heading"]}>
                    {activeTab}
                  </h2>
                  <p className={styles["product-content-paragraph"]}>
                    Information for this section is currently being updated.
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

export default ProductPage; 