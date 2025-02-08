import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://ghost-mechanic.github.io/sparkhacks-project/",
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure it's inside the project root
    emptyOutDir: true
  },
});
