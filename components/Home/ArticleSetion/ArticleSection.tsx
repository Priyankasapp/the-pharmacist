/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { ChevronLeft, ChevronRight, Folder } from "lucide-react";
import styles from "./ArticleSection.module.css";
import Image from "next/image";
import { informationData } from "@/lib/data";
import { useEffect, useState } from "react";

const getArticleCardPerPage = () => {
  if (typeof window === "undefined") return 2;
  if (window.innerWidth <= 800) return 1;
  return 2;
};

const ArticleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articlePerPage, setArticlePerPage] = useState(2);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    setArticlePerPage(getArticleCardPerPage());

    const handleResize = () => setArticlePerPage(getArticleCardPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleArticles = informationData.slice(
    currentIndex,
    currentIndex + articlePerPage,
  );

  const handleNext = () => {
    if (currentIndex + articlePerPage < informationData.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!isMounted) return null;

  return (
    <section className={styles["article-section"]}>
      <div className={styles["article-container"]}>
        <h2 className={styles["article-header"]}>
          Latest from <span>The Pharmacist</span>
        </h2>

        <div className={styles["article-info-con"]}>
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={styles["article-icon-wrapper"]}
            aria-label="Previous articles"
          >
            <ChevronLeft />
          </button>

          <div className={styles["article-info-wrapper"]}>
            {visibleArticles.map((info, index) => (
              <div
                className={styles["article-info-card"]}
                key={info.id || `art-${index}`}
                id={String(info.id)}
              >
                {/* Image Section */}
                <div className={styles["article-img-wrapper"]}>
                  <Image
                    src={info.img}
                    alt={info.desc || "Article entry image"}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className={styles["article-img"]}
                  />
                </div>

                <div className={styles["article-desc-container"]}>
                  <div className={styles["article-desc-wrapper"]}>
                    <div className={styles["info-title-wrapper"]}>
                      <Folder size={16} />
                      <span>Lifestyle & Wellness</span>
                    </div>
                    <h3>{info.desc}</h3>
                  </div>
                  <div className={styles["article-link"]}>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex + articlePerPage >= informationData.length}
            className={styles["article-icon-wrapper"]}
            aria-label="Next articles"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
