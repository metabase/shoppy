import { METABASE_INSTANCE_URL } from "./env"

export const LOGIN_FAILED_MESSAGE = `incorrect credentials. please use email "rene@example.com", "cecilia@example.com" or "emily@example.com" with password "password".`

export const SSO_NOT_CONFIGURED_MESSAGE = `please configure JWT authentication in metabase at ${METABASE_INSTANCE_URL}/admin/settings/authentication/jwt to enable logins. refer to https://www.metabase.com/docs/latest/embedding/interactive-embedding-quick-start-guide.html for more information.`
