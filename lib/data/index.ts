import {
  patient1,
  patient2,
  patient3,
  productImg1,
  productImg10,
  productImg2,
  productImg3,
  productImg5,
  productImg6,
  productImg7,
  productImg8,
  productImg9,
  treatmentImg1,
  treatmentImg2,
  treatmentImg3,
  treatmentImg4,
  treatmentImg5,
  treatmentImg6,
  treatmentImg7,
  treatmentImg8,
  treatmentImg9,
} from "@/data/assets";
import {
  AllAlphacetGroups,
  FilterOption,
  HealthConditionData,
  NavLink,
  Patients,
  Pharmacy,
 
  ProcessData,
 
  ProductCardData,
  Treatments,
  WhatWeOfferedCardData,
} from "../types";

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
    id: "Peter Parker",
    name: "Peter Parker",
    title: "HR,Tech Master Ltd.",
    description:
      "Lorem ipsum dolor sit amet&semi consectetur adipiscing elit&semi sed do eiusmod tempor incideidunt ut labore et",
    imgSrc: patient1,
    rating: 4,
  },
  {
    id: "Moris Jonson",
    name: "Moris Jonson",
    title: "CEO, Hasok Int. Ltd.",
    description:
      "Uniquely strategize 2.0 portals after fully researched vortals. Quickly repurpose frontend metrics through",
    imgSrc: patient2,
    rating: 5,
  },
  {
    id: "",
    name: "Olivia Catherine",
    title: "CEO, VitaWell Inc.",
    description:
      "Uniquily strategize 2.0 portals after fully researched vortals. Quickly repurpose frontend metrics through",
    imgSrc: patient3,
    rating: 5,
  },
];

// treatment data
export const treatments: Treatments[] = [
  {
    name: "sdsd",
    desc: "Clinician-approved treatments to help clear your skin and reduce future breakouts.",
    imgSrc: treatmentImg1,
  },
  {
    name: "Anaphylaxis",
    desc: "Prescribed emergency treatments to help you stay prepared and safe at all times.",
    imgSrc: treatmentImg2,
  },
  {
    name: "BPH",
    desc: "Effective treatments to help relieve urinary symptoms caused by an enlarged prostate.",
    imgSrc: treatmentImg3,
  },
  {
    name: "COPD",
    desc: "Prescribed treatments to help you breathe easier and manage your symptoms day to day.",
    imgSrc: treatmentImg4,
  },
  {
    name: "Cold Sores",
    desc: "Fast-acting antiviral treatments to clear cold sores quickly and reduce how often they return.",
    imgSrc: treatmentImg5,
  },
  {
    name: "Chlamydia",
    desc: "Discreet, clinician-reviewed treatments for chlamydia, ordered simply and delivered to your door.",
    imgSrc: treatmentImg6,
  },
  {
    name: "Diabetes",
    desc: "Clinician-approved treatments to help you manage your diabetes safely and with confidence.",
    imgSrc: treatmentImg7,
  },
  {
    name: "Erectile Dysfunction",
    desc: "Prescribed treatments for erectile dysfunction, reviewed by a clinician and delivered privately.",
    imgSrc: treatmentImg8,
  },
  {
    name: "Weight Loss",
    desc: "Safe, clinician-approved treatments to help you manage your weight and improve your overall health.",
    imgSrc: treatmentImg9,
  },
];

export const whatWeOffereCardData: WhatWeOfferedCardData[] = [
  {
    title: "Prescription dispensing",
    description:
      "Fast and accurate dispensing of your prescriptions, every time.",
  },
  {
    title: "Online consultations",
    description:
      "Speak to our pharmacists or healthcare experts from anywhere.",
  },
  {
    title: "Health services and advice",
    description: "Expert guidance to help you manage your health effectively",
  },
  {
    title: "Over-the-counter Meds",
    description: "A wide range of trusted medicines and wellness products.",
  },
];

// product filer sidebar data
// categories
export const categories: FilterOption[] = [
  {
    id: "health-pharmacy",
    label: "Health & Pharmacy",
  },
  {
    id: "toiletries",
    label: "Toiletries",
  },
  {
    id: "wellness",
    label: "Wellness",
  },
  {
    id: "beauty-skincare",
    label: "Beauty & Skincare",
  },
  {
    id: "beby-Child",
    label: "Baby & Child",
  },
  {
    id: "gift",
    label: "Gift",
  },
  {
    id: "men's",
    label: "Men's",
  },
  {
    id: "women's",
    label: "Women's",
  },
  {
    id: "homeware",
    label: "Homeware",
  },
  {
    id: "fragrances",
    label: "Fragrances",
  },
];

