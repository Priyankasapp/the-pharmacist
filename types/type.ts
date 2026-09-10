import { StaticImageData } from "next/image";

export type ServiceLink = {
  label: string;
  href: string;
};


export type ServiceGroup = {
  title: string;
  href?: string;
  links: ServiceLink[];
};

export type ServiceColumn = {
  id: string;
  label: string;
  logo?: string; 
  groups: ServiceGroup[];
  viewAllHref: string;
};

export type ServicesMenuProps = {
  isOpen: boolean;
};

export type TreatmentDataProps = {
  id:number;
  title:string;
  img:string | StaticImageData;
  condition:string[];
}

