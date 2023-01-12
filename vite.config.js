/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  build: {
    ssr: true,
    sourcemap: 'inline',
    outDir: '.',
    assetsDir: '.',
    minify: false,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].cjs',
      },
    },
    emptyOutDir: false,
    reportCompressedSize: false,
  },
};

export default config;
