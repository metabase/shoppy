import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import basicSsl from "@vitejs/plugin-basic-ssl"
import webfontDownload from "vite-plugin-webfont-dl"

const isHTTPS = process.env.HTTPS

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    isHTTPS ? basicSsl() : null,
    webfontDownload(),
  ],
  server: {
    open: false,
    port: 3004,
  },
})
