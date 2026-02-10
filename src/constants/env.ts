/**
 * URL of the demo API endpoint.
 * This is used for simulating JWT authentication and providing mock data.
 *
 * See [api/src/main.ts] for the implementation used in this demo.
 */
export const API_HOST = getAPIHost()

export const AUTH_PROVIDER_URI = "/sso/metabase"

/**
 * URL of the metabase instance.
 */
export const METABASE_INSTANCE_URL =
  import.meta.env.VITE_APP_METABASE_INSTANCE_URL ?? "http://localhost:3000"

export function getAPIHost() {
  const { VITE_APP_BACKEND_URL, VITE_VERCEL_ENV } = import.meta.env

  // See [https://vercel.com/docs/security/deployment-protection#migrating-to-standard-protection]
  if (VITE_VERCEL_ENV) return "/api"

  return VITE_APP_BACKEND_URL
    ? `${VITE_APP_BACKEND_URL}/api`
    : "http://localhost:3003/api"
}

export const IS_DEV = import.meta.env.DEV

/**
 * Datadog RUM configuration.
 * Set these environment variables to enable performance monitoring.
 */
export const DATADOG_APPLICATION_ID =
  import.meta.env.VITE_DATADOG_APPLICATION_ID ?? ""
export const DATADOG_CLIENT_TOKEN =
  import.meta.env.VITE_DATADOG_CLIENT_TOKEN ?? ""
export const DATADOG_SITE = import.meta.env.VITE_DATADOG_SITE
export const DATADOG_SERVICE = import.meta.env.VITE_DATADOG_SERVICE
export const DATADOG_ENV = import.meta.env.VITE_DATADOG_ENV

export const IS_CI_RUN_FOR_PR_SYNTHETIC_MONITORING = !!import.meta.env
  .VITE_APP_PR_NUMBER
