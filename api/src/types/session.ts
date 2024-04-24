import { User } from "./user"

declare module "express-session" {
  export interface SessionData {
    user: User
  }
}
