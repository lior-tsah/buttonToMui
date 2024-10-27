import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // מאפשר שימוש ב-expect באופן גלובלי
    environment: 'jsdom', // שימוש ב-jsdom עבור בדיקות React
    setupFiles: './src/setupTests.ts', // ציון קובץ ההגדרות (אם יש צורך)
  },
});
