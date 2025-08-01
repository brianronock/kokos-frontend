import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
  base: mode === 'production' ? '/kokos-frontend/' : '/',
  plugins: [react()],    
  }
})
