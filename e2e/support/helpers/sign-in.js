// TODO (Kelvin 2026-07-07) bandage, not a fix (EMB-2059) — see compatibility.cy.spec.js.

export const METABASE_URL = "http://localhost:4300"

// JWT_SHARED_SECRET also appears in .env.docker.example, so it's not a real secret.
const JWT_SHARED_SECRET =
  "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
const ADMIN_EMAIL = "shoppy@metabase.com"

function base64url(bytes) {
  let binary = ""
  new Uint8Array(bytes).forEach((byte) => {
    binary += String.fromCharCode(byte)
  })
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

async function getSignedJwtForAdmin() {
  const encoder = new TextEncoder()
  const header = { alg: "HS256", typ: "JWT" }
  const payload = {
    email: ADMIN_EMAIL,
    first_name: "Shoppy",
    last_name: "Admin",
    exp: Math.floor(Date.now() / 1000) + 600,
  }
  const signingInput = `${base64url(encoder.encode(JSON.stringify(header)))}.${base64url(
    encoder.encode(JSON.stringify(payload)),
  )}`

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(JWT_SHARED_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(signingInput),
  )

  return `${signingInput}.${base64url(signature)}`
}

// Sending the embedding-SDK client header makes /auth/sso return the session id directly in the
// JSON response body (see generate-response-token in
// enterprise/backend/src/metabase_enterprise/sso/integrations/jwt.clj), instead of redirecting
// with a Set-Cookie header. cy.request() doesn't reliably persist cookies across origins/ports it
// hasn't cy.visit()-ed, so the JSON path is what actually works here.
export function signInAsAdmin() {
  return cy
    .wrap(getSignedJwtForAdmin())
    .then((jwt) =>
      cy.request({
        method: "GET",
        url: `${METABASE_URL}/auth/sso`,
        qs: { jwt },
        headers: { "X-Metabase-Client": "embedding-sdk-react" },
      }),
    )
    .then(({ body }) => body.id)
}
