import "express-session"

declare module "express-session" {
  interface SessionData {
    user?: {
      email: string
      firstName: string
      lastName: string
      group: string
      shopId: number
    }
  }
}
