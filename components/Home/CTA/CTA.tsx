'use client'
import { ctaImage, pharmalistLogo } from "@/data/assets";
import styles from "./CTA.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const CTA = () => {
  return (
    <section className={styles['cta-container']}>
        <div className="container">
            {/* image background  */}
        <div className={styles['cta-bg-img-wrapper']}>
            <Image
            src={pharmalistLogo}
            alt="pharmalist Logo"
            className={styles['cta-img']}
            fill
            sizes="(max-width:768px) 100vw, 954px"/>
        </div>

        <div className={styles["cta-content-wrapper"]}>
            {/* left section  */}
            <div className={styles['cta-left-section']}>
                <h2>From prescriptions to expert advice, we make healthcare simple and personal.</h2>
                <div>
                    <Button showArrow>Explore Our Services</Button>
                </div>
            </div>
            {/* right section  */}
            <div className={styles['cta-img-wrapper']}>
                <Image
                src={ctaImage}
                alt="cta image"
                className={styles['cta-img']}
                fill
                priority    
                sizes="(max-width:768px) 100vw , 634px"/>

            </div>
        </div>
        </div>
        
    </section>
  )
}

export default CTA