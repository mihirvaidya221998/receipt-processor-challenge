import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/receipts': {
        target: 'http://backend:3000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [react()],
})
