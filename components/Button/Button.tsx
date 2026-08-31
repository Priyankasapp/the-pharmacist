
'use client';

import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  showArrow?: boolean;
}

const Button = ({ children, showArrow = false }: ButtonProps) => {
  return (
    <button className={styles.button}>
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