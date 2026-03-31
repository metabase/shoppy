/**
 * One-off script to update existing proficiency DB products with new image filenames.
 * Run with: npx tsx api/drizzle/seeder/update-proficiency-images.ts
 */
import { sql } from "drizzle-orm"
import { db, pg } from "../../src/utils/db"

const PROFICIENCY_IMAGES = [
  "analyst-13.png",
  "artificial-intelligence-1-95.png",
  "authentication-1-5.png",
  "coding-2-31.png",
  "coding-29.png",
  "coding-3-24.png",
  "coding-5-33.png",
  "conference-52.png",
  "coworking-31.png",
  "creative-process-11.png",
  "customer-service-71.png",
  "data-analysis-1-60.png",
  "facetime-3-68.png",
  "financial-analyst-76.png",
  "marketing-campaign-78.png",
  "meditation-15.png",
  "motivation-1-22.png",
  "motivation-7-37.png",
  "presentation-1-69.png",
  "presentation-3-28.png",
  "presentation-4-70.png",
  "problem-solving-5-71.png",
  "quality-check-57.png",
  "report-analysis-4-77.png",
  "report-analysis-5-45.png",
  "report-analysis-8.png",
  "rocket-boy-26.png",
  "salesman-100.png",
  "seo-1-33.png",
  "team-meeting-1-20.png",
  "team-presentation-1-99.png",
  "team-presentation-3-48.png",
  "team-presentation-4-68.png",
  "team-presentation-6-18.png",
  "ui-design-90.png",
  "user-interface-1-72.png",
]

async function updateProficiencyImages() {
  console.log("Fetching proficiency products from DB...")

  const rows = await db.execute(
    sql`SELECT id FROM products WHERE shop_id = 4`
  )

  const productIds = (rows as { rows: { id: number }[] }).rows.map((r) => r.id)
  console.log(`Found ${productIds.length} proficiency products`)

  for (const id of productIds) {
    const imageName = PROFICIENCY_IMAGES[Math.floor(Math.random() * PROFICIENCY_IMAGES.length)]
    await db.execute(
      sql`UPDATE products SET image_url = ${`/images/proficiency/${imageName}`} WHERE id = ${id}`
    )
  }

  console.log(`✅ Updated ${productIds.length} products with new image paths`)
  await pg.end()
}

updateProficiencyImages()
