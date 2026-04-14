import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { products } from "../../src/schema/products"

interface CuratedProduct {
  title: string
  description: string
  categoryId: number
  imageUrl: string
}

// Pug & Play (shopId 1) - Pug fashion store
// Categories: Hats (1), Hoodies (2), Shirts (3), Accessories (4)
const PUG_PRODUCTS: CuratedProduct[] = [
  // Hats (categoryId: 1)
  {
    title: "Good Boy Berret",
    description: "A classic beret for the pug who takes their good boy status seriously.",
    categoryId: 1,
    imageUrl: "/images/pug/good-boy-berret.jpg",
  },
  {
    title: "Le Pug Berret",
    description: "Très chic. For the pug with a flair for the dramatic and a nose for fashion.",
    categoryId: 1,
    imageUrl: "/images/pug/le-pug-berret.jpg",
  },
  {
    title: "Yellow Hat",
    description: "Bright, bold, and impossible to ignore — just like your pug.",
    categoryId: 1,
    imageUrl: "/images/pug/yellow-hat.jpg",
  },
  // Hoodies (categoryId: 2)
  {
    title: "Yellow Raincoat",
    description: "No rain can dampen this pug's style. Puddle-ready and paw-fectly waterproof.",
    categoryId: 2,
    imageUrl: "/images/pug/yellow-raincoat.jpg",
  },
  {
    title: "Gray Hoodie",
    description: "A cozy everyday hoodie for the pug who likes to keep it low-key.",
    categoryId: 2,
    imageUrl: "/images/pug/gray-hoodie.jpg",
  },
  // Shirts (categoryId: 3)
  {
    title: "Melange Sweater",
    description: "A refined knit for refined tastes. Your pug deserves nothing less.",
    categoryId: 3,
    imageUrl: "/images/pug/melange-sweater.jpg",
  },
  {
    title: "Banana Pajamas",
    description: "For the pug who believes every hour is nap hour. Soft, comfy, and a-peel-ing.",
    categoryId: 3,
    imageUrl: "/images/pug/banana-pajamas.jpg",
  },
  {
    title: "Denim Jacket",
    description: "Cool enough for any walk, tough enough for any adventure. Pug-approved.",
    categoryId: 3,
    imageUrl: "/images/pug/denim-jacket.jpg",
  },
  {
    title: "Yellow Hoodie",
    description: "Stay snug and stand out. This hoodie is basically sunshine in pug form.",
    categoryId: 3,
    imageUrl: "/images/pug/yellow-hoodie.jpg",
  },
  {
    title: "Pink Shirt",
    description: "Pretty in pink — because your pug is always best dressed at the dog park.",
    categoryId: 3,
    imageUrl: "/images/pug/pink-shirt.jpg",
  },
  {
    title: "Striped Shirt",
    description: "Classic stripes for a timeless look. Effortlessly chic, tail-waggingly good.",
    categoryId: 3,
    imageUrl: "/images/pug/striped-shirt.jpg",
  },
  {
    title: "Rebel Berret",
    description: "Who says pugs play by the rules? This beret is for the rebel without a leash.",
    categoryId: 1,
    imageUrl: "/images/pug/rebel-berret.jpg",
  },
]

