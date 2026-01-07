import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import yaml from "@rollup/plugin-yaml";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get design ID from environment
const DESIGN_ID = process.env.DESIGN_ID || 'design-a';

console.log(`🎨 Building with design: ${DESIGN_ID}`);

// https://astro.build/config
export default defineConfig({
  site: "https://yourdomain.com", // change domain here
  image: {
    domains: [],
    quality: 80,
    formats: ["avif", "webp"],
  },
  integrations: [
    react(),
    sitemap(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],
  vite: {
    plugins: [tailwindcss(), yaml()],
    esbuild: {
      jsx: "automatic",
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@designs': path.resolve(__dirname, './src/components/designs'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@types': path.resolve(__dirname, './src/types'),
        '@lib': path.resolve(__dirname, './src/lib'),
      },
    },
    define: {
      'import.meta.env.DESIGN_ID': JSON.stringify(DESIGN_ID),
    },
    build: {
      rollupOptions: {
        treeshake: true,
      },
    },
  },
  prefetch: true,
  security: {
    checkOrigin: true,
  },
});
