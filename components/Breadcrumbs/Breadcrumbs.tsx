'use client';
import { usePathname } from "next/navigation";
import Link from "next/link"; 
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const pathname = usePathname();
  

  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((item) => item);

  return (
    <nav aria-label="breadcrumb" className={styles['breadcrumbs']}>
      <ol className={styles['breadcrumbs-list']}>
        <li className={styles['breadcrumbs-item']}>
        
          <Link href="/" className={styles['breadcrumbs-link']}>
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const label = segment
            .replace(/-/g, " ")  
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={href} className={styles['breadcrumbs-item']}>
             
              <span className={styles['breadcrumbs-separator']}>&gt;</span>
              {isLast ? (
                <span className={styles['breadcrumbs-activepage']} aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className={styles['breadcrumbs-link']}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
