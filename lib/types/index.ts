// // typescript interface

// import { StaticImageData } from "next/image";
// import { ComponentType } from "react";

// // footer
// export interface FooterLink {
//   label: string;
//   href: string;
// }

// export interface FooterInformation {
//   address: string;
//   number: string;
//   email: string;
// }
// export interface FooterRegulatory {
//   gphc: string;
//   superintendent: string;
//   pharmacyOwner: string;
// }
// export interface FooterOpeningHour {
//   day: string;
//   time: string;
// }
// export interface FooterLinksData {
//   legal: FooterLink[];
//   information: FooterInformation;
//   regulatory: FooterRegulatory;
//   openingHours: FooterOpeningHour[];
// }

// export interface DropDownItem {
//   label: string;
//   href: string;
//   description?: string;
// }

// export interface NavLink {
//   label: string;
//   href: string;
//   hasDropdown?: boolean;
//   dropdown?: DropDownItem[];
// }

// export interface Pharmacy {
//   id: string;
//   name: string;
//   address: string;
//   phone: string;
//   email: string;
//   openingHouers: string;
// }

// export interface Patients {
//   id: string;
//   name: string;
//   title?: string;
//   description: string;
//   imgSrc: string | StaticImageData;
//   rating: number;
// }
// export interface Treatments {
//   _id?: string;
//   name: string;
//   slug?: string;
//   desc: string;
//   imgSrc: string | StaticImageData;
//   order?: number;
// }
// export interface WhatWeOfferedCardData {
//   title: string;
//   description: string;
// }

// export interface ProductCardData {
//   slug: string;
//   id: string;
//   title: string;
//   subtitle: string;
//   image: string | StaticImageData;
//   isPrescriptionOnly?: boolean;
//   savingsText?: string;
//   reviewCount: number;
//   price: number;
//   originalPrice?: number;
//   weightText?: string;
//   unitPriceText?: string;
//   buttonText?: string;
//   showTreatmentsButton?: boolean;
//   showAppointmentButton?: boolean;
//   treatmentsButtonText?: string;
//   appointmentButtonText?: string;
// }

// export interface ProcessData {
//   id: string;
//   heading: string;
//   desc: string;
// }

// export interface HealthConditionData {
//   _id?: string;
//   slug?: string;
//   name: string;
//   desc: string;
//   id: string;
//   isNHS: boolean;
// }

// export interface AllAlphacetGroups {
//   latter: string;
//   data: string;
// }

// export interface ProductImage {
//   src: StaticImageData;
//   alt?: string;
// }

// export interface PackSize {
//   id: string;
//   label: string;
//   price: string;
//   saving: string;
//   pricePerTablet: string;
// }

// export interface DeliveryOption {
//   type: string;
//   duration: string;
//   price: string;
// }

// export interface DeliveryInfo {
//   title: string;
//   description: string;
//   options: DeliveryOption[];
// }
// export interface ProductInformation {
//   _key?: string;
//   title: string;
//   content: string;
// }
// export interface ProductData {
//    _id: string; 
//   slug?: string;
//   name: string;
//   title: string;
//   subtitle?: string;
//   description?: string;
//   price: string;
//   originalPrice?: string;
//   pricePerTablet?: string;
//   reviews: number;
//    reviewCount?: number; 
   
//   tabletCount?: string;
//   inStock: boolean;
//   prescriptionOnly?: boolean;
//   images: (StaticImageData | string)[];
//   strengths?: string[];
//   packSizes?: PackSize[];
//   delivery?: DeliveryInfo;
//    productInformation?: ProductInformation[];
// }

// // condition section

// export interface StepInfo {
//   id: string;
//   name: string;
//   desc: string;
// }

// // main Home Page
// export interface ExportCardInfo {
//   _id?: string;
//   id: string;
//   title: string;
//   desc: string;
//   img: string | StaticImageData;
//   isnhs?: boolean;
// }
// export type InformationDataProps = {
//   img: string | StaticImageData;
//   desc: string;
//   id: string;
// };

// // faq section
// export type FaqsDataProps = {
//   id: string;
//   question: string;
//   answer?: string;
// };

// //  specialist data
// export type SpecialistDataProps = {
//   imgSrc: string | StaticImageData;
//   name: string;
//   role: string;
//   registration: string;
//   description: string;
// };

// //about us
// //time line section data
// export type TimelineDataProps = {
//   year: string;
//   title: string;
//   description: string;
//   imgSrc: string | StaticImageData;
//   id: string;
// };

// // pharmalist data
// export type PharmalistDataProps = {
//   title: string;
//   description: string;
//   imgSrc: string | StaticImageData | ComponentType;
// };

// // Product Sidebar

// export interface FilterState {
//   minPrice: number;
//   maxPrice: number;
//   categories: string[];
//   brands: string[];
//   ratings: number[];
//   promotions: string[];
//   productTypes: string[];
// }

// export interface FilterOption {
//   id: string;
//   label: string;
// }
// export interface ServiceLink {
//   label: string;
//   href: string;
// }

// export interface ServiceGroup {
//   title: string;
//   href?: string;
//   links: ServiceLink[];
// }

// export interface ServiceColumn {
//   id: string;
//   label: string;
//   logo?: string;
//   groups: ServiceGroup[];
//   viewAllHref: string;
// }

// export interface ServicesMenuProps {
//   isOpen: boolean;
// }

