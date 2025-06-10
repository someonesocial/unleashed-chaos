import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Schnellere Fast Refresh
      fastRefresh: true,
      // JSX Runtime optimieren
      jsxRuntime: 'automatic'
    })
  ],
  base: '/unleashed-chaos/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // CSS Code Splitting
    cssCodeSplit: true,
    // Bessere Kompression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'gsap'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          particles: ['@tsparticles/react', '@tsparticles/engine', '@tsparticles/slim'],
          ui: ['styled-components'],
          utils: ['react-intersection-observer', 'react-spring']
        },
        // Asset-Namen optimieren
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Chunk-Größe Warnung erhöhen
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 5173,
    host: true,
    // HMR optimieren
    hmr: {
      overlay: false
    }
  },
  // Preview-Server Konfiguration
  preview: {
    port: 4173,
    host: true
  },
  // Dependency Pre-bundling optimieren
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'styled-components',
      '@tsparticles/react',
      '@tsparticles/slim'
    ]
  }
})