// theStitch (shopId 2) - T-shirt store
// Categories: White (5), Black (6), All-Over Print (7)
const STITCH_PRODUCTS: CuratedProduct[] = [
  // White (categoryId: 5)
  {
    title: "Digital White",
    description: "Pure static meets clean canvas. A glitchy digital print on crisp white that looks like your screen just had a moment.",
    categoryId: 5,
    imageUrl: "/images/stitch/digital-white.jpg",
  },
  {
    title: "White Vaporwave",
    description: "Pastel grids and corrupted gradients on white. Nostalgia for a future that never existed.",
    categoryId: 5,
    imageUrl: "/images/stitch/white-vaporwave.jpg",
  },
  // Black (categoryId: 6)
  {
    title: "Cyberpunk Black",
    description: "Neon circuits and corrupted code on black. For those who live in the cracks of the digital world.",
    categoryId: 6,
    imageUrl: "/images/stitch/cyberpunk-black.jpg",
  },
  {
    title: "Glitch Black",
    description: "Reality is buffering. A raw glitch aesthetic on black that makes it look like the matrix is breaking down.",
    categoryId: 6,
    imageUrl: "/images/stitch/glitch-black.jpg",
  },
  {
    title: "Pink Abstract Black",
    description: "Hot pink digital noise on black. Soft signals in a hard system.",
    categoryId: 6,
    imageUrl: "/images/stitch/pink-abstract-black.jpg",
  },
  {
    title: "Stripes Black",
    description: "Distorted digital stripes on black. Classic pattern, corrupted signal.",
    categoryId: 6,
    imageUrl: "/images/stitch/stripes-black.jpg",
  },
  // All-Over Print (categoryId: 7)
  {
    title: "City All-Over Print",
    description: "A glitched cityscape wrapping your whole body. Every pixel of this skyline has been through something.",
    categoryId: 7,
    imageUrl: "/images/stitch/city-all-over-print.jpg",
  },
  {
    title: "Digital All-Over Print",
    description: "Full-coverage digital chaos. No seam is safe from the glitch.",
    categoryId: 7,
    imageUrl: "/images/stitch/digital-all-over-print.jpg",
  },
  {
    title: "White Vaporwave",
    description: "Pastel grids and corrupted gradients on white. Nostalgia for a future that never existed.",
    categoryId: 6,
    imageUrl: "/images/stitch/white-vaporwave.jpg",
  },
  {
    title: "Pink Abstract Black",
    description: "Hot pink digital noise on black. Soft signals in a hard system.",
    categoryId: 6,
    imageUrl: "/images/stitch/pink-abstract-black.jpg",
  },
  {
    title: "Stripes Black",
    description: "Distorted digital stripes on black. Classic pattern, corrupted signal.",
    categoryId: 6,
    imageUrl: "/images/stitch/stripes-black.jpg",
  },
  {
    title: "Digital All-Over Print",
    description: "Full-coverage digital chaos. No seam is safe from the glitch.",
    categoryId: 6,
    imageUrl: "/images/stitch/digital-all-over-print.jpg",
  },
]

