"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";

import { ServicesMenu } from "../ServicesMenu/ServicesMenu";
import Button from "../Button/Button";
import PharmacyCard from "./PharmacyCard/PharmacyCard";
import SearchBar from "../Find-Pharmacy/SearchBar/SearchBar";

type ActiveMenuType = "services" | "search" | "product" | null;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = (menuName: ActiveMenuType) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header ref={navRef} className={styles["navbar"]}>
      <div className={`${styles["nav-container"]} container`}>
        {/* Logo */}
        <Link
          href="/"
          className={styles["  nav-logo"]}
          onClick={closeMobileMenu}
        >
          <Image
            src="/LOGO.svg"
            alt="The Pharmacist logo"
            width={180}
            height={40}
            style={{height:'auto'}}
            className={styles["nav-logo-icon"]}
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className={styles["nav-mobile-menu"]}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={styles["nav-menu"]} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${styles["nav-wrapper"]} ${isMobileMenuOpen ? styles["nav-wrapper-open"] : ""}`}
        >
          <nav className={styles["nav-links"]}>
            {/* Services */}
            <div
              className={styles["nav-hover-wrapper"]}
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href="#"
                className={styles["nav-link"]}
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("services");
                }}
              >
                Our Services{" "}
                {activeMenu === "services" ? <ChevronUp /> : <ChevronDown />}
              </Link>
            </div>

            <Link
              href="/product"
              className={styles["nav-link"]}
              onClick={closeMobileMenu}
            >
              Our Products
            </Link>
            <Link
              href="/about-us"
              className={styles["nav-link"]}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={styles["nav-link"]}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>

          {/* Right side controls */}
          <div className={styles["nav-right-controls"]}>
            <div className={styles["nav-search-wrapper"]}>
              <button
                aria-label="search"
                className={styles["nav-icon-btn"]}
                onClick={() => {
                  if (activeMenu === "search") {
                    setActiveMenu(null);
                    return;
                  }

                  setActiveMenu("search");
                }}
                aria-expanded={activeMenu === "search"}
              >
                <Search className={styles["nav-icon"]} />
              </button>
            </div>

            <button className={styles["nav-icon-btn"]} aria-label="user">
              <User className={styles["nav-icon"]} />
            </button>

            <button
              className={styles["nav-icon-btn"]}
              aria-label="shopping bag"
            >
              <ShoppingBag className={styles["nav-icon"]} />
            </button>

            {/* Location dropdown */}
            <div className={styles['nav-location-wrapper']}>
              <button
              className={styles["nav-location-dropdown"]}
              onClick={() => toggleMenu("product")}
              aria-expanded={activeMenu === "product"}
              aria-label="Select pharmacy location"
            >
              <MapPin size={14} className={styles["nav-location-icon"]} />
              <span>Silver Lane</span>
              <ChevronDown size={14} className={styles["nav-chevron-icon"]} />
            </button>
 {activeMenu === "product" && <PharmacyCard />}
            </div>

            {/* <Button showArrow >Order Prescription</Button> */}
           <Link
           href={"./product"}>
             <button className={styles['nav-button']}>Order Prescription
              <span className={styles['nav-button-arrow-wrapper']}>
                <ArrowRight className={styles['nav-arrow']}/>
              </span>
            </button>
           </Link>
          </div>
        </div>
      </div>

      <ServicesMenu isOpen={activeMenu === "services"} />
     
      {activeMenu === "search" && <SearchBar />}
    </header>
  );
};

export default Navbar;
