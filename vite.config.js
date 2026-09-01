import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react() // SWC plugin - faster than Babel, no extra config needed
  ],
  server: {
    host: true,
    port: 5605,
    strictPort: true,
    allowedHosts: [
      'bhoomitechzone.in',
      'www.bhoomitechzone.in',
      'bhoomitechzone.com',
      'www.bhoomitechzone.com',
      'localhost',
      '127.0.0.1',
      '.ngrok-free.app',
      '.ngrok.app',
      'goldsmith-spelling-bootie.ngrok-free.dev'
    ]
  },
  build: {
    // Production optimizations
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn', 'console.info'],
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      }
    },
    rollupOptions: {
      output: {
        // Hash-based filenames for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        
        // Optimized manual chunks
        manualChunks(id) {
          // Vendor chunk for core React libraries
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react-router-dom')) {
            return 'vendor';
          }
          
          // Separate chunk for Swiper (large library)
          if (id.includes('node_modules/swiper')) {
            return 'swiper';
          }
          
          // Scheduler separate chunk
          if (id.includes('node_modules/scheduler')) {
            return 'vendor';
          }
        }
      }
    },
    // Build optimizations
    chunkSizeWarningLimit: 500, // Warn if chunks exceed 500kb
    sourcemap: false, // No sourcemaps in production
    cssCodeSplit: true, // Split CSS for better caching
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    reportCompressedSize: true, // Report gzip sizes
  },
  // Dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@lottiefiles/lottie-player'] // Loaded via CDN
  },
  // CSS optimization
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
})
