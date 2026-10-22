"use client";
import styles from "./ArticleSection.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { ChevronLeft, ChevronRight, Folder } from "@/components/Icon/Icon";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ARTICLES_QUERY } from "@/sanity/lib/queries";
import { ArticleDataProps } from "@/lib/types";

type CustomArrowProps = {
  onClick?: () => void;
};

function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["next-arrow"]}`}
      onClick={onClick}
      aria-label="Next article"
    >
      <ChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`${styles["slider-arrow"]} ${styles["prev-arrow"]}`}
      onClick={onClick}
      aria-label="Previous article"
    >
      <ChevronLeft />
    </button>
  );
}

const ArticleSection = () => {
  const [articles, setArticles] = useState<ArticleDataProps[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    client.fetch<ArticleDataProps[]>(ARTICLES_QUERY).then((data) => {
      if (!cancelled) setArticles(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

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
          <div className={styles["article-info-wrapper"]}>
            {/* Guard clause for loading/empty states */}
            {articles === null ? (
              <p>Loading articles...</p>
            ) : articles.length === 0 ? (
              <p>No articles available.</p>
            ) : (
              <Slider {...settings}>
                {articles.map((info, index) => {
                  const cardId = info._id ?? info.id ?? `art-${index}`;
                  return (
                    <div
                      className={styles["article-info-card"]}
                      key={cardId}
                      id={String(cardId)}
                    >
                      <div className={styles["article-img-wrapper"]}>
                        <Image
                          src={info.img}
                          alt={info.title || "Article entry image"}
                          fill
                          sizes="(max-width: 800px) 100vw, 500px"
                          className={styles["article-img"]}
                        />
                      </div>

                      <div className={styles["article-desc-container"]}>
                        <div className={styles["article-desc-wrapper"]}>
                          <div className={styles["info-title-wrapper"]}>
                            <Folder />
                            {/* Dynamic Category */}
                            <span>{info.category || "Lifestyle & Wellness"}</span>
                          </div>
                          {/* Dynamic Title */}
                          <h3>{info.title}</h3>
                         
                        </div>
                        <div className={styles["article-link"]}>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            )}
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