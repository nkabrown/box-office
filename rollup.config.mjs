import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { litScss } from 'rollup-plugin-scss-lit';
import nodeResolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import template from 'rollup-plugin-html-literals';
import terser from '@rollup/plugin-terser';

export default {
  input: ['./lib/index.js'],
  preserveEntrySignatures: false,
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: 'index.js',
    chunkFileNames: '[name].min.js',
    sourcemap: false,
    generatedCode: 'es2015'
  },
  plugins: [
    nodeResolve(),
    template({
      minifyOptions: {
        minifyCss: true
      }
    }),
    terser({
      ecma: 2020,
      compress: true,
      format: {
        comments: false
      }
    }),
    litScss({
      minify: true
    }),
    del({
      targets: './dist/*',
      runOnce: true
    }),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/css/*', dest: 'dist/css' }
      ]
    }),
    summary({
      showMinifiedSize: true,
      showGzippedSize: true,
      showBrotliSize: true
    })
  ]
};
