'use client';

import { useState } from "react";
import styles from "./ProductSidbar.module.css";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { brands, categories } from "@/lib/data";
import FilterCheckbox from "./FilterCheckbox";


const ProductSidebar = () => {
    
    type Sections = 'categories' | 'brands'|'rating' | 'promotion' | 'productType';

    const [isOpen, setIsOpen] = useState<Record<Sections, boolean>>({
      categories: false,
      brands: false,
      rating:false,
      promotion:false,
      productType:false
    });

    const toggleSection = (section: Sections) => {
      setIsOpen((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    };
  return (
    <aside className={styles["product-sidebar"]}>
      {/* fiter / clear all  */}
      <div className={styles["product-sidebar-header"]}>
        <h3 className={styles["product-sidebar-title"]}>Filter</h3>
        <button className={styles["product-sidebar-button"]}>Clear All</button>
      </div>

      {/* Price Range (GBP)  */}
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
            {/* mini price  */}
            <div
              className={
                styles["product-sidebar-price-range-slider-value-input-wrapper"]
              }
            >
              <span>Min Price</span>
              <input
                type="number"
                placeholder="£1"
                className={
                  styles["product-sidebar-price-range-slider-value-input"]
                }
              />
            </div>

            {/* max price  */}
            <div
              className={
                styles["product-sidebar-price-range-slider-value-input-wrapper"]
              }
            >
              <span>Max Price</span>
              <input
                type="number"
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
              className={styles["product-sidebar-price-range-slider"]}
            />
          </div>
        </div>

      </div>
       {/* categories  */}
        <div className={styles["product-sidebar-filter-card"]}>
           <div className={styles["product-sidebar-filter-card-header"]}>
            <span className={styles["product-sidebar-filter-card-heading"]}>Categories</span>
             <button
             type="button"
            onClick={()=>toggleSection('categories')}
             className={styles["product-sidebar-fiter-card-button"]}>
            {
              isOpen.categories ? (<ChevronUp/>) : (<ChevronDown/>)
            }
             </button>
           </div>

           {isOpen.categories && (
             <div className={styles["product-sidebar-checkbox-list"]}>
            {categories.map((category)=>(
                <FilterCheckbox
                key={category.id}
                option={category}/>
            ))}
           </div>
          )}
        </div>

        {/* Brands  */}
         <div className={styles["product-sidebar-filter-card"]}>
           <div className={styles["product-sidebar-filter-card-header"]}>
            <span className={styles["product-sidebar-filter-card-heading"]}>Brands</span>
             <button
             type="button"
            onClick={()=>toggleSection('brands')}
             className={styles["product-sidebar-fiter-card-button"]}>
            {
              isOpen.brands ? (<ChevronUp/>) : (<ChevronDown/>)
            }
             </button>
           </div>

           {isOpen.brands && (
             <div className={styles["product-sidebar-checkbox-list"]}>
            {brands.map((brand)=>(
                <FilterCheckbox
                key={brand.id}
                option={brand}/>
            ))}
            <div className={styles["product-sidebar-checkbox-showmore"]}> 
                <Plus className={styles["product-sidebar-checkbox-icon"]}/> 
                <span>SHOW MORE</span>
            </div>
           </div>
          )}
        </div>

        {/* Rating  */}
         <div className={styles["product-sidebar-filter-card"]}>
           <div className={styles["product-sidebar-filter-card-header"]}>
            <span className={styles["product-sidebar-filter-card-heading"]}>Ratings</span>
             <button
             type="button"
            onClick={()=>toggleSection('rating')}
             className={styles["product-sidebar-fiter-card-button"]}>
            {
              isOpen.rating ? (<ChevronUp/>) : (<ChevronDown/>)
            }
             </button>
           </div>  
        </div>

        {/* Promotion  */}
         <div className={styles["product-sidebar-filter-card"]}>
           <div className={styles["product-sidebar-filter-card-header"]}>
            <span className={styles["product-sidebar-filter-card-heading"]}>Promotion</span>
             <button
             type="button"
            onClick={()=>toggleSection('promotion')}
             className={styles["product-sidebar-fiter-card-button"]}>
            {
              isOpen.promotion ? (<ChevronUp/>) : (<ChevronDown/>)
            }
             </button>
           </div>
        </div>

            {/* product type  */}
            <div className={styles["product-sidebar-filter-card"]}>
           <div className={styles["product-sidebar-filter-card-header"]}>
            <span className={styles["product-sidebar-filter-card-heading"]}>Product type</span>
             <button
             type="button"
            onClick={()=>toggleSection('productType')}
             className={styles["product-sidebar-fiter-card-button"]}>
            {
              isOpen.productType ? (<ChevronUp/>) : (<ChevronDown/>)
            }
             </button>
           </div>
        </div>
        
    </aside>
  );
};

export default ProductSidebar;
