/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo', 'Pretendard Variable', 'Pretendard', 'Roboto', 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', '맑은 고딕', 'sans-serif'],
      },
    },
  },
  plugins: [],
}