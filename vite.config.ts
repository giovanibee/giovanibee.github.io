import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'docs'
	},
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': 'http://localhost:3000',
		},
	},
});
