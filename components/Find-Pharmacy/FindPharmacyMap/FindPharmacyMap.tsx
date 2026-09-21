import React from 'react';
import styles from "./FindPharmacyMap.module.css";
import Image from 'next/image';
import { locationIcon, mapImg } from '@/data/assets';

const FindPharmacyMap = () => { 
  const locations = [
    { id: 1, top: "19%", left: "78%" },
    { id: 2, top: "34%", left: "27%" }, 
    { id: 3, top: "72%", left: "68%" }, 
  ];

  return (
    <div className={styles['pharmacy-map']}>
      <div className={styles['pharmacy-map-con']}>
        
        
        <div className={styles['pharmacy-map-img-wrapper']}>
          <Image
            src={mapImg}
            fill
            alt='pharmacy map'
            className={styles['pharmacy-map-img']}
            priority />
        </div>

       
        {locations.map((loc) => (
          <div
            key={loc.id}
            className={styles['pharmacy-location-pin-wrapper']}
            style={{ top: loc.top, left: loc.left }}
          >
            <Image 
              src={locationIcon}
              alt='pharmacy location'
              width={42} 
              height={42}
              className={styles['pharmacy-location-img']}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindPharmacyMap;
