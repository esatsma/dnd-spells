import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: "**.*.{jsx,tsx}",
    }),
  ],
  root: "src",
  build: {
    outDir: "../dist",
  },
  test: {
    environment: "happy-dom",
  },
});
