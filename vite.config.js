import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// 청크 크기 최적화
		rollupOptions: {
			output: {
				manualChunks: {
					'lucide': ['lucide-svelte']
				}
			}
		},
		// CSS 코드 분할
		cssCodeSplit: true,
		// 소스맵 비활성화 (프로덕션)
		sourcemap: false,
		// 압축 최적화 (esbuild 사용)
		minify: 'esbuild'
	}
});
