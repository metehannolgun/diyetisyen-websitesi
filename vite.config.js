import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // Tailwind CSS yapılandırmasını buraya ekleyin
      config: {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [
          require('@tailwindcss/typography'), // Typography eklentisini buraya ekleyin
        ],
      }
    })
  ],
})
