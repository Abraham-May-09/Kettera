import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // IMPORTANTE: base para rutas correctas en Vercel
  base: '/', 

  build: {
    outDir: 'dist',
    sourcemap: true,
  },

  // Solo para desarrollo (opcional, puedes moverlo a un env)
  server: process.env.NODE_ENV === 'development' ? {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  } : undefined
})