export const brands: FilterOption[] = [
  {
    id: "MediWell",
    label: "MediWell",
  },
  {
    id: "CarePlus",
    label: "CarePlus",
  },
  {
    id: "HealthPro",
    label: "HealthPro",
  },
  {
    id: "PureHealth",
    label: "PureHealth",
  },
  {
    id: "VitaCure",
    label: "VitaCure",
  },
];

// product card data
export const productCardData: ProductCardData[] = [
  {
    id: "Nurofen Ibuprofen 200mg Tablets, 16 Tablets",
    title: "Nurofen Ibuprofen 200mg Tablets, 16 Tablets",
    subtitle: "For Headache, Migraine, Back Pain, Cold & Flu Relief",
    image: productImg1,
    isPrescriptionOnly: false,
    savingsText: "5.53",
    reviewCount: 9403,
    price: 6,
    originalPrice: 10,
    weightText: "15g",
    unitPriceText: "£18 per 100 ",
  },
  {
    id: "Panadol 50g",
    title: "Panadol 50g",
    subtitle: "Fast relief for headaches, fever, and mild pain",
    image: productImg2,
    isPrescriptionOnly: false,
    savingsText: "6.53",
    reviewCount: 9403,
    price: 10,
    originalPrice: 13,
    weightText: "20g",
    unitPriceText: " £15 per 100g",
  },
  {
    id: "IMODIUM® Dual Action Tablet",
    title: "IMODIUM® Dual Action Tablet",
    subtitle: "Provides fast-acting relief for throat discomfort",
    image: productImg3,
    isPrescriptionOnly: true,
    savingsText: "5.53",
    reviewCount: 9403,
    price: 10,
    originalPrice: 15,
    weightText: "8 Tablets",
    unitPriceText: "£21 per pack",
  },
  {
    id: "HydraBoost Rehydration Sachets",
    title: "HydraBoost Rehydration Sachets",
    subtitle: "Provides fast-acting relief for throat discomfort",
    image: productImg10,
    isPrescriptionOnly: false,
    savingsText: "5.53",
    reviewCount: 9403,
    price: 6,
    originalPrice: 10,
    weightText: "10 Tablets",
    unitPriceText: "£14 per pack",
  },
  {
    id: "Rehydra Oral Solution",
    title: "Rehydra Oral Solution",
    subtitle: "owerful menthol lozenges to clear the throat and ease coughing",
    image: productImg5,
    isPrescriptionOnly: false,
    savingsText: "5.53",
    reviewCount: 9403,
    price: 9,
    originalPrice: 14,
    weightText: "10 Lozenges",
    unitPriceText: "£12 per pack",
  },
  {
    id: "Orlistat 120mg Capsules",
    title: "Orlistat 120mg Capsules",
    subtitle: "Helps block fat absorption to support weight loss",
    image: productImg6,
    isPrescriptionOnly: true,
    // savingsText: "5.53",
    reviewCount: 9403,
    price: 29,
    // originalPrice: 10,
    weightText: "84 capsules",
    unitPriceText: "£0.36 per capsule",
  },
  {
    id: "Electrolyte Plus Solution",
    title: "Electrolyte Plus Solution",
    subtitle: "Soothes sore throats and relieves irritation",
    image: productImg7,
    isPrescriptionOnly: false,
    // savingsText: "5.53",
    reviewCount: 9403,
    price: 10,
    // originalPrice: 10,
    weightText: "15g",
    unitPriceText: "£18 per 100g",
  },
  {
    id: "Anadin Extra 500mg",
    title: "Anadin Extra 500mg",
    subtitle: "Helps relieve headaches, migraines, and muscle pain",
    image: productImg8,
    isPrescriptionOnly: false,
    savingsText: "9.54",
    reviewCount: 9403,
    price: 9,
    originalPrice: 14,
    weightText: "10 Tablets",
    unitPriceText: "£14 per pack",
  },
  {
    id: "Mysimba (Naltrexone / Bupropion) Tablets",
    title: "Mysimba (Naltrexone / Bupropion) Tablets",
    subtitle: "Supports weight loss by reducing cravings and appetite",
    image: productImg9,
    isPrescriptionOnly: true,
    savingsText: "8.63",
    reviewCount: 9403,
    price: 11,
    originalPrice: 15,
    weightText: "112 tablets",
    unitPriceText: "£0.85 per tablet",
  },
  
];


// all condition 

// process data 
export const processData: ProcessData[]= [
  {
  id: "01",
  heading: "Pick Your Condition",
  desc: "Choose from a wide range of health conditions that match your needs.",
},
{
  id:"02",
  heading:"Answer a Few Questions",
  desc:"Fill out a short online questionnaire so our doctors understand your health.",
},
{
  id:"03",
  heading:"Schedule Appointment",
  desc:"Book a convenient time to consult with our healthcare experts.",
},
{
  id:"04",
  heading:"Receive Expert Care",
  desc:"Get your treatment plan, prescription, and medicines delivered securely.",
}
]

