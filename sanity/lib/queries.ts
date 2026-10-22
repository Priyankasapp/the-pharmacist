import { defineQuery, groq } from "next-sanity";

export const categoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    "slug": slug.current
  }
`;

export const brandsQuery = groq`
  *[_type == "brand"] | order(title asc) {
    _id,
    "name": title,
    "slug": slug.current
  }
`;

export const productsQuery = groq`
  *[_type == "product"
    && price >= $minPrice
    && price <= $maxPrice
    && (
      count($categoryIds) == 0 ||
      count((categories[]->_id)[@ in $categoryIds]) > 0
    )
  ] | order(_createdAt desc) {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    price,
    originalPrice,
    savingsText,
    weightText,
    unitPriceText,
    reviewCount,
    isPrescriptionOnly,
    "image": image.asset->url,
    "categories": categories[]->{ _id, name, "slug": slug.current }
  }
`;

export const shopProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    originalPrice,
    unitInfo,
    prescriptionOnly,
    rating,
    reviewCount,
    "image": image.asset->url,
    "brandName": brand->title,
    "brandId": brand->_id,
    "categoryName": category->name,
    "categoryId": category->_id
  }
`;

// feature Product Query

export const featuredProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc)[0...8]{
    _id,
    title,
    subtitle,
    "slug":slug.current,
    price,
    originalPrice,
    savingsText,
    weightText,
    unitPriceText,
    reviewCount,
    isPrescriptionOnly,
    "image":image.asset->url,
    "categories":categories[]->{_id, name, "slug":slug.current}
  }
`;

export const healthConditionsQuery = groq`
  *[_type == "healthCondition"]
  | order(_createdAt asc) {
    _id,
    name,
    "id": id.current,
    desc,
    isNHS
  }
`;

export const SPECIALISTS_QUERY = defineQuery(
  `
  *[_type == "specialist"] | order(name asc){
  _id,
  name,
  "imgSrc": image.asset->url,
  role,
  registration,
  description
  }
  `
)

export const EXPORT_CARS_QUERY =  defineQuery(`
  *[_type== "exportCard"] | order(_createdAt asc){
    _id,
    title,
    desc,
    "img":img.asset->url,
    isnhs
  }
  `)