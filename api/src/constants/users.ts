import { User } from "../types/user"
import { METABASE_ADMIN_EMAIL } from "./env"

export const users: User[] = [
  {
    firstName: "Rene",
    lastName: "Mueller",
    email: METABASE_ADMIN_EMAIL ?? "rene@example.com",
    group: "Pug & Play",
    shopId: 1,
  },
  {
    firstName: "Cecilia",
    lastName: "Stark",
    email: METABASE_ADMIN_EMAIL ?? "cecilia@example.com",
    group: "theStitch",
    shopId: 2,
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    email: METABASE_ADMIN_EMAIL ?? "emily@example.com",
    group: "Luminara Beauty",
    shopId: 3,
  },
  {
    firstName: "Jennifer",
    lastName: "Martinez",
    email: METABASE_ADMIN_EMAIL ?? "jennifer@example.com",
    group: "ProficiencyLabs",
    shopId: 4,
  },
]
