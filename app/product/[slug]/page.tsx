
// "use client";


// import { useState } from "react";
// import Image from "next/image";
// import {ChevronLeft,ChevronRight,CircleCheck,Share2,} from "lucide-react";

// import styles from "./Product.module.css";

// import { productData, tabs } from "@/lib/data";
// import {healthBroken,
// productImg2,
//   stars,
//   VectorFour,
//   VectorThree,
// } from "@/data/assets";
// import Button from "@/components/Button/Button";





// const page = () => {
//     const [activeTab, setActiveTab] = useState("Description");
//   const [selectedStrength, setSelectedStrength] = useState(
//     productData.strengths[1] ?? productData.strengths[0]
//   );
//   const [selectedPack, setSelectedPack] = useState(
//     productData.packSizes[1]?.id ?? productData.packSizes[0]?.id
//   );
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   const selectedPackData =
//     productData.packSizes.find((pack) => pack.id === selectedPack) ??
//     productData.packSizes[0];

//    const handlePrevImg = () => {
//     setActiveImageIndex((prevIndex) =>
//       prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextImage = () => {
//     setActiveImageIndex((prevIndex) =>
//       prevIndex === productData.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   return (
//     <div className={styles["product-page"]}>
//       <div className={styles["product-gallary-container"]}>
//         {/* left section  */}
//         <div className={styles["product-gallary-left-section"]}>
//           {/* main image  */}
//           <div className={styles["product-gallary-main-image-wrapper"]}>
//             <div className={styles["prduct-gallary-main-image-headding"]}>
//               <h2>{productData.name}</h2>
//               <button type="button" aria-label="share product">
//                 <Share2 />
//               </button>
//             </div>

//             <div className={styles["product-main-image-container"]}>
//               <button
//               type="button" 
//               onClick={handlePrevImg} 
//               aria-label="Previous image">
//                 <ChevronLeft />
//               </button>

//               <div className={styles["product-main-image-wrapper"]}>
                
//                 <Image 
//                 src={productData.images[activeImageIndex]} 
//                 alt={`${productData.name} main image ${activeImageIndex + 1}`}
//                 priority
//                  />
//               </div>

//               <button
//               type="button" 
//               onClick={handleNextImage} 
//               aria-label="Next image">
//               </button>
//                 <ChevronRight />
//             </div>
//           </div>
//           {/* thumbnails  */}

//           <div className={styles["thumbnail-row"]}>
            
//             {
//               productData.images.map((img, index)=>(
//                 <button
//                 key={index}
//                 onClick={()=>setActiveImageIndex(index)}
//                  className={`${styles["thumbnail-image-item"]} ${
//                   activeImageIndex === index ? styles["active-thumbnail"] : ""
//                 }`}
//                 aria-label={`View thumbnail ${index + 1}`}>
//                   <Image
//                   src={img}
//                   alt={`${productData.name} thumbnail ${index + 1}`}/>

//                 </button>
//               ))
//             }
//           </div>
//         </div>
//         {/* right section  */}
//         <div className={styles["product-gallary-right-section"]}>
//           <div className={styles["product-header-info"]}>
//             <div className={styles["stock-and-title"]}>
//              {productData.inStock && (
//                <span className={styles["in-stock-badge"]}>
//                 <CircleCheck  size={16}/>
//                 In Stock
//               </span>
//              )}
              
//                 <h1>{productData.title}</h1>
//                 <div className={styles["reviews-rating"]}>
                  
//                   <Image src={stars} alt="Product rating" /> <span>({productData.reviews} Riviews)</span> 
//                 </div>

//                 <span className={styles["tablet-count-label"]}>{productData.tabletCount}</span>
//               </div>
//             </div>

//             <div>
//               <h2>{productData.price}</h2>
//               <span>{productData.pricePerTablet}</span>
//             </div>
//           </div>

//           {/* second  */}
//           <div>
//             <div>
//               <b>Strength</b>
//               <div>
//               {productData.strengths.map((strength)=>(
//                 <button
//                 key={strength}
//                 type="button"
//                 onClick={()=>setSelectedStrenght(strength)}
//                 className={
//                   selectedStrength === strength ? styles.Active:""
//                 }>{strength}</button>
//               ))}
//               </div>
//             </div>

//             {/* second  */}
//             <div className={styles['pack-size-container']}>
//               <b>Pack Size</b>
//               <div className={styles['pack-options-grid']}>
//                 {productData.packSizes.map((pack)=>(
//                   <button 
//                   key={pack.id}
//                   type="button"
//                   onClick={()=>setSelectedPack(pack.id)}
//                   className={`${styles["pack-card"]} ${
//                       selectedPack === pack.id ? styles["pack-card-active"] : ""
//                     }`} >

//                       <div className={styles["pack-card-inner"]}>
//                         <h3>{pack.label} - {pack.price}</h3>
//                         <div className={styles["pack-savings-info"]}>
//                           <span>
//                             {pack.saving} <br />
//                             ({pack.pricePerTablet})
//                           </span>
//                         </div>
//                       </div>
//                     </button>
//                 ))}
//                 <div>
//                                   </div>

//                 <Button>Add to Bag</Button>

//                 <div>
//                   <div>
//                     <h3>Delivery</h3>
//                     <p>Free standard shipping on orders over $35 before tax, plus free returns.</p>
//                   </div>
//                   <div>
//                     <table>
//                       <thead>
//                          <tr>
//                         <th>TYPE</th>
//                         <th>HOW LONG</th>
//                         <th>HOW MUCH</th>
//                       </tr>
//                       </thead>
                     