// Health Condition Data 
export const optionA: HealthConditionData[] = [
  {
    slug:"Acid Reflux & Heartburn",
    name:"Acid Reflux & Heartburn",
    desc:"A burning sensation in the chest caused by stomach acid moving into the esophagus.",
    isNHS:false
  },
  {
    slug:"Acne",
    name:"Acne",
    desc:"Skin condition causing pimples and blackheads due to clogged pores.",
    isNHS:true,
  },
  {
    slug:"Altitude",
    name:"Altitude",
    desc:"The height above sea level, affecting oxygen levels and breathing.",
    isNHS:true,
  },
  {
    slug:"Angina",
    name:"Angina",
    desc:"Chest pain from reduced blood flow to the heart, often triggered by exertion or stress.",
    isNHS:false,
  },
  {
    slug:"Anxiety",
    name:"Anxiety",
    desc:"A feeling of worry, nervousness, or unease, often about an imminent event or uncertain outcome.",
    isNHS:false,
  },
  {
    slug:"Asthma",
    name:"Asthma",
    desc:"A condition that narrows airways causing difficulty breathing, often triggered by allergens.",
    isNHS:true,
  },
  {
    slug:"Athlete's Foot",
    name:"Athlete's Floot",
    desc:"A fungal infaction that causes itching, redness, and peeling on the feet, commonly between the toes.",
    isNHS:false,
  }, 
]

export const optionB: HealthConditionData[] = [
  {
    slug:"Bacterial Vaginose",
    name:"Bacterial Vaginosis",
    desc:"An imbalance of natural bacteria in the vagina, causing unusual discharge, odor, and irritation.",
    isNHS:true,
  },
  {
    slug:"Bruising",
    name:"Bruising",
    desc:"Discoloration of the skin caused by bleeding under the skin, often due to injury or trauma.",
    isNHS:true,
  }
]

export const optionC: HealthConditionData[] = [
  {
    slug:"Chesty Cough",
    name:"Chesty Cough",
    desc:"An imbalance of natural bacteria in the vagina, causing unusual discharge, odor, and irritation.",
    isNHS:false,
  },
  {
    slug:"Chlamydia",
    name:"Chlamydia",
    desc:"Discoloration of the skin caused by  bleeding under the skin, often due to injury or trama.",
    isNHS:false,
  },
  {
    slug:"Cold & Flu",
    name:"Cold & Flu",
    desc:"When it cause redness, swelling, warmth, and pus",
    isNHS:true,
  },
  {
    slug:"Cold Sores",
    name:"Cold Sores",
    desc:"A viral infection causing a painful rash, shingles is triggered by the reactivation of the chickenpox virus.",
    isNHS:false,
  },
  {
    slug:"Constipation",
    name:"Constipation",
    desc:"Sinus inflammation from infection or allergies, causing facial plain and congestion.",
    isNHS:false,
  },
  {
    slug:"Cystits (UTI)",
    name:"Cystits (UTI)",
    desc:"Urinary infection causing pain or burning during urination."
  },
  
]

export const optionD:HealthConditionData[] = [
  {
    slug:"Dental Care",
    name:"Dental Care",
    desc:"Sinus inflammation from infection or allergies, causing facial pain and congestion.",
    isNHS:false,
  },
  {
    slug:"Diabetes",
    name:"Diabetes (Type 2)",
    desc:"A common condition maked by pain, irritation, or scratchiness in the throat. ",
    isNHS:false,
  },
  {
    slug:"Diarrhoea",
    name:"Diarrhoea",
    desc:"urinary infection causing pain or burning durig urination.",
    isNHS:false,
  },
   {
    slug:"Diarrhoea",
    name:"Diarrhoea",
    desc:"urinary infection causing pain or burning durig urination.",
    isNHS:false,
  },
  {
    slug:"Dry Eye",
    name:"Dry Eye",
    desc:"Sinus inflammation from infection or allergies, causing facial pain and congestion.",
    isNHS:false,
  },
  {
    slug:"Dry Cough",
    name:"Dry Cough",
    desc:"A common condition marked by pain, irritation, or scratchiness in the throat.",
    isNHS:true,
  },
  {
    slug:"Dry Skin",
    name:"Dry Skin",
    desc:"Urinary infecion causing pain or burning during urination",
    isNHS:false,
  },
  {
    slug:"Diarrhoea",
    name:"Diarrhoea",
    desc:"Urinary infection causing pain or burning during urination.",
    isNHS:false,
  },
]

export const allAlpabetGroups:AllAlphacetGroups[] = [
  { latter:"A", data:"optionA"},
  { latter:"B", data:"optionB"},
  { latter:"C", data:"optionC"},
  { latter:"D", data:"optionD"},
  
];