const { resolve } = require('path');

module.exports = {
  outDir: resolve(__dirname, 'dist'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
};