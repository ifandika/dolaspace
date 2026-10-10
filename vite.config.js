// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * This is for add plugin, for example react and tailwind css
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})