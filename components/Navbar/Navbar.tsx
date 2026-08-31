'use client'

import { useState} from 'react'
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { ChevronDown, ChevronUp, MapPin, Menu, Search, ShoppingBag, User, X } from "lucide-react";

import { ServicesMenu } from '../ServicesMenu/ServicesMenu';
import { SearchMenu } from '../SearchMenu/SearchMenu';
import Button from '../Button/Button';
// import PharmacyCard from './PharmacyCard/PharmacyCard';
// import { Button } from '../Button/Button';
// import PharmacyCard from '../PharmacyCard/PharmacyCard';

type ActiveMenuType = 'services'|'search' |'product'| null;

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //toggle menu
  const toggleMenu = (menuName:ActiveMenuType) =>{
    if(activeMenu === menuName){
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName)
    }
  };

  return (
    <header className={styles['navbar']}>
      <div className={`${styles['nav-container']} container`}>
        {/* left  */}
        {/* Logo  */}
        <Link href="/" className={styles['nav-logo']}>
        <Image
        src="/LOGO.svg"
        alt="The Pharmacist logo"
        width={180}
        height={40}
        className={styles['nav-logo-icon']}
        />
        </Link>

      {/* mobile menu button */}
      <button
      className={styles['nav-mobile-menu']}
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X />: <Menu className={styles['nav-menu']}/>}

      </button>

        {/* Navigation Link  */}
       <div className={`${styles['nav-wrapper']} ${isMobileMenuOpen? styles['nav-wrapper-open']:''}`}  >
        <nav className={styles['nav-links']}>
          {/* Services  */}
          <div
          className={styles['nav-hover-wrapper']}
          onMouseEnter={()=> setActiveMenu('services')}
          onMouseLeave={()=>setActiveMenu(null)}
          >
            <Link
          href="#"
          className={`${styles['nav-link']} `}
          onClick={(e)=>{
            e.preventDefault();

          }}>
            Our Services {activeMenu === 'services' ? <ChevronUp />:<ChevronDown/>}
          </Link>
          </div>
          <Link href="#" className={styles['nav-link']}>Our Products</Link>
          <Link href="/about-us" className={styles['nav-link']}>About Us</Link>
          <Link href="/contact" className={styles['nav-link']}>Contact</Link>
        </nav>

          {/* right side  */}
          <div className={styles['nav-right-controls']}>
              <button
              aria-label='search'
              className={`${styles['nav-icon-btn']} `}
              onClick={()=>toggleMenu('search')}
              >
                <Search  className={styles['nav-icon']}/>
              </button>

              <button
              className={styles['nav-icon-btn']}
              aria-label='user'>
                <User className={styles['nav-icon']}/>
              </button>

              <button
              className={styles['nav-icon-btn']}
              aria-label='shopping bag'
              >
                <ShoppingBag className={styles['nav-icon']}/>
              </button>

              {/* buttons  */}
              <div className={styles['nav-location-dropdown']}
              onClick={(e)=>{
            e.preventDefault();
            toggleMenu('product');
          }}>
                <MapPin size={14} className={styles['nav-location-icon']}/>
                <span>Silver Lane</span>
                <ChevronDown size={14} className={styles['nav-chevron-icon']}/>
              </div>

              <Button  showArrow>
                Order Prescription
              </Button>
          </div>

       </div>
      </div>
       <ServicesMenu isOpen={activeMenu === 'services'}/>
        {/* <PharmacyCard isOpen={activeMenu === 'product'}/> */}
        <SearchMenu isOpen={activeMenu === 'search'}/>
    </header>
  )
}

export default Navbar

// "use client";

// import { logo } from "@/data/assets";
// import styles from "./Navbar.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import {  navLinks } from "@/lib/data";
// import { NavLink } from "@/lib/types";
// import Button from "../Button/Button";

// const Navbar = () => {
//   return (
//     <nav className={styles["navbar"]}>
//       {/* left  */}
//       <div className={styles["navbar-left"]}>
//         {/* logo  */}
//         <Link href="/">
//           <div className={styles["navbar-logo-wrapper"]}>
//             <Image
//               src={logo}
//               alt="logo"
//               className={styles["navbar-logo-image"]}
//             />
//           </div>
//         </Link>
//       </div>

//       {/* center  */}
      
//         <ul className={styles["navbar-links"]}>
//           {navLinks.map((link:NavLink)=>(
//             <li key={link.href}>
//               <Link href={link.href}>{link.label}{link.hasDropdown}</Link>
//             </li>
//           ))}
//         </ul>
     
//       {/* right  */}
//       <div className={styles["navbar-right"]}>
//         {/* icons  */}
//         {/* button  */}
//         <button>Silver Lane</button>
//         <Button showArrow>Order Prescriptions</Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
