import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { productType } from "./productType";
import { brandType } from "./brandType";
import { exportSectionType } from "./exportSection";
import { healthCondition } from "./healthCondition";
import { specialistType } from "./specialist";
import { exportCardType } from "./exportCard";
import { treatmentType } from "./treatment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    productType,
    brandType,
    exportSectionType,
    healthCondition,
    specialistType,
    exportCardType,
    treatmentType,
    
  ],
};
