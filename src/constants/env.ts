/**
 * URL of the authentication API endpoint.
 * This is used only for the "JWT" authentication type.
 *
 * See [api/src/main.ts] for the implementation used in this demo.
 */
export const AUTH_API_HOST =
  process.env.REACT_APP_AUTH_API_HOST ?? "http://localhost:3003"

export const JWT_PROVIDER_URI =
  process.env.REACT_APP_JWT_PROVIDER_URI ?? "/sso/metabase"

/**
 * URL of the metabase instance.
 */
export const METABASE_INSTANCE_URL =
  process.env.REACT_APP_METABASE_INSTANCE_URL ?? "http://localhost:3000"

/**
 * Metabase's API key can be generated in the Metabase admin settings.
 * This is used only for the "API key" authentication type.
 *
 * Refer to https://www.metabase.com/docs/latest/people-and-groups/api-keys.
 */
export const METABASE_API_KEY = process.env.REACT_APP_API_KEY