//                       <tbody>
//                         {productData.delivery.options.map((option)=>(
//                           <tr>
//                             <td>{option.type}</td>
//                             <td>{option.duration}</td>
//                             <td>{option.price}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
      
//       {/* description  */}
//       <div className={styles["product-details"]}>
//         {/* background image  */}
//         <div className={styles["product-container-bg-wrapper"]}>
//           <Image
//             src={VectorFour}
//             alt="VectorIcon"
//             className={styles["product-container-bg-vector"]}
//           />

//           <Image
//             src={VectorThree}
//             alt="VectorIcon"
//             className={styles["product-container-bg-vector"]}
//           />
//         </div>

//         <div className={styles["product-details-container"]}>
//           {/* navigation  */}
//           <nav className={styles["prodcut-details-tab-container"]}>
//             {/* details  */}
//             <div className={styles["product-details-tab-wrapper"]}>
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   className={`${styles["product-details-tab-button"]} ${
//                     activeTab === tab ? styles["active"] : ""
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </nav>

//           {/* main details  */}
//           <main className={styles["product-content"]}>
//             {activeTab === "Description" && (
//               <>
//                 {/* first section  */}
//                 <section className={styles["product-content-section"]}>
//                   <h2 className={styles["product-content-heading"]}>
//                     What is Pandol?
//                   </h2>
//                   <div className={styles["product-content-text-group"]}>
//                     <div className={styles["product-content-bullet-paragraph"]}>
//                       <Image
//                         src={healthBroken}
//                         alt="point"
//                         className={styles["product-content-bullet"]}
//                       />
//                       <p className={styles["product-content-paragraph"]}>
//                         Panadol is a pain relief and fever-reducing medicine
//                         that contains paracetamol (acetaminophen). It &apos;s
//                         avalable in several forms:
//                       </p>
//                     </div>
//                     <ul className={styles["product-content-list"]}>
//                       <li>Standard Tablets</li>
//                       <li>Caplets</li>
//                       <li>Soluble Tablets</li>
//                       <li>Quick-Dissolve Tablets</li>
//                       <li>Children&apos;s Suspension</li>
//                     </ul>

//                     <div className={styles["product-content-bullet-paragraph"]}>
//                       <Image
//                         src={healthBroken}
//                         alt="point"
//                         className={styles["product-content-bullet"]}
//                       />
//                       <p className={styles["product-content-paragraph"]}>
//                         All of these contain the same active ingredient,
//                         paracetamol, which works to relive pain and reduce
//                         fever.
//                       </p>
//                     </div>
//                     <div className={styles["product-content-bullet-paragraph"]}>
//                       <Image
//                         src={healthBroken}
//                         className={styles["product-content-bullet"]}
//                         alt="point"
//                       />
//                       <p className={styles["product-content-paragraph"]}>
//                         Pandol is commonly used for headaches, toothaches,
//                         musicle pain, back pain, back pain, period pain, and the
//                         aches and fever associated with colds or flu.
//                       </p>
//                     </div>
//                   </div>
//                 </section>
//                 <section className={styles["product-content-section"]}>
//                   <h2 className={styles["product-content-heading"]}>
//                     How does Panadol work?
//                   </h2>
//                   <div className={styles["product-content-text-group"]}>
//                     <div className={styles["product-content-bullet-paragraph"]}>
//                       <Image
//                         src={healthBroken}
//                         className={styles["product-content-bullet"]}
//                         alt="point"
//                       />
//                       <p className={styles["product-content-paragraph"]}>
//                         Paracetamol, the active ingredient in Pandol, works in
//                         the body to relieve pain and reduce fever by:
//                       </p>
//                     </div>
//                     <ol className={styles["product-content-order-list"]}>
//                       <li>
//                         Reducting pain signals - its blocks certain chemicals in
//                         the brain that send pain messages, helping to reduce
//                         discomfort.
//                       </li>
//                       <li>
//                         Lowering fever - It acts on the part of the brain that
//                         regulates body temperature, helping bring a hign
//                         temperature down.
//                       </li>
//                       <li>
//                         Gentle on the stomach - Unlike some painkillers, Panadol
//                         doesn&apos;t usually irritate the stomach, making it
//                         suitable for most people.
//                       </li>
//                     </ol>
//                   </div>
//                 </section>

//                 <section className={styles["product-content-section"]}>
//                   <h2 className={styles["product-content-heading"]}>
//                     What is the recommended does of Panadol?
//                   </h2>
//                   <div className={styles["product-content-text-group"]}>
//                     <div className={styles["product-content-bullet-paragraph"]}>
//                       <Image
//                         src={healthBroken}
//                         alt="bullet icon"
//                         className={styles["product-content-bullet"]}
//                       />
//                       <p className={styles["product-content-paragraph"]}>
//                         The usual adult dose is 500mg–1000mg every 4–6 hours as
//                         needed, with a maximum of 4000mg in 24 hours. For
//                         children, dosing depends on weight and age, so check the
//                         packaging or ask your clinician. Always follow the
//                         instructions and do not exceed the recommended dose.
//                       </p>
//                     </div>
//                   </div>
//                 </section>
//               </>
//             )}
//           </main>
//         </div>
//       </div>
//       {/* another products  */}
//       <div>
//         sds 
//       </div>
//     </div>
//   );
// };

// export default page;


import ProductDetails from '@/components/product/ProductDetails/ProductDetails'
import React from 'react'

const page = () => {
  return (
    <div>
      product detail
      <ProductDetails/>
    </div>
  )
}

export default page
