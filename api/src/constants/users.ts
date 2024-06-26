import { User } from "../types/user"

/** Hash of the "password" password, used for the demo. */
const DEMO_PASSWORD_HASH = `$argon2id$v=19$m=65536,t=3,p=4$SPxNs6dPuj0kL0HV/Q+EaQ$sxUyyap4NFEDweTLJZaoLbuVGZGTD297Dz+Hh3Jvahs`

const SHOP_ADMIN_GROUP = "Shop Admin"

export const users: User[] = [
  {
    firstName: "Rene",
    lastName: "Mueller",
    email: "rene@example.com",
    group: SHOP_ADMIN_GROUP,
    hash: DEMO_PASSWORD_HASH,
    shopId: 1,
  },
  {
    firstName: "Cecilia",
    lastName: "Stark",
    email: "cecilia@example.com",
    group: SHOP_ADMIN_GROUP,
    hash: DEMO_PASSWORD_HASH,
    shopId: 2,
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily@example.com",
    group: SHOP_ADMIN_GROUP,
    hash: DEMO_PASSWORD_HASH,
    shopId: 3,
  },
]
