'use client';

import { useRef, useState } from "react";
import styles from "./FAQ.module.css";
import { faqsData } from "@/lib/data";
import { ChevronDown, ChevronUp } from "@/components/Icon/Icon";

const FAQ = () => {
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles['FAQ']}>
      <h2>Got Questions? <br />We&apos;ve <span>Got Answers</span></h2>

      <div className={styles['FAQ-right-container']}>
        {faqsData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              ref={(el) => { faqRefs.current[index] = el; }}
              className={`${styles['faq-item']} ${isOpen ? styles['open'] : ''}`}
            >
              <h3 className={styles['faq-question-heading']}>
                <button
                  type="button"
                 
                  className={`${styles['faq-header']} ${isOpen ? styles['active'] : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className={styles['faq-icon']} aria-hidden="true">
                    {isOpen ? <ChevronUp className={styles['chevron-icon']} /> : <ChevronDown className={styles['chevron-icon']} />}
                  </span>
                </button>
              </h3>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={!isOpen}
                className={styles['faq-answer']}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
