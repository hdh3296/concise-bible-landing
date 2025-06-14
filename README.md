# 컨사이스 바이블 랜딩 페이지

간추린 성경 "컨사이스 바이블" 책을 소개하는 정적 랜딩 페이지입니다.

## 🌐 배포 정보

- **도메인**: https://concisebible.serving-hands.org
- **호스팅**: Vercel
- **상태**: 개발 중

## 🛠 기술 스택

- **SvelteKit** - 정적 사이트 생성
- **Tailwind CSS v4** - 스타일링
- **Lucide Svelte** - 아이콘
- **Vite** - 개발 서버 및 빌드 도구

## 🏗 프로젝트 구조

```
src/
├── app.css                 # 글로벌 스타일 (Tailwind CSS)
├── app.html               # HTML 템플릿
├── lib/
│   └── components/        # Svelte 컴포넌트들
└── routes/
    ├── +layout.svelte     # 전역 레이아웃
    └── +page.svelte       # 메인 페이지
```

## 🚀 개발 환경 설정

### 필수 요구사항
- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 미리보기
npm run preview
```

개발 서버는 http://localhost:5173/ 에서 실행됩니다.

## 📱 페이지 구성

1. **Header** - 로고/타이틀 및 네비게이션
2. **Hero Section** - 책 표지, 제목, 메인 CTA
3. **Book Intro** - 책의 핵심 가치와 목적 설명
4. **Features** - 책의 주요 특징들
5. **CTA Section** - 행동 유도 버튼들
6. **Footer** - 저작권 및 연락처 정보

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **한국어 최적화**: Pretendard 폰트 적용
- **깔끔한 UI**: 자연스러운 블루 톤과 골드/오렌지 포인트 컬러
- **터치 친화적**: 최소 44px 버튼 크기

## 🔧 주요 설정 파일

- `svelte.config.js` - SvelteKit 설정 (adapter-static 사용)
- `tailwind.config.js` - Tailwind CSS 설정 (한국어 폰트 포함)
- `postcss.config.js` - PostCSS 설정 (Tailwind v4 플러그인)
- `vite.config.js` - Vite 빌드 설정

## 📚 참고 문서

- [SvelteKit 문서](https://kit.svelte.dev/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Lucide 아이콘](https://lucide.dev/)

## 📝 라이선스

Private - 밭간

---

*이 프로젝트는 SvelteKit과 Tailwind CSS를 사용하여 개발되었습니다.*