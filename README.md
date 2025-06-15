# 컨사이스 바이블 랜딩 페이지

> **📖 이 문서의 목적**  
> **대상**: GitHub 방문자, 일반 사용자, 협업자  
> **목적**: 프로젝트 공개 소개 및 사용법  
> **내용**: 프로젝트 개요, 설치법, 기술 스택, 페이지 구성

간추린 성경 "컨사이스 바이블" 책을 소개하는 정적 랜딩 페이지입니다.

## 🌐 배포 정보

- **도메인**: https://concisebible.serving-hands.org
- **호스팅**: Vercel
- **상태**: ✅ **운영 중** (2025년 6월 15일 배포 완료)

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/hdh3296/concise-bible-landing.git
cd concise-bible-landing

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🛠 기술 스택

- **SvelteKit** - 정적 사이트 생성 (adapter-static)
- **Tailwind CSS v4** - 최신 PostCSS 플러그인 사용
- **Lucide Svelte** - 아이콘 라이브러리
- **Vite** - 빌드 도구 (최적화 설정 포함)

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

## 📊 성능 지표

- **빌드 크기**: 48.62KB (최적화 후 54% 감소)
- **로딩 시간**: 0.075초 (목표 3초 대비 40배 빠름)
- **CSS**: 22.51KB (Tailwind CSS purge 적용)
- **JavaScript**: 분할 로딩 및 청크 최적화

## 🔧 주요 설정 파일

- `svelte.config.js` - SvelteKit 설정 (adapter-static 사용)
- `tailwind.config.js` - Tailwind CSS 설정 (Pretendard 폰트)
- `postcss.config.js` - PostCSS 설정 (@tailwindcss/postcss)
- `vite.config.js` - 빌드 최적화 설정 (청크 분할, 압축)
- `vercel.json` - Vercel 배포 설정 (캐싱, 보안 헤더)

## 📚 참고 문서

- [SvelteKit 문서](https://kit.svelte.dev/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Lucide 아이콘](https://lucide.dev/)

## 🔄 업데이트 및 배포

### Vercel 자동 배포
- GitHub main 브랜치에 푸시하면 자동으로 배포됩니다
- 배포 상태는 [Vercel 대시보드](https://vercel.com)에서 확인 가능

### 수동 배포
```bash
# Vercel CLI 사용 (설치 필요: npm i -g vercel)
vercel --prod
```

## 👥 기여하기

이 프로젝트는 현재 비공개로 운영되고 있습니다. 
기여나 문의사항은 아래 연락처로 문의해 주세요.

## 📞 연락처

- **개발자**: 동훈 (밭가는개발자)
- **브랜드**: 밭간
- **웹사이트**: [batgan.com](https://batgan.com)

## 📝 라이선스

Private - 밭간

---

*이 프로젝트는 SvelteKit과 Tailwind CSS를 사용하여 개발되었습니다.*  
*2025년 6월 15일 배포 완료*