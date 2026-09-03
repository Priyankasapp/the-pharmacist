// typescript interface 

import { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: DropDownItem[];
}

export interface DropDownItem{
    label: string;
    href: string;
    description?: string;
}

export interface Pharmacy{
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    openingHouers:string;
}

export interface Patients{
    id: string;
    name:string;
    title:string;
    description:string;
    imgSrc:string|StaticImageData;
    rating:number;
}
export interface Treatments{
   
    name:string;
    desc:string;
    imgSrc:string|StaticImageData;

}

// what we offer card data 

export interface WhatWeOfferedCardData{
   title:string;
   description:string
}

//product 
export interface FilterOption{
    id:string;
    label:string;
}

export interface ProductCardData{
    id:string;
    title:string;
    subtitle:string;
    image:string | StaticImageData;
    isPrescriptionOnly?:boolean;
    savingsText?:string;
    reviewCount:number;
    price:number;
    originalPrice?:number;
    weightText?:string;
    unitPriceText?:string;
    
}

// all condition 

// process data 
export interface ProcessData{
    id:string;
    heading:string;
    desc:string;
}