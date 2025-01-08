import { users } from "../constants/users"

export const SITE_TO_SHOP_IDS: Record<string, number> = {
  pug: 1,
  stitch: 2,
  luminara: 3,
  proficiency: 4,
}

export const getShopIdBySite = (site: string): number | undefined =>
  SITE_TO_SHOP_IDS[site]

export const getUserBySite = (site: string) => {
  const shopId = getShopIdBySite(site)

  if (shopId === undefined) {
    return
  }

  return users.find((user) => user.shopId === shopId)
}
