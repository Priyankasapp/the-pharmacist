/* eslint-disable react-hooks/immutability */
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

/* ---------- Icons (inline SVG for zero dependencies) ---------- */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 8h12l-1 12H7L6 8z" />
    <path d="M9 8V7a3 3 0 0 1 6 0v1" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    fill="none"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ---------- Mega menu data ---------- */
const megaMenuData = {
  nhs: {
    title: 'NHS SERVICES',
    badge: 'NHS',
    groups: [
      {
        title: 'NHS Pharmacy First',
        links: [
          { label: 'Acute Sore Throat', href: '/conditions/sore-throat' },
          { label: 'Acute Sinusitis', href: '/conditions/sinusitis' },
          { label: 'Acute Otitis Media', href: '/conditions/otitis-media' },
        ],
      },
    ],
  },
  private: {
    title: 'PRIVATE PHARMACY SERVICES',
    groups: [
      {
        title: 'Skin & Scalp Conditions',
        links: [
          { label: 'Colic', href: '/conditions/colic' },
          { label: 'Constipation', href: '/conditions/constipation' },
          { label: 'Diarrhoea', href: '/conditions/diarrhoea' },
        ],
      },
      {
        title: 'Vaccinations',
        links: [
          { label: 'Colic', href: '/conditions/colic' },
          { label: 'Constipation', href: '/conditions/constipation' },
          { label: 'Diarrhoea', href: '/conditions/diarrhoea' },
        ],
      },
      {
        title: 'Bladder & Intimate Health',
        links: [
          { label: 'Colic', href: '/conditions/colic' },
          { label: 'Constipation', href: '/conditions/constipation' },
          { label: 'Diarrhoea', href: '/conditions/diarrhoea' },
        ],
      },
    ],
  },
  online: {
    title: 'ONLINE DOCTOR',
    groups: [
      {
        title: 'Acne',
        links: [
          { label: 'Colic', href: '/conditions/colic' },
          { label: 'Constipation', href: '/conditions/constipation' },
          { label: 'Diarrhoea', href: '/conditions/diarrhoea' },
        ],
      },
      {
        title: 'Eczema & Dermatitis',
        links: [
          { label: 'Colic', href: '/conditions/colic' },
          { label: 'Constipation', href: '/conditions/constipation' },
          { label: 'Diarrhoea', href: '/conditions/diarrhoea' },
        ],
      },
      {
        title: 'Rosacea',
        links: [
          { label: 'Colic', href: '/conditions/colic' },
          { label: 'Constipation', href: '/conditions/constipation' },
          { label: 'Diarrhoea', href: '/conditions/diarrhoea' },
        ],
      },
    ],
  },
};

const searchSuggestions = [
  { label: 'Acid Reflux & Heartburn', href: '/conditions/acid-reflux' },
  { label: "Athlete's Foot", href: '/conditions/athletes-foot' },
  { label: 'Azelaic Acid', href: '/conditions/azelaic-acid' },
  { label: 'Chesty Cough', href: '/conditions/chesty-cough' },
  { label: 'Sore Throat', href: '/conditions/sore-throat', badge: 'NHS' },
];