// export interface TreatmentDataProps {
//   _id?: string;
//   id: number;
//   title: string;
//   img: string | StaticImageData;
//   condition: string[];
// }


// export interface ArticleDataProps {
//   _id?: string;
//   id?: string | number;
//   title: string;
//   category: string;
//   desc: string;
//   img: string | StaticImageData;
// }


// typescript interface

import { StaticImageData } from "next/image";
import { ComponentType } from "react";

// footer
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterInformation {
  address: string;
  number: string;
  email: string;
}
export interface FooterRegulatory {
  gphc: string;
  superintendent: string;
  pharmacyOwner: string;
}
export interface FooterOpeningHour {
  day: string;
  time: string;
}
export interface FooterLinksData {
  legal: FooterLink[];
  information: FooterInformation;
  regulatory: FooterRegulatory;
  openingHours: FooterOpeningHour[];
}

export interface DropDownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: DropDownItem[];
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHouers: string;
}

export interface Patients {
  id: string;
  name: string;
  title?: string;
  description: string;
  imgSrc: string | StaticImageData;
  rating: number;
}
export interface Treatments {
  _id?: string;
  name: string;
  slug?: string;
  desc: string;
  imgSrc: string | StaticImageData;
  order?: number;
}
export interface WhatWeOfferedCardData {
  title: string;
  description: string;
}

export interface ProductCardData {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  image: string | StaticImageData;
  isPrescriptionOnly?: boolean;
  savingsText?: string;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  weightText?: string;
  unitPriceText?: string;
  buttonText?: string;
  showTreatmentsButton?: boolean;
  showAppointmentButton?: boolean;
  treatmentsButtonText?: string;
  appointmentButtonText?: string;
}

export interface ProcessData {
  id: string;
  heading: string;
  desc: string;
}

export interface HealthConditionData {
  _id?: string;
  slug?: string;
  name: string;
  desc: string;
  id: string;
  isNHS: boolean;
}

export interface AllAlphacetGroups {
  latter: string;
  data: string;
}

export interface ProductImage {
  src: StaticImageData;
  alt?: string;
}

// ==========================================
// UPDATED PRODUCT INTERFACES FOR SANITY
// ==========================================

export interface ProductInformation {
  _key?: string;
  title: string;
  content: string;
}

// Updated to match the new Sanity query
export interface PackSize {
  _key: string;
  label: string;
  quantity: number;
  price: number;
  originalPrice?: number;
}

// Added to match the new Delivery table in Sanity
export interface DeliveryOption {
  _key: string;
  type: string;
  time: string;
  cost: string;
}

export interface ProductData {
  _id: string; 
  slug?: string;
  name: string;
  title: string;
  subtitle?: string; 
  description?: string;
  
  // Changed to numbers for frontend calculations
  price: number;
  originalPrice?: number;
  pricePerTablet?: string;
  unitInfo?: string;
  
  reviews: number;
  reviewCount?: number;
  
  inStock: boolean;
  prescriptionOnly?: boolean;
  brandName?: string;
  
  // NEW: Gallery objects instead of raw images
  gallery: { 
    imageUrl: string; 
    label?: string 
  }[];
  images?: (StaticImageData | string)[]; // Kept optional for backwards compatibility
  
  // NEW: Objects instead of strings
  strengths?: { 
    _key: string; 
    label: string; 
    price: number 
  }[];
  
  packSizes?: PackSize[];
  
  // NEW: Replaced the old delivery object with this array
  deliveryOptions?: DeliveryOption[];
  
  productInformation?: ProductInformation[];
}

// condition section

export interface StepInfo {
  id: string;
  name: string;
  desc: string;
}

// main Home Page
export interface ExportCardInfo {
  _id?: string;
  id: string;
  title: string;
  desc: string;
  img: string | StaticImageData;
  isnhs?: boolean;
}
export type InformationDataProps = {
  img: string | StaticImageData;
  desc: string;
  id: string;
};

// faq section
export type FaqsDataProps = {
  id: string;
  question: string;
  answer?: string;
};

//  specialist data
export type SpecialistDataProps = {
  imgSrc: string | StaticImageData;
  name: string;
  role: string;
  registration: string;
  description: string;
};

//about us
//time line section data
export type TimelineDataProps = {
  year: string;
  title: string;
  description: string;
  imgSrc: string | StaticImageData;
  id: string;
};

// pharmalist data
export type PharmalistDataProps = {
  title: string;
  description: string;
  imgSrc: string | StaticImageData | ComponentType;
};

// Product Sidebar

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  categories: string[];
  brands: string[];
  ratings: number[];
  promotions: string[];
  productTypes: string[];
}

export interface FilterOption {
  id: string;
  label: string;
}
export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceGroup {
  title: string;
  href?: string;
  links: ServiceLink[];
}

export interface ServiceColumn {
  id: string;
  label: string;
  logo?: string;
  groups: ServiceGroup[];
  viewAllHref: string;
}

export interface ServicesMenuProps {
  isOpen: boolean;
}

export interface TreatmentDataProps {
  _id?: string;
  id: number;
  title: string;
  img: string | StaticImageData;
  condition: string[];
}

export interface ArticleDataProps {
  _id?: string;
  id?: string | number;
  title: string;
  category: string;
  desc: string;
  img: string | StaticImageData;
}