import { ServiceColumn } from "@/types/type";
import { nhs, onlineDoctor, privatePharmacy } from "./assets";

export const SERVICES_MENU: ServiceColumn[] = [
  {
    id: "nhs",
    label: "NHS SERVICES",
    logo: nhs.src,
    groups: [
      {
        title: "NHS Pharmacy First",
        href: "/services/nhs-pharmacy-first",
        links: [
          { label: "Acute Sore Throat", href: "/all-conditions/Sore Throat" },
          { label: "Acute Sinusitis", href: "/all-conditions" },
          { label: "Acute Otitis Media", href: "/all-conditions" },
        ],
      },
    ],
    viewAllHref: "/all-conditions",
  },
  {
    id: "private",
    label: "PRIVATE PHARMACY SERVICES",
    logo: privatePharmacy.src,
    groups: [
      {
        title: "Skin & Scalp Conditions",
        href: "/all-conditions",
        links: [
          { label: "Colic", href: "/all-conditions/Sore Throat" },
          { label: "Constipation", href: "/all-conditions/Sore Throat" },
          { label: "Diarrhoea", href: "/all-conditions/Sore Throat" },
        ],
      },
      {
        title: "Vaccinations",
        href: "/all-conditions",
        links: [
          { label: "Colic", href: "/all-conditions/Sore Throat" },
          { label: "Constipation", href: "/all-conditions/Sore Throat" },
          { label: "Diarrhoea", href: "/all-conditions/Sore Throat" },
        ],
      },
      {
        title: "Bladder & Intimate Health",
        href: "/all-conditions",
        links: [
          { label: "Colic", href: "/all-conditions/Sore Throat" },
          { label: "Constipation", href: "/all-conditions/Sore Throat" },
          { label: "Diarrhoea", href: "/all-conditions/Sore Throat" },
        ],
      },
    ],
    viewAllHref: "/all-conditions",
  },
  {
    id: "online-doctor",
    label: "ONLINE DOCTOR",
    logo:onlineDoctor.src,
    groups: [
      {
        title: "Acne",
        href: "/all-conditions",
        links: [
          { label: "Colic", href: "/all-conditions/Sore Throat" },
          { label: "Constipation", href: "/all-conditions/Sore Throat" },
          { label: "Diarrhoea", href: "/all-conditions/Sore Throat" },
        ],
      },
      {
        title: "Eczema & Dermatitis",
        href: "/all-conditions",
        links: [
          { label: "Colic", href: "/all-conditions/Sore Throat" },
          { label: "Constipation", href: "/all-conditions/Sore Throat" },
          { label: "Diarrhoea", href: "/all-conditions/Sore Throat" },
        ],
      },
      {
        title: "Rosacea",
        href: "/services/rosacea",
        links: [
          { label: "Colic", href: "/all-conditions/Sore Throat" },
          { label: "Constipation", href: "/all-conditions/Sore Throat" },
          { label: "Diarrhoea", href: "/all-conditions/Sore Throat" },
        ],
      },
    ],
    viewAllHref: "/all-conditions",
  },
];