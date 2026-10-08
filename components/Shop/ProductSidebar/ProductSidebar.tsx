'use client';

import { ChangeEvent, useState } from "react";
import styles from "./ProductSidebar.module.css";
import { brands, categories } from "@/lib/data";
import FilterCheckbox from "./FilterCheckbox";
import { ChevronDown, ChevronUp, PlusIcon } from "@/components/Icon/Icon";
import {FilterState} from "@/lib/types"


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

  const filterSections = [
    {
      key: "categories" as const,
      title: "Categories",
      options: categories,
      checked: (optionId: string) => mergedFilters.categories.includes(optionId),
      onChange: (optionId: string) => handleToggleCollectionItem("categories", optionId),
    },
    {
      key: "brands" as const,
      title: "Brands",
      options: brands,
      checked: (optionId: string) => mergedFilters.brands.includes(optionId),
      onChange: (optionId: string) => handleToggleCollectionItem("brands", optionId),
      showMore: true,
    },
  ];

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

      {filterSections.map(({ key, title, options, checked, onChange, showMore }) => (
        <div key={key} className={styles["product-sidebar-filter-card"]}>
          <div className={styles["product-sidebar-filter-card-header"]}>
            <span className={styles["product-sidebar-filter-card-heading"]}>
              {title}
            </span>
            <button
              type="button"
              onClick={() => toggleSection(key)}
              className={styles["product-sidebar-filter-card-button"]}
              aria-label={`Toggle ${title} filter section`}
            >
              {isOpen[key] ? <ChevronUp className="" /> : <ChevronDown className="" />}
            </button>
          </div>

          {isOpen[key] && (
            <div className={styles["product-sidebar-checkbox-list"]}>
              {options.map((option) => (
                <FilterCheckbox
                  key={option.id}
                  option={option}
                  checked={checked(option.id)}
                  onChange={() => onChange(option.id)}
                />
              ))}

              {showMore && (
                <div className={styles["product-sidebar-checkbox-showmore"]}>
                  <PlusIcon />
                  <span>SHOW MORE</span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default ProductSidebar;
