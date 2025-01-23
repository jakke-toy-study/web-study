import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    server: {
        open: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                main: resolve(__dirname, './src/main.js'),
            },
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [],
});