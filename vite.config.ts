import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const colors: { [key: string]: string } = {
  primary: 'rgba(5, 5, 94, 1)',
  secondary: 'rgba(145, 183, 255, 1)',
  success: 'rgba(0, 173, 61, 1)',
  danger: 'rgba(174, 0, 0, 1)',
  warning: 'rgba(255, 193, 7, 1)',
  info: 'rgba(47, 227, 255, 1)'
}

// https://vitejs.dev/config/
console.log(fileURLToPath(new URL('./src', import.meta.url)))
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
