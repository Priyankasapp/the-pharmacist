'use client';

import { useRef, useState } from "react";
import styles from "./FAQ.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqsData } from "@/lib/data";


const FAQ = () => {
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles['FAQ']}>
      <h2>Got Questions? <br />We&apos;ve  <span>Got Answers</span></h2>
        {/* right  */}
      <div className={styles['FAQ-right-container']}>
        {faqsData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              ref={(el) => { faqRefs.current[index] = el; }}
              className={`${styles['faq-item']} ${isOpen ? styles['open'] : ''}`}
            >
            
              <div 
                className={styles['faq-header']} 
                onClick={() => toggleFAQ(index)}
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <h3>{faq.question}</h3>

                
                <span className={styles['faq-icon']}>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>
              {isOpen && (
                <div className={styles['faq-answer']}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
