import { METABASE_SITE_URL } from "./env"

export const LOGIN_FAILED_MESSAGE = `authentication failed, please check your email and password. use email "rene@example.com" or "cecilia@example.com" with password "password".`

export const SSO_NOT_CONFIGURED_MESSAGE = `please configure JWT authentication in metabase at ${METABASE_SITE_URL}/admin/settings/authentication/jwt to enable logins. refer to https://www.metabase.com/docs/latest/embedding/interactive-embedding-quick-start-guide.html for more information.`
