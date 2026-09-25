// typescript interface 

import { StaticImageData } from "next/image";

// footer 
export interface FooterLink{
    label:string;
    href:string;
}

export interface FooterInformation{
    address:string;
    number:string;
    email:string;   
}
export interface FooterRegulatory{
    gphc: string;
    superintendent:string;
    pharmacyOwner:string;
}
export interface FooterOpeningHour{
    day: string;
    time:string;
}
export interface FooterLinksData {
  legal: FooterLink[];
  information: FooterInformation;
  regulatory: FooterRegulatory;
  openingHours: FooterOpeningHour[];
}

export interface DropDownItem{
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
export interface WhatWeOfferedCardData{
   title:string;
   description:string;
}

export interface FilterOption{
    id:string;
    label:string;
}

export interface ProductCardData{
    slug: string;
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
    buttonText?:string;
    showTreatmentsButton?: boolean;
  showAppointmentButton?: boolean;
  treatmentsButtonText?: string;
  appointmentButtonText?: string;
    
}

export interface ProcessData{
    id:string;
    heading:string;
    desc:string;
}

export interface HealthConditionData{
    slug: string;
    name:string;
    desc:string;
    id:string;
    isNHS?:boolean;
}

export interface AllAlphacetGroups{
    latter:string,
    data:string
}

export interface ProductImage {
    src: StaticImageData;
    alt?: string;
}

export interface PackSize {
    id: string;
    label:string;
    price:string;
    saving:string;
    pricePerTablet:string;
}

export interface DeliveryOption {
    type: string;
    duration:string;
    price:string;
}

export interface DeliveryInfo {
    title:string;
    description: string;
    options:DeliveryOption[];
}

export interface ProductData{
    name:string;
    title:string;
    price:string;
    pricePerTablet:string;
    reviews:number;
    tabletCount:string;
    inStock:boolean;
    images:StaticImageData[];
    strengths:string[];
    packSizes:PackSize[];
    delivery:DeliveryInfo
}


// condition section 

export interface StepInfo{
    id: string;
    name: string;
    desc: string

}

// main Home Page 
export interface ExportCardInfo{
    isnhs?:boolean;
    title:string;
    desc:string;
    id:string;
    img:string|StaticImageData
}
export type InformationDataProps = {
  img:string | StaticImageData;
  desc:string;
  id:string;
}


// faq section 
export type FaqsDataProps = {
    id:string;
    question:string;
    answer?:string;
}

//  specialist data 
export type SpecialistDataProps = {
    imgSrc: string | StaticImageData;
    name: string;
    role: string;
    registration:string;
    description:string;
}


//about us
//time line section data 
export type TimelineDataProps = {
    year:string;
    title:string;
    description:string;
    imgSrc:string | StaticImageData;
    id:string
}