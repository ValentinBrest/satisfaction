import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr({include: '**/*.svg'}), 
        preact(),
    ],
    resolve: {
        alias: [
            {find: '@', replacement: '/src'},
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000/'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
