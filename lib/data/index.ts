import { patient1, patient2, patient3, treatmentImg1, treatmentImg2, treatmentImg3, treatmentImg4, treatmentImg5, treatmentImg6, treatmentImg7, treatmentImg8, treatmentImg9 } from "@/data/assets";
import { FilterOption, NavLink, Patients, Pharmacy, Treatments, WhatWeOfferedCardData } from "../types";

// navigation data
export const navLinks: NavLink[] = [
  {
    label: "Our Services",
    href: "/services",
  },
  {
    label: "Our Products",
    href: "/shop",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// pharmacy card on  navbar
export const pharmacy: Pharmacy = {
  id: "silver-lane",
  name: "Silver Lane – The Pharmacist",
  address: "45 Maple Drive in Leigh, WN7 1AA",
  phone: "01234 567 890",
  email: "contact@yourpharmacy.co.uk",
  openingHouers: "9:00 AM - 5:30 PM",
};


export const patients: Patients[] = [
  {
  id:"Peter Parker",
  name:"Peter Parker", 
  title:"HR,Tech Master Ltd.",
  description:"Lorem ipsum dolor sit amet&semi consectetur adipiscing elit&semi sed do eiusmod tempor incideidunt ut labore et",
  imgSrc:patient1,
  rating:4,
},
{
  id:"Moris Jonson",
  name:"Moris Jonson", 
  title:"CEO, Hasok Int. Ltd.",
  description:"Uniquely strategize 2.0 portals after fully researched vortals. Quickly repurpose frontend metrics through",
  imgSrc:patient2,
  rating:5,
},
{
  id:"",
  name:"Olivia Catherine", 
  title:"CEO, VitaWell Inc.",
  description:"Uniquily strategize 2.0 portals after fully researched vortals. Quickly repurpose frontend metrics through",
  imgSrc:patient3,
  rating:5,
},

]


// treatment data 
export const treatments:Treatments[] = [
  {
    name:"sdsd",
    desc:"Clinician-approved treatments to help clear your skin and reduce future breakouts.",
    imgSrc:treatmentImg1
  },
  {
    name:"Anaphylaxis",
    desc:"Prescribed emergency treatments to help you stay prepared and safe at all times.",
    imgSrc:treatmentImg2
  },
  {
    name:"BPH",
    desc:"Effective treatments to help relieve urinary symptoms caused by an enlarged prostate.",
    imgSrc:treatmentImg3
  },
  {
    name:"COPD",
    desc:"Prescribed treatments to help you breathe easier and manage your symptoms day to day.",
    imgSrc:treatmentImg4
  },
  {
    name:"Cold Sores",
    desc:"Fast-acting antiviral treatments to clear cold sores quickly and reduce how often they return.",
    imgSrc:treatmentImg5
  },
  {
    name:"Chlamydia",
    desc:"Discreet, clinician-reviewed treatments for chlamydia, ordered simply and delivered to your door.",
    imgSrc:treatmentImg6
  },
  {
    name:"Diabetes",
    desc:"Clinician-approved treatments to help you manage your diabetes safely and with confidence.",
    imgSrc:treatmentImg7
  },
  {
    name:"Erectile Dysfunction",
    desc:"Prescribed treatments for erectile dysfunction, reviewed by a clinician and delivered privately.",
    imgSrc:treatmentImg8
  },
  {
    name:"Weight Loss",
    desc:"Safe, clinician-approved treatments to help you manage your weight and improve your overall health.",
    imgSrc:treatmentImg9
  },
  
]

export const whatWeOffereCardData: WhatWeOfferedCardData[] = [
 {
    title:"Prescription dispensing",
    description:"Fast and accurate dispensing of your prescriptions, every time.",
  },
  {
    title:"Online consultations",
    description:"Speak to our pharmacists or healthcare experts from anywhere.",
  },
  {
    title:"Health services and advice",
    description:"Expert guidance to help you manage your health effectively",
  },
  {
    title:"Over-the-counter Meds",
    description:"A wide range of trusted medicines and wellness products.",
  }
]



// product filer sidebar data 
// categories 
export const categories:FilterOption[]=[
  {
    id:"health-pharmacy",
    label:"Health & Pharmacy"
  },
  {
    id:"toiletries",
    label:"Toiletries"
  },
  {
    id:"wellness",
    label:"Wellness"
  },
  {
    id:"beauty-skincare",
    label:"Beauty & Skincare"
  },
  {
    id:"beby-Child",
    label:"Baby & Child"
  },
  {
    id:"gift",
    label:"Gift"
  },
  {
    id:"men's",
    label:"Men's"
  },
  {
    id:"women's",
    label:"Women's"
  },
  {
    id:"homeware",
    label:"Homeware"
  },
  {
    id:"fragrances",
    label:"Fragrances"
  }

]

export const brands:FilterOption[]=[
  {
    id:"MediWell",
    label:"MediWell",
  },
  {
    id:"CarePlus",
    label:"CarePlus",
  },
  {
    id:"HealthPro",
    label:"HealthPro", 
  },
  {
    id:"PureHealth",
    label:"PureHealth",
  },
  {
    id:"VitaCure",
    label:"VitaCure",
  }
]