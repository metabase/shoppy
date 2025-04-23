import { generatePeople } from "./generate-people"
import { generateOrders } from "./generate-orders"
import { generateProducts } from "./generate-products"
import { generateProductCategories } from "./generate-products-categories"
import { generateShops } from "./generate-shops"
import { assignShopsToCustomers } from "./assign-shops"

const generateData = async () => {
  const isLocalDb = process.env.IS_LOCAL_DB === "true"

  if (!isLocalDb) {
    // Don't seed a production db by a mistake
    return
  }

  await generateShops()
  await generatePeople()
  await generateProductCategories()
  await generateProducts()
  await generateOrders()
  await assignShopsToCustomers()
}

generateData()
