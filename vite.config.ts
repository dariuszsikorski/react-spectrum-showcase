import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Set base path for GitHub Pages (project pages)
  // If deploying to https://<user>.github.io/<repo>/, set base to '/<repo>/'
  // Reads from env GITHUB_REPOSITORY when running in Actions, otherwise empty (local dev)
  base: process.env.GITHUB_PAGES && process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/',
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  
  // Explicitly set root to prevent scanning subdirectories
  root: process.cwd(),
  
  optimizeDeps: {
    include: ['@phosphor-icons/react'],
    // Exclude cloned repo from dependency optimization
    entries: ['index.html', 'src/**/*.{ts,tsx,js,jsx}']
  },
  
  // Configure esbuild to handle .js/.ts files with JSX syntax
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: []
  },
  
  // Exclude official-react-spectrum-repo from build
  build: {
    rollupOptions: {
      external: (id) => id.includes('official-react-spectrum-repo'),
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  
  server: {
    // Explicitly define which directories to watch, excluding cloned repo
    watch: {
      ignored: ['**/official-react-spectrum-repo/**', '**/node_modules/**']
    }
  }
})
