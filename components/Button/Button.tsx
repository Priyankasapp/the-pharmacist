/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  showArrow?: boolean;
  className?:string;
}

const Button = ({ children,className = "", showArrow = false }: ButtonProps) => {
  return (
    // className={styles.button}
    <button  className={`${styles.button} ${className}`}>
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