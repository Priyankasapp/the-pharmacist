
import React from 'react'
import styles from "./FindPharmacyMap.module.css";
import Image from 'next/image';
import { locationIcon, mapImg } from '@/data/assets';
const FindPharmacyMap = () => { 
  const locations = [
    {id: 1, top:"33%", left:"21%"},
    {id: 2, top:"30%", left:"84%"},
    {id: 3, top:"70%", Left:"72%"},
  ];
  return (
    <div className={styles['pharmacy-map']}>
      <div className={styles['pharmacy-map-con']}>
        <div className={styles['pharmacy-map-img-wrapper']}>
          <Image
        src={mapImg}
        fill
        alt='pharmacy map'
        className={styles['pharmacy-map-img']}/>
        </div>

        {locations.map((loc)=>(
          <div
          key={loc.id}
          className={styles['pharmacy-location-pin-wraper']}
          style={{top:loc.top, left:loc.left}}>
              <Image src={locationIcon}
              alt='pharmacy location'
              
              width={32}
              height={32}
              className={styles['pharmacy-location-img']}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FindPharmacyMap