/* ---------- Component ---------- */
export const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAll();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const closeAll = () => {
    setServicesOpen(false);
    setSearchOpen(false);
    setLocationOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setSearchOpen(false);
    setLocationOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setServicesOpen(false);
    setLocationOpen(false);
  };

  const toggleLocation = () => {
    setLocationOpen((prev) => !prev);
    setServicesOpen(false);
    setSearchOpen(false);
  };

  const filteredSuggestions = searchSuggestions.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Dark overlay when any dropdown is open */}
      <div
        className={`navbar-overlay ${servicesOpen || searchOpen || locationOpen ? 'navbar-overlay--open' : ''}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      <header className="navbar">
        <div className="navbar__container">
          {/* Logo */}
          <Link href="/" className="navbar__logo" onClick={closeAll}>
            <span className="navbar__logo-text">
              ThePharmacist<span className="navbar__logo-plus">+</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__nav-list">
              <li className="navbar__nav-item">
                <button
                  className={`navbar__nav-link ${servicesOpen ? 'navbar__nav-link--active' : ''}`}
                  onClick={toggleServices}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Our Services
                  <span className="navbar__nav-chevron">▾</span>
                </button>
              </li>
              <li className="navbar__nav-item">
                <Link href="/products" className="navbar__nav-link" onClick={closeAll}>
                  Our Products
                </Link>
              </li>
              <li className="navbar__nav-item">
                <Link href="/about" className="navbar__nav-link" onClick={closeAll}>
                  About Us
                </Link>
              </li>
              <li className="navbar__nav-item">
                <Link href="/contact" className="navbar__nav-link" onClick={closeAll}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="navbar__actions">
            {/* Search */}
            <div ref={searchRef} style={{ position: 'relative' }}>
              <button
                className={`navbar__icon-btn ${searchOpen ? 'navbar__icon-btn--active' : ''}`}
                onClick={toggleSearch}
                aria-label="Search"
                aria-expanded={searchOpen}
              >
                <SearchIcon />
              </button>

              {/* Search Dropdown */}
              <div className={`search-dropdown ${searchOpen ? 'search-dropdown--open' : ''}`}>
                <form
                  className="search-dropdown__form"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="search-dropdown__input-wrap">
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="search-dropdown__input"
                      placeholder="What condition are you looking for?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-dropdown__submit">
                      Search
                    </button>
                  </div>
                </form>

                <ul className="search-dropdown__results">
                  {filteredSuggestions.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="search-dropdown__result"
                        onClick={closeAll}
                      >
                        {item.label}
                        {item.badge && (
                          <span className="search-dropdown__result-badge">{item.badge}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* User */}
            <Link href="/account" className="navbar__icon-btn" aria-label="My Account">
              <UserIcon />
            </Link>

            {/* Bag */}
            <Link href="/cart" className="navbar__icon-btn" aria-label="Shopping bag">
              <BagIcon />
            </Link>

            {/* ========== LOCATION (Silver Lane) ========== */}
            <div ref={locationRef} style={{ position: 'relative' }}>
              <button
                className="navbar__location"
                onClick={toggleLocation}
                aria-expanded={locationOpen}
                aria-haspopup="true"
                aria-label="Select location"
              >
                <PinIcon />
                Silver Lane
                <span className="navbar__location-chevron">▾</span>
              </button>

              {/* Location Popover */}
              <div
                className={`location-dropdown ${locationOpen ? 'location-dropdown--open' : ''}`}
              >
                {/* Pharmacy Card */}
                <div className="location-dropdown__card">
                  <div className="location-dropdown__card-top">
                    <h4 className="location-dropdown__title">
                      Silver Lane - The Pharmacist
                    </h4>
                    <span className="location-dropdown__arrow">
                      <ChevronRight />
                    </span>
                  </div>

                  <p className="location-dropdown__address">
                    45 Maple Drive in Leigh, WN7 1AA
                  </p>

                  <div className="location-dropdown__contact">
                    <a href="tel:01234567890" className="location-dropdown__link">
                      01234 567 890
                    </a>
                    <span>•</span>
                    <a
                      href="mailto:contact@yourpharmacy.co.uk"
                      className="location-dropdown__link"
                    >
                      contact@yourpharmacy.co.uk
                    </a>
                  </div>

                  <div className="location-dropdown__hours">
                    <span className="location-dropdown__hours-label">
                      Today&apos;s opening hours
                    </span>
                    <span className="location-dropdown__hours-value">
                      9:00 AM - 5:30 PM
                    </span>
                  </div>
                </div>

                {/* Choose another pharmacy */}
                <button
                  className="location-dropdown__footer"
                  onClick={closeAll}
                >
                  Choose another pharmacy
                  <span className="location-dropdown__arrow">
                    <ChevronRight />
                  </span>
                </button>
              </div>
            </div>

            {/* CTA */}
            <Link href="/order-prescriptions" className="navbar__cta" onClick={closeAll}>
              Order Prescriptions
            </Link>

            {/* Mobile Hamburger */}
            <button className="navbar__hamburger" aria-label="Open menu">
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
            </button>
          </div>
        </div>

        {/* ========== MEGA MENU ========== */}
        <div className={`mega-menu ${servicesOpen ? 'mega-menu--open' : ''}`}>
          <div className="mega-menu__container">
            {/* Column 1 — NHS */}
            <div className="mega-menu__column">
              <div className="mega-menu__column-header">
                <span className="mega-menu__column-badge mega-menu__column-badge--nhs">
                  {megaMenuData.nhs.badge}
                </span>
                <span className="mega-menu__column-title">{megaMenuData.nhs.title}</span>
              </div>

              {megaMenuData.nhs.groups.map((group) => (
                <div className="mega-menu__group" key={group.title}>
                  <h4 className="mega-menu__group-title">{group.title}</h4>
                  <ul className="mega-menu__links">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="mega-menu__link" onClick={closeAll}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Link href="/conditions" className="mega-menu__view-all" onClick={closeAll}>
                View all conditions <span>›</span>
              </Link>
            </div>

            {/* Column 2 — Private Pharmacy */}
            <div className="mega-menu__column">
              <div className="mega-menu__column-header">
                <span className="mega-menu__column-badge--icon">💊</span>
                <span className="mega-menu__column-title">{megaMenuData.private.title}</span>
              </div>

              <div className="mega-menu__sub-grid">
                {megaMenuData.private.groups.map((group) => (
                  <div className="mega-menu__group" key={group.title}>
                    <h4 className="mega-menu__group-title">{group.title}</h4>
                    <ul className="mega-menu__links">
                      {group.links.map((link) => (
                        <li key={link.label + group.title}>
                          <Link href={link.href} className="mega-menu__link" onClick={closeAll}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="/conditions" className="mega-menu__view-all" onClick={closeAll}>
                View all conditions <span>›</span>
              </Link>
            </div>

            {/* Column 3 — Online Doctor */}
            <div className="mega-menu__column">
              <div className="mega-menu__column-header">
                <span className="mega-menu__column-badge--icon">🩺</span>
                <span className="mega-menu__column-title">{megaMenuData.online.title}</span>
              </div>

              <div className="mega-menu__sub-grid">
                {megaMenuData.online.groups.map((group) => (
                  <div className="mega-menu__group" key={group.title}>
                    <h4 className="mega-menu__group-title">{group.title}</h4>
                    <ul className="mega-menu__links">
                      {group.links.map((link) => (
                        <li key={link.label + group.title}>
                          <Link href={link.href} className="mega-menu__link" onClick={closeAll}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="/conditions" className="mega-menu__view-all" onClick={closeAll}>
                View all conditions <span>›</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};