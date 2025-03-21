import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { people } from "../../src/schema/people"
import { getRandomEntity } from "./helpers/get-random-entity"

const PEOPLE_COUNT = 2500

type PeopleInput = typeof people.$inferInsert

/**
 * Generates more mock people for the database.
 */
export async function generatePeople() {
  console.log("generating people...")

  const shops = await db.query.shops.findMany({
    columns: { id: true },
  })

  for (let i = 0; i < PEOPLE_COUNT; i++) {
    const shop = getRandomEntity(shops)
    const shopId = shop.id

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    const person: PeopleInput = {
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
      zip: parseInt(faker.location.zipCode()),
      latitude: faker.location.latitude().toString(),
      shopId,
      createdAt,
    }

    await db.insert(people).values(person)

    console.log(`generated person for ${createdAt.toString()}`)
  }
}
