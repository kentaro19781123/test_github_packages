import react from "@vitejs/plugin-react-swc"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    outDir: "dist", // default の設定と同じ
    lib: {
      entry: "src/index.ts",
      name: "test-package",
      // fileName: "index",
      formats: ["es", "umd"], // default の設定と同じ
      fileName: (format) => `test-package.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
})
