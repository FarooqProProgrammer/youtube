import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Customize asset filenames dynamically based on asset type
        assetFileNames: (assetInfo:any) => {
          const extType = assetInfo.name.split('.').pop();
          
          // Check the file type and apply custom naming convention
          if (['png', 'jpg', 'jpeg', 'gif'].includes(extType)) {
            return 'assets/images/[name].[hash][extname]'; // Custom name for images
          } else if (['woff', 'woff2', 'ttf'].includes(extType)) {
            return 'assets/fonts/[name].[hash][extname]'; // Custom name for fonts
          } else if (extType === 'css') {
            return 'assets/styles/[name].[hash][extname]'; // Custom name for CSS files
          } else {
            return 'assets/[name].[hash][extname]'; // Default name for other assets
          }
        },
      },
    },
  },
});
