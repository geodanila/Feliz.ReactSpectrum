import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            treeshake: true
        }
    },
    base: "./"
});