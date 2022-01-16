import { defineConfig } from 'vite';
// import copy from 'rollup-plugin-copy';

export default defineConfig({
    build: {
        rollupOptions: {
            treeshake: true
        }
    },
    // plugins: [
    //     copy({
    //         targets: [
    //             {
    //                 'src': 'node_modules/@webcomponents/webcomponentsjs/**.*',
    //                 'dest': [
    //                     'webcomponents',
    //                     'dist/webcomponents'
    //                 ]
    //             }
    //         ]
    //     })
    // ]
});