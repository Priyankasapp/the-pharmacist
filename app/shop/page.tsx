/* eslint-disable react/jsx-key */
// import ProductCard from "@/components/Shop/ProductCard/ProductCard";
// import ProductSidebar from "@/components/Shop/ProductSidebar/ProductSidebar";
// import { productCardData } from "@/lib/data";
// import styles from "./Shop.module.css";
// const Shop = () => {
//   return (
//     <div className={styles["shop"]}>
//       <h1>Shop</h1>

//       <div className={styles["shop-container"]}>
//         <ProductSidebar />

//         <div>
//             <div> View:9</div>
//             <div>
//                 {productCardData.map((product) => (
//             <ProductCard
//               key={product.id}
//               image={product.image}
//               title={product.title}
//               subtitle={product.subtitle}
//               reviewCount={product.reviewCount}
//               weightText={product.weightText}
//               unitPriceText={product.unitPriceText}
//               originalPrice={product.originalPrice}
//               isPrescriptionOnly={product.isPrescriptionOnly}
//               savingsText={product.savingsText}
//               price={product.price}
//               id={""}
//             />
//           ))}
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default Shop;

import React from "react";
import styles from "./Shop.module.css";
import ProductSidebar from "@/components/Shop/ProductSidebar/ProductSidebar";
import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import { productCardData } from "@/lib/data";
const Shop = () => {
  return (
    <div className={styles["shop"]}>
      <h1>Shop</h1>

      {/* content  */}
      <div className={styles["shop-container"]}>
        <ProductSidebar />
        <div className={styles["shop-content-container"]}>
          {/* search product  */}
          <div className={styles["shop-search-container"]}>
            <div>searcj</div> <div>Producr</div>
          </div>
          {/* product data  */}
          <div className={styles["product-grid-container"]}>
              {productCardData.map((product) => {
                return(
                    <div key={product.id} className={styles["grid-item"]} >
                        <ProductCard
                    
                  key={product.id}
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
                />
                    </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
