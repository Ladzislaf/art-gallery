import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['src/setupTests.ts'],
		coverage: {
			include: ['src/**/*.{ts,tsx}'],
		},
	},
});
