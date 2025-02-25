import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  define: {
    'process.env': process.env,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: true,
    open: false,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        quietDeps: true,
        additionalData: '@use "@/styles/global.scss" as *;\n',
      },
    },
  },
  appType: 'spa',
});
