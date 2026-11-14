import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({ hostname: 'https://www.mybarishal.com' }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});