import styles from "./Timeline.module.css";
import Image, { StaticImageData } from "next/image";

interface TimeLineCardProps {
    year:string;
    title:string;
    description: string;
   imgSrc: string | StaticImageData;
}
const TimeLineCard = ({year,title,description,imgSrc}:TimeLineCardProps) => {
  return (
    <div className={styles['timeline-card-module']}>
        <div className={styles['timeline-card-left-section']}>
            <Image 
              src={imgSrc}
              alt={title}
              fill 
              className={styles['timeline-card-left-img']}
            />
        </div>
        
        {/* Right section */}
        <div className={styles['timeline-card-right-section']}>
            {/* Header row */}
            <div className={styles['timeline-card-right-header-row']}>
                <span className={styles['timeline-card-year']}>{year}</span>
            </div>
            <h3 className={styles['timeline-card-right-heading']}>{title}</h3>
            <p className={styles['timeline-card-right-paragraph']}>{description}</p>
        </div>
    </div>
  )
}

export default TimeLineCard;
