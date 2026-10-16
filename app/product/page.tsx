/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Shop.module.css";
import ProductSidebar from "@/components/Shop/ProductSidebar/ProductSidebar";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, SearchIcon } from "@/components/Icon/Icon";
import { categoriesQuery, brandsQuery, shopProductsQuery } from '@/sanity/lib/queries';
import { client } from "@/sanity/lib/client";
import type { ProductCardData } from "@/lib/types";

const Shop = async() => {
  const [categories, brands, products] = await Promise.all([
    client.fetch(categoriesQuery),
    client.fetch(brandsQuery),
    client.fetch(shopProductsQuery),
  ]);

  const productCards: ProductCardData[] = products.map((product: any) => {
    const price = Number(product.price ?? 0);
    const originalPrice = product.originalPrice != null ? Number(product.originalPrice) : undefined;
    const savings = originalPrice && originalPrice > price
      ? (originalPrice - price).toFixed(2)
      : undefined;

    const unitInfo = product.unitInfo ?? "";
    const [weightText = "", unitPriceText = ""] = unitInfo.split("|").map((part: string) => part.trim());

    return {
      id: String(product._id ?? product.slug ?? product.name ?? "product"),
      slug: String(product.slug ?? product.name ?? product._id ?? "product"),
      title: String(product.name ?? "Untitled product"),
      subtitle: String(product.description ?? product.brand ?? product.category ?? ""),
      image: product.image ?? "/images/placeholder-product.png",
      reviewCount: Number(product.reviewCount ?? 0),
      price,
      originalPrice,
      weightText: weightText || undefined,
      unitPriceText: unitPriceText || undefined,
      isPrescriptionOnly: Boolean(product.prescriptionOnly),
      savingsText: savings,
      showAppointmentButton: true,
      showTreatmentsButton: false,
      appointmentButtonText: "Add to Bag",
    };
  });

  return (
    <div className={styles["shop"]}>
      <div className="container">
        <h1>Shop</h1>

        <div className={styles["shop-container"]}>
          <ProductSidebar categories={categories} brands={brands} />

          <div className={styles["shop-content-container"]}>
          
            <div className={styles["shop-search-container"]}>
              <div className={styles["shop-search-view"]}>
                <span className={styles["shop-search-text"]}>View: 9 </span><ChevronDown  />
              </div>

              <div className={styles["shop-search-right-section"]}>
                <div className={styles["shop-search-input-container"]}>
                  <label htmlFor="product-search" className={styles["shop-search-text"]}>
                    Search:
                  </label>
                  <div className={styles["shop-search-input-wrapper"]}>
                    <input id="product-search" type="search" placeholder="Search Products" aria-label="Search products" />
                    <SearchIcon className={styles["search-icon"]} />
                  </div>
                </div>

                <div className={styles["shop-search-sortby-wrapper"]}>
                  <span className={styles["shop-search-text"]}>
                    Sort By:
                  </span>
                  <span className={styles["shop-search-sortby-value"]}>
                    Popularity <ChevronDown  />
                  </span>
                </div>
              </div>
            </div>

            {/* product grid */}
            <div className={styles["product-grid-container"]}>
              {productCards.map((product) => {
                const productSlug = product.slug || product.title;
                return (
                  <div key={product.id} className={styles["grid-item"]}>
                    <Link
                      href={`/product/${productSlug}`}
                      className={styles["grid-item-link"]}
                    >
                      <ProductCard
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
                        slug={product.slug}
                        showAppointmentButton={product.showAppointmentButton}
                        showTreatmentsButton={product.showTreatmentsButton}
                        appointmentButtonText={product.appointmentButtonText}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* pagination */}
            <nav
              className={styles["shop-pagination-section"]}
              aria-label="Pagination"
            >
              <a
                href="#"
                className={styles["shop-pagination-nav1"]}
                aria-label="Previous page"
              >
                <ArrowLeft/>
                <span>Previous</span>
              </a>

              <a
                href="#"
                className={styles["shop-pagination-number-wrapper-active"]}
                aria-current="page"
              >
                1
              </a>

              {[2, 3].map((n) => (
                <a
                  key={n}
                  href="#"
                  className={`${styles["shop-pagination-number-wrapper"]} ${styles["pagination-number"]}`}
                >
                  {n}
                </a>
              ))}

              <span
                className={`${styles["shop-pagination-number-wrapper"]} ${styles["pagination-number"]}`}
                aria-hidden="true"
              >
                …
              </span>

              {[10, 16].map((n) => (
                <a
                  key={n}
                  href="#"
                  className={`${styles["shop-pagination-number-wrapper"]} ${styles["pagination-number"]}`}
                >
                  {n}
                </a>
              ))}

              <a
                href="#"
                className={styles["shop-pagination-nav"]}
                aria-label="Next page"
              >
                <span>Next</span>
               <ArrowRight/>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;