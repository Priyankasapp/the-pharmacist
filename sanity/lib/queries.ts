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
  *[_type == "product" && slug.current != $slug && defined(image.asset)]
    | order(_createdAt desc)[0...8] {
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

// Featured products
export const featuredProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc)[0...8] {
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

export const healthConditionsQuery = groq`
  *[_type == "healthCondition"] | order(_createdAt asc) {
    _id,
    name,
    "id": id.current,
    desc,
    isNHS
  }
`;

// Normalize plugin fields and legacy SEO values into the plugin's expected shape.
const seoProjection = `
  "title": coalesce(seo.title, seo.metaTitle, metaTitle),
  "description": coalesce(seo.description, seo.metaDescription, metaDescription),
  "metaImage": coalesce(seo.metaImage, seo.ogImage, ogImage),
  "keywords": seo.keywords,
  "canonicalUrl": seo.canonicalUrl,
  "robots": {
    "noIndex": coalesce(
      seo.robots.noIndex,
      seo.noIndex,
      noIndex,
      select(defined(seo.robots.index) => !seo.robots.index)
    ),
    "noFollow": coalesce(
      seo.robots.noFollow,
      select(defined(seo.robots.follow) => !seo.robots.follow)
    ),
    "noTranslate": seo.robots.noTranslate,
    "noImageIndex": seo.robots.noImageIndex
  },
  "openGraph": seo.openGraph {
    title,
    description,
    url,
    siteName,
    type,
    imageType,
    image,
    imageUrl
  },
  "twitter": seo.twitter {
    card,
    title,
    description,
    site,
    creator,
    imageType,
    image,
    imageUrl
  }
`;

// Sitemap queries
export const sitemapProductsQuery = groq`
  *[
    _type == "product" &&
    defined(slug.current) &&
    seo.robots.noIndex != true &&
    seo.robots.index != false &&
    seo.noIndex != true &&
    noIndex != true
  ] {
    "slug": slug.current,
    "_updatedAt": _updatedAt
  }
`;

export const sitemapHealthConditionsQuery = groq`
  *[
    _type == "healthCondition" &&
    defined(id.current) &&
    seo.robots.noIndex != true &&
    seo.robots.index != false &&
    seo.noIndex != true
  ] {
    "slug": id.current,
    "_updatedAt": _updatedAt
  }
`;

// Product SEO
export const productSeoQuery = groq`
  *[
    _type == "product" &&
    lower(slug.current) in $slugCandidates
  ][0] {
    name,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "seo": {
      ${seoProjection}
    }
  }
`;

// Complete product details
export const productBySlugQuery = groq`
  *[
    _type == "product" &&
    lower(slug.current) in $slugCandidates
  ][0] {
    _id,
    name,
    subtitle,
    "slug": slug.current,
    description,

    "imageUrl": image.asset->url,

    gallery[] {
      "imageUrl": image.asset->url,
      label
    },

    price,
    originalPrice,
    unitInfo,

    prescriptionOnly,
    inStock,

    rating,
    reviewCount,

    "brandName": brand->title,
    "categoryName": category->name,

    strengths[] {
      _key,
      label,
      price
    },

    packSizes[] {
      _key,
      label,
      quantity,
      price,
      originalPrice
    },

    deliveryOptions[] {
      _key,
      type,
      time,
      cost
    },

    productInformation[] {
      _key,
      title,
      content
    },

    "seo": {
      ${seoProjection}
    }
  }
`;

// Health condition details
export const conditionBySlugQuery = groq`
  *[
    _type == "healthCondition" &&
    id.current == $slug
  ][0] {
    _id,
    name,
    "slug": id.current,
    desc,
    heroDescription,
    "headerImageUrl": headerImage.asset->url,

    steps[] {
      stepNumber,
      title,
      description
    },

    isNHS,

    "seo": {
      ${seoProjection}
    }
  }
`;

// Health condition SEO
export const healthConditionSeoQuery = groq`
  *[
    _type == "healthCondition" &&
    id.current == $slug
  ][0] {
    name,
    desc,
    "slug": id.current,

    "seo": {
      ${seoProjection}
    }
  }
`;

export const SPECIALISTS_QUERY = defineQuery(`
  *[_type == "specialist"] | order(name asc) {
    _id,
    name,
    "imgSrc": image.asset->url,
    role,
    registration,
    description
  }
`);

export const EXPORT_CARS_QUERY = defineQuery(`
  *[_type == "exportCard"] | order(_createdAt asc) {
    _id,
    title,
    desc,
    "img": img.asset->url,
    isnhs
  }
`);

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