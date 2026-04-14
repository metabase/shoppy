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
// Categories: Punderful Prints (5), Pixel <3 (6), Adventure (7), Dystopian Dreams (8)
const STITCH_PRODUCTS: CuratedProduct[] = [
  // Punderful Prints (categoryId: 5)
  {
    title: "I'm A Fungi",
    description:
      "A cheerful mushroom character that proves you're a fun guy at any party.",
    categoryId: 5,
    imageUrl: "/images/stitch/1.png",
  },
  {
    title: "Taco 'Bout Awesome",
    description:
      "Because sometimes you just need a taco to do the talking for you.",
    categoryId: 5,
    imageUrl: "/images/stitch/2.png",
  },
  {
    title: "Nacho Average Tee",
    description:
      "Stand out from the crowd with this cheesy but lovable nacho design.",
    categoryId: 5,
    imageUrl: "/images/stitch/3.png",
  },
  // Pixel <3 (categoryId: 6)
  {
    title: "8-Bit Sunset",
    description:
      "A retro pixel-art sunset that brings nostalgic vibes to any outfit.",
    categoryId: 6,
    imageUrl: "/images/stitch/1.png",
  },
  {
    title: "Retro Game Over",
    description:
      "Classic arcade-style Game Over screen for true retro gaming fans.",
    categoryId: 6,
    imageUrl: "/images/stitch/2.png",
  },
  {
    title: "Pixel Heart",
    description:
      "The iconic pixelated heart — a timeless symbol of 8-bit love.",
    categoryId: 6,
    imageUrl: "/images/stitch/3.png",
  },
  // Adventure (categoryId: 7)
  {
    title: "Mountain Summit",
    description:
      "Reach new heights with this minimalist mountain peak illustration.",
    categoryId: 7,
    imageUrl: "/images/stitch/1.png",
  },
  {
    title: "Lost In The Wild",
    description:
      "Embrace the call of the wilderness with this hand-drawn forest design.",
    categoryId: 7,
    imageUrl: "/images/stitch/2.png",
  },
  {
    title: "Desert Wanderer",
    description:
      "Endless dunes and open skies for those who wander but are not lost.",
    categoryId: 7,
    imageUrl: "/images/stitch/3.png",
  },
  // Dystopian Dreams (categoryId: 8)
  {
    title: "Neon Cityscape 2084",
    description:
      "A cyberpunk skyline glowing with neon lights and towering megastructures.",
    categoryId: 8,
    imageUrl: "/images/stitch/1.png",
  },
  {
    title: "Digital Resistance",
    description:
      "Glitched typography and circuit patterns for the digital underground.",
    categoryId: 8,
    imageUrl: "/images/stitch/2.png",
  },
  {
    title: "Glitch In The Matrix",
    description: "Reality is broken — and this design proves it with style.",
    categoryId: 8,
    imageUrl: "/images/stitch/3.png",
  },
]

// Luminara Beauty (shopId 3) - Beauty products
// Categories: Skincare (9), Hair Care (10), Makeup (11), Bath and Body (12), Sun Care (13)
const LUMINARA_PRODUCTS: CuratedProduct[] = [
  // Skincare (categoryId: 9)
  {
    title: "Hydrating Rose Serum",
    description:
      "Lightweight serum infused with rosehip oil to deeply hydrate and brighten skin.",
    categoryId: 9,
    imageUrl: "/images/luminara/1.png",
  },
  {
    title: "Vitamin C Brightening Cream",
    description:
      "Antioxidant-rich moisturizer that evens skin tone and boosts radiance.",
    categoryId: 9,
    imageUrl: "/images/luminara/2.png",
  },
  {
    title: "Gentle Foaming Cleanser",
    description:
      "Soap-free cleanser that removes impurities without stripping natural moisture.",
    categoryId: 9,
    imageUrl: "/images/luminara/1.png",
  },
  // Hair Care (categoryId: 10)
  {
    title: "Argan Oil Repair Shampoo",
    description:
      "Nourishing shampoo that restores damaged hair with pure Moroccan argan oil.",
    categoryId: 10,
    imageUrl: "/images/luminara/2.png",
  },
  {
    title: "Deep Conditioning Hair Mask",
    description:
      "Intensive weekly treatment that transforms dry, brittle hair into silk.",
    categoryId: 10,
    imageUrl: "/images/luminara/1.png",
  },
  {
    title: "Keratin Smoothing Treatment",
    description:
      "Professional-grade keratin formula that eliminates frizz for up to 8 weeks.",
    categoryId: 10,
    imageUrl: "/images/luminara/2.png",
  },
  // Makeup (categoryId: 11)
  {
    title: "Velvet Matte Lipstick",
    description:
      "Long-lasting matte lipstick with a velvety finish in rich, bold shades.",
    categoryId: 11,
    imageUrl: "/images/luminara/1.png",
  },
  {
    title: "Luminous Foundation",
    description:
      "Buildable coverage foundation that gives skin a natural, dewy glow.",
    categoryId: 11,
    imageUrl: "/images/luminara/2.png",
  },
  {
    title: "Smoky Eye Palette",
    description:
      "Twelve curated eyeshadow shades from subtle shimmer to dramatic smoky hues.",
    categoryId: 11,
    imageUrl: "/images/luminara/1.png",
  },
  // Bath and Body (categoryId: 12)
  {
    title: "Lavender Epsom Salt Soak",
    description:
      "Relaxing bath soak with pure lavender essential oil and mineral-rich salts.",
    categoryId: 12,
    imageUrl: "/images/luminara/2.png",
  },
  {
    title: "Coconut Milk Body Lotion",
    description:
      "Rich body lotion with coconut milk and shea butter for all-day moisture.",
    categoryId: 12,
    imageUrl: "/images/luminara/1.png",
  },
  {
    title: "Eucalyptus Shower Gel",
    description:
      "Invigorating shower gel with eucalyptus and mint for an energizing cleanse.",
    categoryId: 12,
    imageUrl: "/images/luminara/2.png",
  },
  // Sun Care (categoryId: 13)
  {
    title: "SPF 50 Daily Moisturizer",
    description:
      "Lightweight daily moisturizer with broad-spectrum SPF 50 protection.",
    categoryId: 13,
    imageUrl: "/images/luminara/1.png",
  },
  {
    title: "After-Sun Aloe Gel",
    description:
      "Cooling aloe vera gel that soothes and repairs sun-exposed skin.",
    categoryId: 13,
    imageUrl: "/images/luminara/2.png",
  },
  {
    title: "Tinted Mineral Sunscreen",
    description:
      "Mineral sunscreen with a subtle tint that blends seamlessly into any skin tone.",
    categoryId: 13,
    imageUrl: "/images/luminara/1.png",
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
