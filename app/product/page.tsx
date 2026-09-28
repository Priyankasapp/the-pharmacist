import styles from "./Shop.module.css";
import ProductSidebar from "@/components/Shop/ProductSidebar/ProductSidebar";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import { productCardData } from "@/lib/data";
import { ArrowLeft, ArrowRight, ChevronDown, Search } from "lucide-react";
import Link from "next/link";

const Shop = () => {
  return (
    <div className={styles["shop"]}>
      <div className="container">
        <h1>Shop</h1>

        <div className={styles["shop-container"]}>
          <ProductSidebar />

          <div className={styles["shop-content-container"]}>
          
            <div className={styles["shop-search-container"]}>
              <div className={styles["shop-search-view"]}>
                <span className={styles["shop-search-text"]}>View: 9 </span><ChevronDown size={15} />
              </div>

              <div className={styles["shop-search-right-section"]}>
                <div className={styles["shop-search-input-container"]}>
                  <span className={styles["shop-search-text"]}>
                    Search:
                  </span>
                  <div className={styles["shop-search-input-wrapper"]}>
                    <input type="text" placeholder="Search Products" />
                    <Search size={15} className={styles["search-icon"]} />
                  </div>
                </div>

                <div className={styles["shop-search-sortby-wrapper"]}>
                  <span className={styles["shop-search-text"]}>
                    Sort By:
                  </span>
                  <span className={styles["shop-search-sortby-value"]}>
                    Popularity <ChevronDown size={15} />
                  </span>
                </div>
              </div>
            </div>

            {/* product grid */}
            <div className={styles["product-grid-container"]}>
              {productCardData.map((product) => {
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
                        slug={""}
                        showAppointmentButton={true}
                        showTreatmentsButton={false}
                        appointmentButtonText="Add to Bag"
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
                <ArrowLeft size={16} />
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
                <ArrowRight size={16} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;