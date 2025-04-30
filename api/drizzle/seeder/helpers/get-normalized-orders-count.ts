import { shopsData } from "../generate-shops"

// Ensures that there's no chance that all shops will have the same number of orders
export const getNormalizedOrdersCount = (ordersCount: number) =>
  ordersCount % shopsData.length !== 0 ? ordersCount : ordersCount - 1