// Luminara Beauty (shopId 3) - Beauty products
// Categories: Creams (9), Serums (10), Make-up (11)
// First 6 (new products page): Anti-Wrinkle Cream, Day Cream, Day and Night Serums, Retinol Serum, Lip Maximizer, Salicylic Acid Serum
const LUMINARA_PRODUCTS: CuratedProduct[] = [
  {
    title: "Anti-Wrinkle Cream",
    description: "Visibly reduces fine lines and wrinkles with a blend of peptides and hyaluronic acid. Skin feels firmer from day one.",
    categoryId: 9,
    imageUrl: "/images/luminara/anti-wrinkle-cream.jpg",
  },
  {
    title: "Day Cream",
    description: "Lightweight daily moisturiser with SPF protection. Hydrates and shields through every hour of the day.",
    categoryId: 9,
    imageUrl: "/images/luminara/day-cream.jpg",
  },
  {
    title: "Day and Night Serums",
    description: "A complete duo — brightening serum for the day, restorative serum for the night. Round-the-clock skin care.",
    categoryId: 10,
    imageUrl: "/images/luminara/day-and-nigh-serums.jpg",
  },
  {
    title: "Retinol Serum",
    description: "Clinical-strength retinol that accelerates cell turnover and reduces the appearance of dark spots and lines.",
    categoryId: 10,
    imageUrl: "/images/luminara/retinol-serum.jpg",
  },
  {
    title: "Lip Maximizer",
    description: "Volumising lip gloss with a cooling effect. Fuller-looking lips, instantly.",
    categoryId: 11,
    imageUrl: "/images/luminara/lip-maximizer.jpg",
  },
  {
    title: "Salicylic Acid Serum",
    description: "Deep-pore exfoliant that clears breakouts and refines texture. Dermatologist-tested for sensitive skin.",
    categoryId: 10,
    imageUrl: "/images/luminara/salicylic-acid-serum.jpg",
  },
  {
    title: "Night Cream",
    description: "Rich overnight formula that repairs and replenishes while you sleep. Wake up to visibly softer, plumper skin.",
    categoryId: 9,
    imageUrl: "/images/luminara/night-cream.jpg",
  },
  {
    title: "Refreshing Gel",
    description: "A cooling, water-based gel that instantly hydrates and soothes. Ideal for oily or combination skin.",
    categoryId: 9,
    imageUrl: "/images/luminara/refreshing-gel.jpg",
  },
  {
    title: "Vitamin C Serum",
    description: "High-potency vitamin C that brightens dull skin and fades hyperpigmentation. Antioxidant protection in every drop.",
    categoryId: 10,
    imageUrl: "/images/luminara/vitamin-c-serum.jpg",
  },
  {
    title: "Powder Foundation",
    description: "Buildable matte coverage in a silky powder formula. Blurs imperfections and controls shine all day.",
    categoryId: 11,
    imageUrl: "/images/luminara/powder-foundation.jpg",
  },
  {
    title: "Night Cream",
    description: "Rich overnight formula that repairs and replenishes while you sleep. Wake up to visibly softer, plumper skin.",
    categoryId: 9,
    imageUrl: "/images/luminara/night-cream.jpg",
  },
  {
    title: "Refreshing Gel",
    description: "A cooling, water-based gel that instantly hydrates and soothes. Ideal for oily or combination skin.",
    categoryId: 9,
    imageUrl: "/images/luminara/refreshing-gel.jpg",
  },
  {
    title: "Vitamin C Serum",
    description: "High-potency vitamin C that brightens dull skin and fades hyperpigmentation. Antioxidant protection in every drop.",
    categoryId: 10,
    imageUrl: "/images/luminara/vitamin-c-serum.jpg",
  },
  {
    title: "Powder Foundation",
    description: "Buildable matte coverage in a silky powder formula. Blurs imperfections and controls shine all day.",
    categoryId: 11,
    imageUrl: "/images/luminara/powder-foundation.jpg",
  },
  {
    title: "Anti-Wrinkle Cream",
    description: "Visibly reduces fine lines and wrinkles with a blend of peptides and hyaluronic acid. Skin feels firmer from day one.",
    categoryId: 9,
    imageUrl: "/images/luminara/anti-wrinkle-cream.jpg",
  },
  {
    title: "Day Cream",
    description: "Lightweight daily moisturiser with SPF protection. Hydrates and shields through every hour of the day.",
    categoryId: 9,
    imageUrl: "/images/luminara/day-cream.jpg",
  },
  {
    title: "Day and Night Serums",
    description: "A complete duo — brightening serum for the day, restorative serum for the night. Round-the-clock skin care.",
    categoryId: 10,
    imageUrl: "/images/luminara/day-and-nigh-serums.jpg",
  },
  {
    title: "Retinol Serum",
    description: "Clinical-strength retinol that accelerates cell turnover and reduces the appearance of dark spots and lines.",
    categoryId: 10,
    imageUrl: "/images/luminara/retinol-serum.jpg",
  },
  {
    title: "Lip Maximizer",
    description: "Volumising lip gloss with a cooling effect. Fuller-looking lips, instantly.",
    categoryId: 10,
    imageUrl: "/images/luminara/lip-maximizer.jpg",
  },
]

