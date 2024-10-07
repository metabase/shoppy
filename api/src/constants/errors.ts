import { METABASE_INSTANCE_URL } from "./env"

export const NO_USER_MESSAGE =
  "no matching user found. please use a valid email."

export const SSO_NOT_CONFIGURED_MESSAGE = `please configure JWT authentication in metabase at ${METABASE_INSTANCE_URL}/admin/settings/authentication/jwt to enable logins. refer to https://www.metabase.com/docs/latest/embedding/interactive-embedding-quick-start-guide.html for more information.`
