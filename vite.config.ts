import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $primary: #05055e;
          $primaryLight: #07077d;
          $secondary: #91b7ff;
          $secondaryLight: #bad2ff;
          $success: #00ad3d;
          $successLight: #00d64b;
          $danger: #ae0000;
          $dangerLight: #d70000;
          $warning: #ffc107;
          $warningLight: #ffcb30;
          $info: #2fe3ff;
          $infoLight: #58e8ff;
        `
      }
    }
  }
})
