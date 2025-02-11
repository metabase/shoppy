import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import basicSsl from "@vitejs/plugin-basic-ssl"
import webfontDownload from "vite-plugin-webfont-dl"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

const isHTTPS = process.env.HTTPS
const port = process.env.PORT ? parseInt(process.env.PORT) : undefined

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    isHTTPS ? basicSsl() : null,
    webfontDownload(),
    ViteImageOptimizer(),
  ],
  server: {
    open: false,
    port: 3004,
  },
  preview: {
    ...(port && { port }),
  },
})
