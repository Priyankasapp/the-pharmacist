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

export const RELATED_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && slug.current != $slug && defined(image.asset)] | order(_createdAt desc)[0...8] {
    "id": _id,
    "slug": slug.current,
    "title": coalesce(title, name),
    "subtitle": coalesce(subtitle, description, ""),
    "image": image.asset->url,
    "isPrescriptionOnly": prescriptionOnly,
    "reviewCount": coalesce(reviewCount, 0),
    price,
    originalPrice,
    "weightText": unitInfo,
    "unitPriceText": ""
  }
`);

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



export const TREATMENTS_QUERY = defineQuery(`
  *[_type == "treatment"] | order(_createdAt asc) {
    _id,
    title,
    "img": img.asset->url,
    condition
  }
`);


export const ARTICLES_QUERY = defineQuery(`
  *[_type == "article"] | order(_createdAt desc) {
    _id,
    title,
    category,
    desc,
    "img": img.asset->url
  }
`);

export const PATIENT_REVIEWS_QUERY = defineQuery(`
  *[_type == "patientReview"] | order(order asc, _createdAt desc) {
    "id": _id,
    name,
    title,
    description,
    rating,
    "imgSrc": imgSrc.asset->url
  }
`);
