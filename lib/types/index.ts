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