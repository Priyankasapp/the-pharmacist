'use client';
import {   NHS } from "@/data/assets";
import styles from "./ExportCard.module.css";
import Image from "next/image";
import { ExportCardInfo } from "@/lib/types";

const ExportCard = ({isnhs, title, desc, id, img}:ExportCardInfo) => {
  return (
    <div
    className={styles['export-card']} id={id}>
        <div className={styles['export-card-img-wrapper']}>
            <Image
            src={img}
            alt={title}
            className={styles['export-card-img']}/>
        </div>

        <div className={styles['export-card-info-con']}>
            <div className={styles['export-card-info-wrapper']}>
               <div className={styles['export-card-info-header']}>
               
                   {isnhs ? ( <Image
                    src={NHS}
                    alt="NHS logo"
                    className={styles['export-card-icon-img']}/>):" "}
             
                <span>{title}</span> </div>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default ExportCard;