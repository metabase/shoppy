import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { people } from "../../src/schema/people"
import { getRandomEntity } from "./helpers/get-random-entity"

const PEOPLE_COUNT = 2500
const BATCH_SIZE = 500

type PeopleInput = typeof people.$inferInsert

/**
 * Generates more mock people for the database.
 */
export async function generatePeople() {
  console.log("Generating people...")

  const shops = await db.query.shops.findMany({ columns: { id: true } })
  const allPeople: PeopleInput[] = []

  for (let i = 0; i < PEOPLE_COUNT; i++) {
    const shop = getRandomEntity(shops)
    const shopId = shop.id

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    allPeople.push({
      id: i,
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      encryptedPassword: faker.internet.password(),
      name: faker.person.fullName(),
      city: faker.location.city(),
      longitude: faker.location.longitude().toString(),
      state: faker.location.state(),
      source: faker.internet.domainName(),
      birthDate: faker.date.birthdate().toString(),
      zip: faker.location.zipCode("#####"),
      latitude: faker.location.latitude().toString(),
      shopId,
      createdAt,
    })
  }

  for (let i = 0; i < allPeople.length; i += BATCH_SIZE) {
    const chunk = allPeople.slice(i, i + BATCH_SIZE)
    await db.insert(people).values(chunk)
    console.log(`Inserted people ${i}–${i + chunk.length - 1}`)
  }

  console.log("✅ Done generating people!")
}
