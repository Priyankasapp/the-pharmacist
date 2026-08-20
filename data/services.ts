import { ServiceColumn } from "@/types/type";
import nhs from "../public/imaegs/nhs.png"
import privatePharmacy from "../public/imaegs/private-pharmacy.svg"
import onlineDoctor from "../public/imaegs/online-doctor.svg"
export const SERVICES_MENU: ServiceColumn[] = [
  {
    id: "nhs",
    label: "NHS SERVICES",
    logo: nhs, 
    groups: [
      {
        title: "NHS Pharmacy First",
        href: "/services/nhs-pharmacy-first",
        links: [
          { label: "Acute Sore Throat", href: "/services/acute-sore-throat" },
          { label: "Acute Sinusitis", href: "/services/acute-sinusitis" },
          { label: "Acute Otitis Media", href: "/services/acute-otitis-media" },
        ],
      },
    ],
    viewAllHref: "/services/nhs",
  },
  {
    id: "private",
    label: "PRIVATE PHARMACY SERVICES",
    logo: privatePharmacy,
    groups: [
      {
        title: "Skin & Scalp Conditions",
        href: "/services/skin-scalp",
        links: [
          { label: "Colic", href: "/services/colic" },
          { label: "Constipation", href: "/services/constipation" },
          { label: "Diarrhoea", href: "/services/diarrhoea" },
        ],
      },
      {
        title: "Vaccinations",
        href: "/services/vaccinations",
        links: [
          { label: "Colic", href: "/services/colic" },
          { label: "Constipation", href: "/services/constipation" },
          { label: "Diarrhoea", href: "/services/diarrhoea" },
        ],
      },
      {
        title: "Bladder & Intimate Health",
        href: "/services/bladder-intimate-health",
        links: [
          { label: "Colic", href: "/services/colic" },
          { label: "Constipation", href: "/services/constipation" },
          { label: "Diarrhoea", href: "/services/diarrhoea" },
        ],
      },
    ],
    viewAllHref: "/services/private",
  },
  {
    id: "online-doctor",
    label: "ONLINE DOCTOR",
    logo:onlineDoctor,
    groups: [
      {
        title: "Acne",
        href: "/services/acne",
        links: [
          { label: "Colic", href: "/services/colic" },
          { label: "Constipation", href: "/services/constipation" },
          { label: "Diarrhoea", href: "/services/diarrhoea" },
        ],
      },
      {
        title: "Eczema & Dermatitis",
        href: "/services/eczema-dermatitis",
        links: [
          { label: "Colic", href: "/services/colic" },
          { label: "Constipation", href: "/services/constipation" },
          { label: "Diarrhoea", href: "/services/diarrhoea" },
        ],
      },
      {
        title: "Rosacea",
        href: "/services/rosacea",
        links: [
          { label: "Colic", href: "/services/colic" },
          { label: "Constipation", href: "/services/constipation" },
          { label: "Diarrhoea", href: "/services/diarrhoea" },
        ],
      },
    ],
    viewAllHref: "/services/online-doctor",
  },
];