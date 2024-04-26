import { parseFile } from "fast-csv"

import { db } from "../../src/utils/db"
import { people } from "../../src/schema/people"

async function importPeople() {
  const file = await parseFile("./drizzle/sample/people.csv", {}).toArray()
  console.log(file)

  // db.insert(people).values([])
  console.log("Imported people from CSV")
}

importPeople()
