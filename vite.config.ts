import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import basicSsl from "@vitejs/plugin-basic-ssl"
import webfontDownload from "vite-plugin-webfont-dl"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

const isHTTPS = process.env.HTTPS

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const port = env.PORT ? parseInt(env.PORT) : undefined

  return {
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
      port,
    },
  }
})
