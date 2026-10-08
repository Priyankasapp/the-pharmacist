'use client';

import { ChangeEvent, useState } from "react";
import styles from "./ProductSidbar.module.css";
import { brands, categories } from "@/lib/data";
import FilterCheckbox from "./FilterCheckbox";
import { ChevronDown, ChevronUp, PlusIcon } from "@/components/Icon/Icon";

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  categories: string[];
  brands: string[];
  ratings: number[];
  promotions: string[];
  productTypes: string[];
}

const defaultFilters: FilterState = {
  minPrice: 0,
  maxPrice: 100,
  categories: [],
  brands: [],
  ratings: [],
  promotions: [],
  productTypes: [],
};

interface ProductSidebarProps {
  filters?: Partial<FilterState>;
  onFilterChange?: (updater: (prev: FilterState) => FilterState) => void;
  onClearAll?: () => void;
}

type Sections = "categories" | "brands";

const ProductSidebar = ({
  filters = {},
  onFilterChange,
  onClearAll,
}: ProductSidebarProps = {}) => {
  const [localFilters, setLocalFilters] = useState<FilterState>({
    ...defaultFilters,
    ...filters,
  });

  const mergedFilters: FilterState =
    filters && Object.keys(filters).length > 0
      ? { ...defaultFilters, ...filters }
      : localFilters;

  const [isOpen, setIsOpen] = useState<Record<Sections, boolean>>({
    categories: true,
    brands: true,
  });

  const toggleSection = (section: Sections) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateFilterState = (updater: (prev: FilterState) => FilterState) => {
    const nextState = updater({ ...defaultFilters, ...localFilters });
    setLocalFilters(nextState);
    onFilterChange?.(updater);
  };

  const handlePriceChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "minPrice" | "maxPrice"
  ) => {
    const value = Math.max(0, Number.parseInt(e.target.value) || 0);
    updateFilterState((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleCollectionItem = (
    field: keyof Pick<FilterState, "categories" | "brands">,
    identity: string
  ) => {
    updateFilterState((prev) => {
      const currentList = prev[field] ?? [];
      const nextList = currentList.includes(identity)
        ? currentList.filter((item) => item !== identity)
        : [...currentList, identity];

      return { ...prev, [field]: nextList };
    });
  };

  const resetFilters = () => {
    setLocalFilters(defaultFilters);
    onClearAll?.();
  };

  return (
    <aside className={styles["product-sidebar"]}>
      <div className={styles["product-sidebar-header"]}>
        <h3 className={styles["product-sidebar-title"]}>Filter</h3>
        <button
          type="button"
          onClick={resetFilters}
          className={styles["product-sidebar-button"]}
        >
          Clear All
        </button>
      </div>

      <div className={styles["product-sidebar-price-range-container"]}>
        <div className={styles["product-sidebar-price-range-title-wrapper"]}>
          <span className={styles["product-sidebar-price-range-title"]}>
            Price Range (GBP)
          </span>
        </div>

        <div className={styles["product-sidebar-price-range-slider-wrapper"]}>
          <div
            className={
              styles["product-sidebar-price-range-slider-value-wrapper"]
            }
          >
            <div
              className={
                styles["product-sidebar-price-range-slider-value-input-wrapper"]
              }
            >
              <span>Min Price</span>
              <input
                type="number"
                value={mergedFilters.minPrice}
                onChange={(e) => handlePriceChange(e, "minPrice")}
                placeholder="£1"
                className={
                  styles["product-sidebar-price-range-slider-value-input"]
                }
              />
            </div>

            <div
              className={
                styles["product-sidebar-price-range-slider-value-input-wrapper"]
              }
            >
              <span>Max Price</span>
              <input
                type="number"
                value={mergedFilters.maxPrice}
                onChange={(e) => handlePriceChange(e, "maxPrice")}
                placeholder="£100"
                className={
                  styles["product-sidebar-price-range-slider-value-input"]
                }
              />
            </div>
          </div>

          <div className={styles["product-sidebar-price-range-slider-wrapper"]}>
            <input
              type="range"
              min="0"
              max="100"
              value={mergedFilters.maxPrice}
              onChange={(e) => handlePriceChange(e, "maxPrice")}
              className={styles["product-sidebar-price-range-slider"]}
            />
          </div>
        </div>
      </div>

      <div className={styles["product-sidebar-filter-card"]}>
        <div className={styles["product-sidebar-filter-card-header"]}>
          <span className={styles["product-sidebar-filter-card-heading"]}>
            Categories
          </span>
          <button
            type="button"
            onClick={() => toggleSection("categories")}
            className={styles["product-sidebar-fiter-card-button"]}
          >
            {isOpen.categories ? <ChevronUp className="" /> : <ChevronDown className="" />}
          </button>
        </div>

        {isOpen.categories && (
          <div className={styles["product-sidebar-checkbox-list"]}>
            {categories.map((category) => (
              <FilterCheckbox
                key={category.id}
                option={category}
                checked={mergedFilters.categories.includes(category.id)}
                onChange={() => handleToggleCollectionItem("categories", category.id)}
              />
            ))}
          </div>
        )}
      </div>

      <div className={styles["product-sidebar-filter-card"]}>
        <div className={styles["product-sidebar-filter-card-header"]}>
          <span className={styles["product-sidebar-filter-card-heading"]}>
            Brands
          </span>
          <button
            type="button"
            onClick={() => toggleSection("brands")}
            className={styles["product-sidebar-fiter-card-button"]}
          >
            {isOpen.brands ? <ChevronUp className="" /> : <ChevronDown className="" />}
          </button>
        </div>

        {isOpen.brands && (
          <div className={styles["product-sidebar-checkbox-list"]}>
            {brands.map((brand) => (
              <FilterCheckbox
                key={brand.id}
                option={brand}
                checked={mergedFilters.brands.includes(brand.id)}
                onChange={() => handleToggleCollectionItem("brands", brand.id)}
              />
            ))}
            <div className={styles["product-sidebar-checkbox-showmore"]}>
              <PlusIcon />
              <span>SHOW MORE</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ProductSidebar;
