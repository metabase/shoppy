import { generatePeople } from "./generate-people"
import { generateOrders } from "./generate-orders"
import { generateProducts } from "./generate-products"
import { generateProductCategories } from "./generate-products-categories"
import { generateShops } from "./generate-shops"
import { assignShopsToCustomers } from "./assign-shops"

const generateData = async () => {
  await generateShops()
  await generatePeople()
  await generateProductCategories()
  await generateProducts()
  await generateOrders()
  await assignShopsToCustomers()
}

generateData()
