'use client';

import { useEffect, useMemo, useState } from "react";
import styles from "./Shop.module.css";
import ProductSidebar from "@/components/Shop/ProductSidebar/ProductSidebar";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, SearchIcon } from "@/components/Icon/Icon";
import { categoriesQuery, brandsQuery, shopProductsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { FilterOption, FilterState, ProductCardData } from "@/lib/types";

const getDefaultFilters = (maxPrice = 100): FilterState => ({
  minPrice: 0,
  maxPrice,
  categories: [],
  brands: [],
  ratings: [],
  promotions: [],
  productTypes: [],
});

type SanityProduct = {
  _id?: string;
  slug?: string;
  name?: string;
  description?: string;
  price?: number | string;
  originalPrice?: number | string;
  unitInfo?: string;
  prescriptionOnly?: boolean;
  reviewCount?: number | string;
  rating?: number | string;
  image?: string;
  categoryId?: string;
  categoryName?: string;
  brandId?: string;
  brandName?: string;
};

type SanityOption = {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  label?: string;
  slug?: string;
};

const mapSanityProduct = (product: SanityProduct): ProductCardData => {
  const price = Number(product.price ?? 0);
  const originalPrice = product.originalPrice != null ? Number(product.originalPrice) : undefined;
  const savings = originalPrice && originalPrice > price ? (originalPrice - price).toFixed(2) : undefined;

  const unitInfo = product.unitInfo ?? "";
  const [weightText = "", unitPriceText = ""] = unitInfo
    .split("|")
    .map((part: string) => part.trim());

  return {
    id: String(product._id ?? product.slug ?? product.name ?? "product"),
    slug: String(product.slug ?? product.name ?? product._id ?? "product"),
    title: String(product.name ?? "Untitled product"),
    subtitle: String(product.description ?? product.brandName ?? product.categoryName ?? ""),
    image: product.image ?? "",
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
};

export default function Shop() {
  const [categories, setCategories] = useState<FilterOption[]>([]);
  const [brands, setBrands] = useState<FilterOption[]>([]);
  const [products, setProducts] = useState<SanityProduct[]>([]);
  const [filters, setFilters] = useState<FilterState>(getDefaultFilters());
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  useEffect(() => {
    const loadShopData = async () => {
      try {
        const [categoryData, brandData, productData] = await Promise.all([
          client.fetch(categoriesQuery),
          client.fetch(brandsQuery),
          client.fetch(shopProductsQuery),
        ]);

        const normalizedCategories = (categoryData ?? []).map((item: SanityOption) => ({
          id: String(item.id ?? item._id ?? item.label ?? item.name ?? ""),
          label: String(item.label ?? item.name ?? "Unnamed"),
        }));

        const normalizedBrands = (brandData ?? []).map((item: SanityOption) => ({
          id: String(item.id ?? item._id ?? item.label ?? item.name ?? item.title ?? ""),
          label: String(item.label ?? item.name ?? item.title ?? "Unnamed"),
        }));

        const resolvedProducts = productData ?? [];
        const maxProductPrice = Math.max(
          100,
          ...resolvedProducts.map((product: SanityProduct) => Number(product.price ?? 0))
        );

        setCategories(normalizedCategories);
        setBrands(normalizedBrands);
        setProducts(resolvedProducts);
        setFilters((prev) => ({ ...prev, maxPrice: maxProductPrice }));
      } finally {
        setIsLoading(false);
      }
    };

    loadShopData();
  }, []);

  const handleFilterChange = (updater: (prev: FilterState) => FilterState) => {
    setFilters((prev) => {
      const base = getDefaultFilters(prev.maxPrice || 100);
      return updater({ ...base, ...prev });
    });
  };

  const handleClearFilters = () => {
    setFilters((prev) => getDefaultFilters(prev.maxPrice));
  };

  const productCards = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase();
    const matchingProducts = products.filter((product) => {
      const price = Number(product.price ?? 0);
      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(String(product.categoryId ?? product.categoryName ?? ""));
      const matchesBrand =
        filters.brands.length === 0 ||
        filters.brands.includes(String(product.brandId ?? product.brandName ?? ""));
      const matchesPrice = price >= filters.minPrice && price <= filters.maxPrice;
      const searchableText = [
        product.name,
        product.description,
        product.brandName,
        product.categoryName,
        product.unitInfo,
      ].join(" ").toLocaleLowerCase();
      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
    });

    return [...matchingProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-low-high":
          return Number(a.price ?? 0) - Number(b.price ?? 0);
        case "price-high-low":
          return Number(b.price ?? 0) - Number(a.price ?? 0);
        case "name-a-z":
          return String(a.name ?? "").localeCompare(String(b.name ?? ""));
        case "name-z-a":
          return String(b.name ?? "").localeCompare(String(a.name ?? ""));
        case "rating":
          return Number(b.rating ?? 0) - Number(a.rating ?? 0);
        case "popularity":
        default:
          return Number(b.reviewCount ?? 0) - Number(a.reviewCount ?? 0);
      }
    }).map(mapSanityProduct);
  }, [products, filters, searchTerm, sortBy]);

  return (
    <div className={styles["shop"]}>
      <div className="container">
        <h1>Shop</h1>

        <div className={styles["shop-container"]}>
          <ProductSidebar
            categories={categories}
            brands={brands}
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearFilters}
          />

          <div className={styles["shop-content-container"]}>
            <div className={styles["shop-search-container"]}>
              <div className={styles["shop-search-view"]}>
                <span className={styles["shop-search-text"]}>View: {productCards.length} </span>
                <ChevronDown />
              </div>

              <div className={styles["shop-search-right-section"]}>
                <div className={styles["shop-search-input-container"]}>
                  <label htmlFor="product-search" className={styles["shop-search-text"]}>
                    Search:
                  </label>
                  <div className={styles["shop-search-input-wrapper"]}>
                    <input
                      id="product-search"
                      type="search"
                      placeholder="Search Products"
                      aria-label="Search products"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <SearchIcon className={styles["search-icon"]} />
                  </div>
                </div>

                <div className={styles["shop-search-sortby-wrapper"]}>
                  <span className={styles["shop-search-text"]}>Sort By:</span>
                  <label className={styles["shop-search-sortby-value"]} htmlFor="product-sort">
                    <select
                      id="product-sort"
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      aria-label="Sort products"
                    >
                      <option value="popularity">Popularity</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                      <option value="name-a-z">Name: A to Z</option>
                      <option value="name-z-a">Name: Z to A</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                    <ChevronDown />
                  </label>
                </div>
              </div>
            </div>

            {isLoading ? (
              <p>Loading products...</p>
            ) : productCards.length === 0 ? (
              <p>No products match your search or filters.</p>
            ) : (
              <div className={styles["product-grid-container"]}>
                {productCards.map((product) => {
                  const productSlug = product.slug || product.title;
                  return (
                    <div key={product.id} className={styles["grid-item"]}>
                      <Link href={`/product/${productSlug}`} className={styles["grid-item-link"]}>
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
            )}

            <nav className={styles["shop-pagination-section"]} aria-label="Pagination">
              <a href="#" className={styles["shop-pagination-nav1"]} aria-label="Previous page">
                <ArrowLeft />
                <span>Previous</span>
              </a>

              <a href="#" className={styles["shop-pagination-number-wrapper-active"]} aria-current="page">
                1
              </a>

              {[2, 3].map((n) => (
                <a key={n} href="#" className={`${styles["shop-pagination-number-wrapper"]} ${styles["pagination-number"]}`}>
                  {n}
                </a>
              ))}

              <span className={`${styles["shop-pagination-number-wrapper"]} ${styles["pagination-number"]}`} aria-hidden="true">
                …
              </span>

              {[10, 16].map((n) => (
                <a key={n} href="#" className={`${styles["shop-pagination-number-wrapper"]} ${styles["pagination-number"]}`}>
                  {n}
                </a>
              ))}

              <a href="#" className={styles["shop-pagination-nav"]} aria-label="Next page">
                <span>Next</span>
                <ArrowRight />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
