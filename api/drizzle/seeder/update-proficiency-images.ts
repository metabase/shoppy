/**
 * One-off script to update existing proficiency DB products with the correct image filenames.
 * Assigns images per category, cycling through thematically appropriate illustrations.
 * Run with: npx tsx api/drizzle/seeder/update-proficiency-images.ts
 */
import { sql } from "drizzle-orm"
import { db, pg } from "../../src/utils/db"

// Images grouped by category, in thematic order
const IMAGES_BY_CATEGORY: Record<number, string[]> = {
  // Leadership Training (14)
  14: [
    "motivation-1-22.png",
    "team-meeting-1-20.png",
    "presentation-1-69.png",
    "motivation-7-37.png",
    "team-presentation-1-99.png",
    "team-presentation-3-48.png",
    "team-presentation-4-68.png",
    "team-presentation-6-18.png",
    "creative-process-11.png",
    "problem-solving-5-71.png",
    "rocket-boy-26.png",
    "analyst-13.png",
    "financial-analyst-76.png",
  ],
  // Technical Skills (15)
  15: [
    "data-analysis-1-60.png",
    "report-analysis-4-77.png",
    "coding-2-31.png",
    "coding-29.png",
    "coding-3-24.png",
    "coding-5-33.png",
    "artificial-intelligence-1-95.png",
    "report-analysis-5-45.png",
    "report-analysis-8.png",
    "ui-design-90.png",
    "user-interface-1-72.png",
  ],
  // Soft Skills (16)
  16: [
    "facetime-3-68.png",
    "conference-52.png",
    "presentation-3-28.png",
    "presentation-4-70.png",
    "customer-service-71.png",
    "creative-process-11.png",
    "problem-solving-5-71.png",
    "coworking-31.png",
    "team-meeting-1-20.png",
    "motivation-7-37.png",
    "analyst-13.png",
    "salesman-100.png",
  ],
  // Compliance (17)
  17: [
    "authentication-1-5.png",
    "cybersecurity-1-98.png",
    "quality-check-57.png",
    "report-analysis-8.png",
    "report-analysis-5-45.png",
    "analyst-13.png",
    "financial-analyst-76.png",
    "problem-solving-5-71.png",
    "coding-5-33.png",
    "report-analysis-4-77.png",
  ],
  // Health & Wellness (18)
  18: [
    "dream-1-2.png",
    "coworking-31.png",
    "meditation-15.png",
    "motivation-1-22.png",
    "motivation-7-37.png",
    "rocket-boy-26.png",
    "creative-process-11.png",
    "problem-solving-5-71.png",
    "team-meeting-1-20.png",
    "facetime-3-68.png",
  ],
  // Marketing (19)
  19: [
    "marketing-campaign-78.png",
    "content-creation-92.png",
    "marketing-50.png",
    "seo-1-33.png",
    "salesman-100.png",
    "presentation-4-70.png",
    "team-presentation-1-99.png",
    "rocket-boy-26.png",
    "user-interface-1-72.png",
    "financial-analyst-76.png",
    "report-analysis-4-77.png",
  ],
}

async function updateProficiencyImages() {
  console.log("Fetching proficiency products from DB...")

  const rows = await db.execute(
    sql`SELECT id, title, category_id FROM products WHERE shop_id = 4 ORDER BY category_id, id`
  )

  const products = (rows as { rows: { id: number; title: string; category_id: number }[] }).rows
  console.log(`Found ${products.length} proficiency products`)

  // Track index per category for cycling
  const categoryIndex: Record<number, number> = {}

  let updated = 0
  let skipped = 0

  for (const { id, title, category_id } of products) {
    const images = IMAGES_BY_CATEGORY[category_id]
    if (!images) {
      console.warn(`⚠️  No images for category ${category_id} (product "${title}", id=${id}) — skipping`)
      skipped++
      continue
    }

    const idx = categoryIndex[category_id] ?? 0
    const imageName = images[idx % images.length]
    categoryIndex[category_id] = idx + 1

    const imageUrl = `/images/proficiency/${imageName}`
    await db.execute(
      sql`UPDATE products SET image_url = ${imageUrl} WHERE id = ${id}`
    )
    console.log(`  ✓ [cat ${category_id}] "${title}" → ${imageUrl}`)
    updated++
  }

  console.log(`\n✅ Updated ${updated} products with new image paths`)
  if (skipped > 0) {
    console.log(`⚠️  Skipped ${skipped} products`)
  }

  await pg.end()
}

updateProficiencyImages()
