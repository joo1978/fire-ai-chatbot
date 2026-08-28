import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repository.endsWith(".github.io");
const base = repository && !isUserOrOrgPage ? `/${repository}/` : "/";

export default defineConfig({
  root: "github",
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "."),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "out"),
    emptyOutDir: true,
  },
});
