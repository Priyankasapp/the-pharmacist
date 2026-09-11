/* eslint-disable react/jsx-key */
'use client'
import { ChevronLeft, ChevronRight, Folder } from "lucide-react";
import styles from "./ArticleSection.module.css";
import Image from "next/image";
import { informationData } from "@/lib/data";

const ArticleSection = () => {
    
  return (
    <section className={styles['article-section']}>
        <div className={styles['article-container']}>
            <h2 className={styles['article-header']}>
                Latest from <span>The Pharmacist</span>
            </h2>

            <div className={styles['article-info-con']}>
                <div className={styles['article-icon-wrapper']}>
                    <ChevronLeft/>
                </div>
                <div className={styles['article-info-wrapper']}>
                    {informationData.map((info)=>(
                             <div className={styles['article-info-card']}
                             id={info.id}>
                        {/* img section  */}
                        <div className={styles['article-img-wrapper']}>
                            <Image
                            src={info.img}
                            alt={info.desc}
                            className={styles['article-img']}
                            id={info.id}
                            width={500}
                            height={360}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* description  */}
                        <div className={styles['article-desc-container']}>
                            <div className={styles['article-desc-wrapper']}>
                                <div className={styles['info-title-wrapper']}>
                                    <Folder/>
                                    <span>Lifestyle & Wellness</span>
                                </div>
                                <h3>{info.desc}</h3>
                            </div>
                            <div className={styles['article-link']}><a href="#">Read More</a></div>
                        </div>
                    </div>
                    ))}
                   
                </div>
                <div className={styles['article-icon-wrapper']}>
                    <ChevronRight/>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default ArticleSection