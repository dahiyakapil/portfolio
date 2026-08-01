import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const fromEnv = env.VITE_SITE_URL?.replace(/\/$/, "");
  const fromVercel = env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL.replace(/^https?:\/\//, "")}`
    : env.VERCEL_URL
      ? `https://${env.VERCEL_URL.replace(/^https?:\/\//, "")}`
      : "";

  const siteUrl = fromEnv || fromVercel;

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "html-site-url",
        transformIndexHtml(html) {
          return html.replaceAll("%VITE_SITE_URL%", siteUrl);
        },
        writeBundle(outputOptions) {
          if (!siteUrl) return;
          const outDir = outputOptions.dir ?? path.resolve("dist");
          for (const file of ["sitemap.xml", "robots.txt"]) {
            const filePath = path.join(outDir, file);
            if (!fs.existsSync(filePath)) continue;
            const next = fs
              .readFileSync(filePath, "utf8")
              .replaceAll("%VITE_SITE_URL%", siteUrl);
            fs.writeFileSync(filePath, next);
          }
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      // Avoid prebundling the giant Simple Icons barrel in dev
      exclude: ["react-icons/si", "react-icons"],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("@react-icons/all-files")) return "icons";
            if (id.includes("node_modules/lucide-react")) return "lucide";
          },
        },
      },
    },
  };
});
