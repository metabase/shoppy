import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import basicSsl from "@vitejs/plugin-basic-ssl"
import webfontDownload from "vite-plugin-webfont-dl"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

const isHTTPS = process.env.HTTPS

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  const devPort = parseInt(env.CLIENT_PORT, 10) || 3004
  const previewPort = parseInt(env.CLIENT_PORT ?? env.PORT, 10) || undefined

  // The client calls same-origin `/mb/*`; forward it to the api, which proxies onward to
  // METABASE_INSTANCE_URL (see api/src/main.ts). Applied to both dev and preview.
  const mbProxy = {
    "/mb": {
      target:
        env.VITE_APP_DOCKER_OVERRIDE_BACKEND_URL || env.VITE_APP_BACKEND_URL,
      changeOrigin: true,
      secure: false,
    },
  }

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
      port: devPort,
      proxy: mbProxy,
    },
    preview: {
      port: previewPort,
      proxy: mbProxy,
    },
  }
})
