import { getCurrentSite } from "./refetch-site-content"

export function preloadImages() {
  const site = getCurrentSite()

  for (let i = 1; i <= 3; i++) {
    const img = new Image()
    img.src = `/images/${site}/${i}.png`
    img.onload = () => console.log(`image ${img.src} pre-loaded`)
  }
}
