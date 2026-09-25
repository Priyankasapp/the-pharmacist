"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import {
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

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
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
      <div className={styles["nav-container"]}>
        {/* 1. Logo (Fixed typo: removed leading spaces) */}
        <Link href="/" className={styles["nav-logo"]} onClick={closeMobileMenu}>
          <Image
            src="/LOGO.svg"
            alt="The Pharmacist logo"
            width={180}
            height={40}
            priority
            className={styles["nav-logo-icon"]}
          />
        </Link>

        {/* 2. Mobile Menu Toggle Button */}
        <button
          className={styles["nav-mobile-menu"]}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={styles["nav-menu"]} />}
        </button>

        {/* 3. Navigation Wrapper (Desktop & Mobile Drawer) */}
        <div
          className={`${styles["nav-wrapper"]} ${
            isMobileMenuOpen ? styles["nav-wrapper-open"] : ""
          }`}
        >
          <nav className={styles["nav-links"]}>
            {/* Services Dropdown (Supports both Click and Hover) */}
            <div
              className={styles["nav-hover-wrapper"]}
              onMouseEnter={() => {
                if (window.innerWidth > 991) setActiveMenu("services");
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 991) setActiveMenu(null);
              }}
            >
              <button
                type="button"
                className={styles["nav-link-btn"]}
                onClick={() => toggleMenu("services")}
                aria-expanded={activeMenu === "services"}
              >
                <span>Our Services</span>
                {activeMenu === "services" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Render dropdown menu only here */}
              <ServicesMenu isOpen={activeMenu === "services"} />
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

          {/* 4. Right Side Controls */}
          <div className={styles["nav-right-controls"]}>
            <div className={styles["nav-icon-group"]}>
              <button
                aria-label="search"
                className={styles["nav-icon-btn"]}
                onClick={() => toggleMenu("search")}
                aria-expanded={activeMenu === "search"}
              >
                <Search size={20} className={styles["nav-icon"]} />
              </button>

              <button className={styles["nav-icon-btn"]} aria-label="user profile">
                <User size={20} className={styles["nav-icon"]} />
              </button>

              <button className={styles["nav-icon-btn"]} aria-label="shopping bag">
                <ShoppingBag size={20} className={styles["nav-icon"]} />
              </button>
            </div>

            {/* Location dropdown */}
            <div className={styles["nav-location-wrapper"]}>
              <button
                type="button"
                className={styles["nav-location-dropdown"]}
                onClick={() => toggleMenu("product")}
                aria-expanded={activeMenu === "product"}
                aria-label="Select pharmacy location"
              >
                <MapPin size={16} className={styles["nav-location-icon"]} />
                <span>Silver Lane</span>
                <ChevronDown size={14} className={styles["nav-chevron-icon"]} />
              </button>
              {activeMenu === "product" && <PharmacyCard />}
            </div>

            <Link href="/product" onClick={closeMobileMenu} className={styles["nav-cta-link"]}>
              <Button showArrow className={styles["nav-button"]}>
                Order Prescription
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar Dropdown Overlay */}
      {activeMenu === "search" && <SearchBar />}
    </header>
  );
};

export default Navbar;