import  { ComponentType } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from "./PharmalistCard.module.css";

export interface PharmalistCardProps {
  title: string;
  description: string;
  imgSrc: string | StaticImageData | ComponentType; 
}

const Pharmalistcard = ({ title, description, imgSrc: ImageComponent }: PharmalistCardProps) => {
  return (
    <div className={styles['pharmalist-card']}>
       <div className={styles['pharmalist-card-container']}>
         
         <div className={styles['pharmalist-card-image-section']}>
           {typeof ImageComponent === 'function' ? (
             <ImageComponent />
           ) : (
             <Image src={ImageComponent} alt={title} className={styles['pharmalist-card-img']} />
           )}
         </div>

         <h3 className={styles['pharmalist-card-heading']}>{title}</h3>
         <p className={styles['pharmalist-card-description']}>{description}</p>
       </div>
    </div>
  );
};

export default Pharmalistcard;