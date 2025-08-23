import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pyo/",   // 👈 VERY IMPORTANT: repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
