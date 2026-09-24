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

        {/* content  */}
        <div className={styles["shop-container"]}>
          <ProductSidebar />

          <div className={styles["shop-content-container"]}>
            {/* search products  */}
            <div className={styles["shop-search-container"]}>
              <div className={styles["shop-search-view"]}>
                View: 9 <ChevronDown size={15} />
              </div>
              <div className={styles["shop-search-right-section"]}>
                {/* search bar  */}
                <div className={styles["shop-search-input-container"]}>
                  <span className={styles["shop-search-input-text"]}>
                    Search:
                  </span>
                  <div className={styles["shop-search-input-wrapper"]}>
                    <input type="text" placeholder="Search Products " />
                    <Search size={15} className={styles["search-icon"]} />
                  </div>
                </div>
                <div className={styles["shop-search-sortby-wrapper"]}>
                  <span className={styles["shop-search-sortby-text"]}>
                    Sort By:
                  </span>
                  <span className={styles["shop-search-sortby-value"]}>
                    Popularity <ChevronDown size={15} />
                  </span>{" "}
                </div>
              </div>
            </div>

            {/* product data  */}
            <div className={styles["product-grid-container"]}>
              {productCardData.map((product) => {
                const productSlug = product.slug || product.title;
                return (
                  <div key={product.id} className={styles["grid-item"]}>
                    <Link
                      href={`/product/${productSlug}`}
                      style={{
                        textDecoration: "none",
                        width: "100%",
                        display: "flex",
                      }}
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
  // onAppointmentClick={() => router.push(`/book/${product.id}`)}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Pagination section */}
            <div className={styles["shop-pagination-section"]}>
              <div>
                <a
                  href="#"
                  className={styles["shop-pagination-nav1"]}
                  style={{ display: "flex", gap: "10px" }}
                >
                  <ArrowLeft />
                  <span>Previouse</span>
                </a>
              </div>

              <a
                href="#"
                className={styles["shop-pagination-number-wrapper-active"]}
              >
                1
              </a>
              <a
                href="#"
                className={`${styles["shop-pagination-number-wrapper"]}, ${styles["pagination-number"]}`}
              >
                2
              </a>
              <a
                href="#"
                className={`${styles["shop-pagination-number-wrapper"]}, ${styles["pagination-number"]}`}
              >
                3
              </a>
              <span className={styles["shop-pagination-number-wrapper"]}>
                {" "}
                ...
              </span>
              <a
                href="#"
                className={`${styles["shop-pagination-number-wrapper"]}, ${styles["pagination-number"]}`}
              >
                10
              </a>
              <a href="#" className={styles["shop-pagination-number-wrapper"]}>
                16
              </a>
              <div>
                <a
                  href="#"
                  className={styles["shop-pagination-nav"]}
                  style={{ display: "flex", gap: "10px" }}
                >
                  <span>Next</span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
