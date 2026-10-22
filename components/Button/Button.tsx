import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "outline";
type ButtonType = "submit" | "button" ;

interface ButtonProps {
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
}

const Button = ({ children, className = "", showArrow = false, variant = "primary", type = "submit", disabled = false }: ButtonProps) => {
  return (
    
    <button className={`${styles.button} ${styles[variant]} ${className}`} type={type} disabled={disabled}>
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


