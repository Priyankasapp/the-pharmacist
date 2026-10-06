
"use client";
import styles from "./ArticleSection.module.css";
import Image from "next/image";
import { informationData } from "@/lib/data";
import Button from "@/components/Button/Button";
import { ChevronLeft, ChevronRight, Folder } from "@/components/Icon/Icon";
import Slider from "react-slick";


type CustomArrowProps = {
  onClick?: () => void;
  
};


function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["next-arrow"]}`}
      onClick={onClick}
      aria-label="Next specialist"
    >
     <ChevronRight/>
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
      onClick={onClick}
      aria-label="Previous specialist"
    >
     
        <ChevronLeft/> 
    </button>
  );
}



const ArticleSection = () => {

   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
    
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <section className={`container ${styles["article-section"]}`}>
      <div className={styles["article-container"]}>
        <h2 className={styles["article-header"]}>
          Latest from <span>The Pharmacist</span>
        </h2>

        <div className={styles["article-info-con"]}>
         

          <div
            className={styles["article-info-wrapper"]}
          >
           <Slider {...settings}>
             {informationData.map((info, index) => (
              <div
                className={styles["article-info-card"]}
                key={info.id || `art-${index}`}
                id={String(info.id)}
              >
                <div className={styles["article-img-wrapper"]}>
                  <Image
                    src={info.img}
                    alt={info.desc || "Article entry image"}
                    fill
                    sizes="(max-width: 800px) 100vw, 500px"
                    className={styles["article-img"]}
                  />
                </div>

                <div className={styles["article-desc-container"]}>
                  <div className={styles["article-desc-wrapper"]}>
                    <div className={styles["info-title-wrapper"]}>
                      <Folder />
                      <span>Lifestyle &amp; Wellness</span>
                    </div>
                    <h3>{info.desc}</h3>
                  </div>
                  <div className={styles["article-link"]}>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            ))}
           </Slider>
          </div>

          
        </div>
      </div>

      <div className={styles["article-button"]}>
        <Button showArrow className={styles["article-btn"]}>
          View All Blogs
        </Button>
      </div>
    </section>
  );
};

export default ArticleSection;
