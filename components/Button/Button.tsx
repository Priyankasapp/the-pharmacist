
'use client';

import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

type   ButtonVariant = "primary"|"Outline";
interface ButtonProps {
  children: React.ReactNode;
  showArrow?: boolean;
  className?:string;
  variant?:ButtonVariant;
}

const Button = ({ children,className = "", showArrow = false, variant="primary" }: ButtonProps) => {
  return (
    
    <button  className={`${styles.button} ${styles[variant]} ${className}`}>
      {children}

      {showArrow && (
        <span className={styles["button-arrow-wrapper"]}>
          <ArrowRight className={styles["button-arrow"]} />
        </span>
      )}  
    </button>
  );
};

export default Button;


