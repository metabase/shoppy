/**
 * URL of the demo API endpoint.
 * This is used for simulating JWT authentication and providing mock data.
 *
 * See [api/src/main.ts] for the implementation used in this demo.
 */
export const API_HOST = getAPIHost()

export const JWT_PROVIDER_URI =
  process.env.REACT_APP_JWT_PROVIDER_URI ?? "/sso/metabase"

/**
 * URL of the metabase instance.
 */
export const METABASE_INSTANCE_URL =
  process.env.REACT_APP_METABASE_INSTANCE_URL ?? "http://localhost:3000"

export function getAPIHost() {
  const {
    REACT_APP_API_HOST,
    REACT_APP_VERCEL_ENV,
  } = process.env

  // See [https://vercel.com/docs/security/deployment-protection#migrating-to-standard-protection]
  if (REACT_APP_VERCEL_ENV) return "/api"

  return REACT_APP_API_HOST ?? "http://localhost:3003/api"
}