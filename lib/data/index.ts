import { patient1, patient2, patient3 } from "@/data/assets";
import { NavLink, Patients, Pharmacy } from "../types";

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