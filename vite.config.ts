import react from "@vitejs/plugin-react";
import { analyzer } from 'vite-bundle-analyzer'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), process.env.ANALYZE === "true" && analyzer()],
});
