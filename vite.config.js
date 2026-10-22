import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import seoPages from "./scripts/vite-plugin-seo-pages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPages(), compression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Aliás para 'src'
    },
  },
});
