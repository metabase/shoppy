export default {
  async fetch(_: Request) {
    const response = await fetch(
      "https://shoppy.coredev.metabase.com/app/embedding-sdk.js",
    )

    const clonedResponse = response.clone()
    const headers = new Headers(response.headers)
    headers.delete("set-cookie")
    headers.delete("content-encoding")
    headers.delete("content-length")
    headers.set("Cache-Control", "public, max-age=0, must-revalidate")
    headers.set("CDN-Cache-Control", "public, max-age=2592000")

    return new Response(clonedResponse.body, {
      status: response.status,
      statusText: response.statusText,
      headers: headers,
    })
  },
}
