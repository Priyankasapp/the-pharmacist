// import styles from "./FindPharmacyMap.module.css";
// import Image from "next/image";
// import { locationIcon, mapImg } from "@/data/assets";

// const FindPharmacyMap = () => {
 
//   const locations = [
//     { id: 1, top: "33%", left: "21%" },  
//     { id: 2, top: "15%", left: "84%" },  
//     { id: 3, top: "70%", left: "72%" }, 
//   ];

//   return (
//     <div className={styles["find-pharmacy-map-container"]}>
//       <div className={styles["find-pharmacy-map-wrapper"]}>
//         {/* Map Background */}
//         <Image
//           src={mapImg} 
//           alt="London Pharmacy Map"
//           useMap="#workmap" 
//           className={styles["find-pharmacy-map-image"]} 
//         />

//         {/* Dynamic Location Icons */}
//         {locations.map((loc) => (
//           <div
//             key={loc.id}
//             className={styles["find-pharmacy-location-pin-wrapper"]}
//             style={{ top: loc.top, left: loc.left }}
//           >
//            <map name="workmap">
//              <Image
//               src={locationIcon}
//               alt="Pharmacy Location"
//               className={styles["find-pharmacy-location-icon"]}
//             />
//            </map>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FindPharmacyMap;


import React from 'react'

const FindPharmacyMap = () => {
  return (
    <div>
      <div id="map" style={{height:"400px", width:"100%;"}}></div>
    </div>
  )
}

export default FindPharmacyMap