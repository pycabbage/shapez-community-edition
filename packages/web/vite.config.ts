import ViteYaml from "@modyfi/vite-plugin-yaml"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths(), ViteYaml()],
})
