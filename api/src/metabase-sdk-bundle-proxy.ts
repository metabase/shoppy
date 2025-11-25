export default {
  async fetch(_: Request) {
    const response = await fetch(
      "https://shoppy.coredev.metabase.com/app/embedding-sdk.js",
    )
    const headers = new Headers(response.headers)
    headers.delete("set-cookie")
    headers.set("Cache-Control", "max-age=0, must-revalidate")
    headers.set("CDN-Cache-Control", "public, max-age=2592000")

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: headers,
    })
  },
}
