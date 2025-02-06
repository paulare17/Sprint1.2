import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style.css";`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});