// Proficiency Labs (shopId 4) - Training courses
// Categories: Leadership Training (14), Technical Skills (15), Soft Skills (16),
//             Compliance (17), Health & Wellness (18), Marketing (19)
const PROFICIENCY_PRODUCTS: CuratedProduct[] = [
  // Leadership Training (categoryId: 14)
  {
    title: "Leading Through Change",
    description: "Navigate organizational transformation",
    categoryId: 14,
    imageUrl: "/images/proficiency/motivation-1-22.png",
  },
  {
    title: "Building High-Performing Teams",
    description: "Maximize team performance",
    categoryId: 14,
    imageUrl: "/images/proficiency/team-meeting-1-20.png",
  },
  {
    title: "Strategic Thinking for Managers",
    description: "Align teams with organizational vision",
    categoryId: 14,
    imageUrl: "/images/proficiency/presentation-1-69.png",
  },
  // Technical Skills (categoryId: 15)
  {
    title: "Data Insights with Metabase",
    description: "Extract meaningful insights from data",
    categoryId: 15,
    imageUrl: "/images/proficiency/data-analysis-1-60.png",
  },
  {
    title: "Advanced Data Visualization",
    description: "Create compelling visual analytics",
    categoryId: 15,
    imageUrl: "/images/proficiency/report-analysis-4-77.png",
  },
  {
    title: "Cloud Computing Basics",
    description: "Modern infrastructure fundamentals",
    categoryId: 15,
    imageUrl: "/images/proficiency/coding-2-31.png",
  },
  // Soft Skills (categoryId: 16)
  {
    title: "Executive Communication",
    description: "Influence and persuade effectively",
    categoryId: 16,
    imageUrl: "/images/proficiency/facetime-3-68.png",
  },
  {
    title: "Negotiation Strategies",
    description: "Win-win outcomes every time",
    categoryId: 16,
    imageUrl: "/images/proficiency/conference-52.png",
  },
  {
    title: "Public Speaking Confidence",
    description: "Deliver powerful presentations",
    categoryId: 16,
    imageUrl: "/images/proficiency/presentation-3-28.png",
  },
  // Compliance (categoryId: 17)
  {
    title: "Data Privacy and GDPR",
    description: "Protect customer data, avoid penalties",
    categoryId: 17,
    imageUrl: "/images/proficiency/authentication-1-5.png",
  },
  {
    title: "Cybersecurity Awareness",
    description: "Defend against threats and breaches",
    categoryId: 17,
    imageUrl: "/images/proficiency/cybersecurity-1-98.png",
  },
  {
    title: "Regulatory Compliance Essentials",
    description: "Build compliance frameworks",
    categoryId: 17,
    imageUrl: "/images/proficiency/quality-check-57.png",
  },
  // Health & Wellness (categoryId: 18)
  {
    title: "Stress Management",
    description: "Build resilience at work",
    categoryId: 18,
    imageUrl: "/images/proficiency/dream-1-2.png",
  },
  {
    title: "Burnout Prevention Strategies",
    description: "Sustainable practices for the long run",
    categoryId: 18,
    imageUrl: "/images/proficiency/coworking-31.png",
  },
  {
    title: "Meditation and Mindfulness",
    description: "Reduce stress, improve focus",
    categoryId: 18,
    imageUrl: "/images/proficiency/meditation-15.png",
  },
  // Marketing (categoryId: 19)
  {
    title: "Digital Marketing Essentials",
    description: "Reach and engage your audience",
    categoryId: 19,
    imageUrl: "/images/proficiency/marketing-campaign-78.png",
  },
  {
    title: "Content Strategy and Creation",
    description: "Drive engagement and conversions",
    categoryId: 19,
    imageUrl: "/images/proficiency/content-creation-92.png",
  },
  {
    title: "Brand Building Strategies",
    description: "Build recognition and loyalty",
    categoryId: 19,
    imageUrl: "/images/proficiency/marketing-50.png",
  },
]

const ALL_PRODUCTS: CuratedProduct[] = [
  ...PUG_PRODUCTS,
  ...STITCH_PRODUCTS,
  ...LUMINARA_PRODUCTS,
  ...PROFICIENCY_PRODUCTS,
]

type ProductsInput = typeof products.$inferInsert

/**
 * Seeds curated products for all 4 shops.
 * Each category gets exactly 3 products.
 */
export async function generateProducts() {
  console.log("Generating products...")

  const categories = await db.query.productCategories.findMany({
    columns: { id: true, shopId: true },
  })

  const productsBatch: ProductsInput[] = ALL_PRODUCTS.map((product, i) => {
    const category = categories.find((cat) => cat.id === product.categoryId)
    if (!category) {
      throw new Error(
        `Category ${product.categoryId} not found for product "${product.title}"`,
      )
    }

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    return {
      id: i,
      title: product.title,
      description: product.description,
      price: faker.commerce.price(),
      categoryId: product.categoryId,
      discount: faker.number.int({ min: 0, max: 30 }).toString(),
      imageUrl: product.imageUrl,
      shopId: category.shopId,
      createdAt,
    }
  })

  if (productsBatch.length > 0) {
    await db.insert(products).values(productsBatch)
    console.log(`✅ Inserted ${productsBatch.length} products`)
  } else {
    console.log("⚠️ No products to insert (no valid categories or shops)")
  }
}
