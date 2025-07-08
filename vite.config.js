import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: { historyApiFallback: true },
  plugins: [react()], // ✅ only react here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
