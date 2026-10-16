import { groq } from "next-sanity";


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
    "brand": brand->title,
    "category": category->name
  }
`;