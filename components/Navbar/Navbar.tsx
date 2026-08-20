'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';

// Import icons directly from lucide-react
import { 
  Search, 
  User, 
  ShoppingBag, 
  MapPin, 
  ChevronDown 
} from 'lucide-react';

export const Navbar = () => {
  const [location] = useState('Silver Lane');

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/LOGO.svg"
            alt="ThePharmacist logo"
            width={180}
            height={40}
            className={styles.logoIcon}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <Link href="/services" className={`${styles.navLink} ${styles.activeLink}`}>
            Our Services
            <ChevronDown size={14} className={styles.chevronIcon} />
          </Link>
          <Link href="/products" className={styles.navLink}>
            Our Products
          </Link>
          <Link href="/about" className={styles.navLink}>
            About Us
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Right side controls */}
        <div className={styles.rightControls}>
          <button aria-label="Search" className={styles.iconBtn}>
            <Search size={20} className={styles.navIcon} />
          </button>

          <button aria-label="Profile" className={styles.iconBtn}>
            <User size={20} className={styles.navIcon} />
          </button>

          <button aria-label="Cart" className={styles.iconBtn}>
            <ShoppingBag size={20} className={styles.navIcon} />
          </button>

          {/* Location Selector Pill */}
          <div className={styles.locationDropdown}>
            <MapPin size={16} className={styles.locationIcon} />
            <span>{location}</span>
            <ChevronDown size={14} className={styles.chevronIcon} />
          </div>

          {/* Header CTA Button */}
          <Button variant="primary" showArrow>
            Order Prescriptions
          </Button>
        </div>
      </div>
    </header>
  );
};