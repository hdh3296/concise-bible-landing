# CLAUDE.md

> **🤖 이 문서의 목적**  
> **대상**: Claude Code (AI 개발 도구)  
> **목적**: AI가 효율적으로 개발할 수 있는 기술 가이드  
> **내용**: 개발 명령어, 기술 설정, 파일 참조, 개발 주의사항

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 필요한 가이드를 제공합니다.

## 프로젝트 개요

SvelteKit을 사용한 "컨사이스 바이블" 책 소개 한국어 정적 랜딩 페이지입니다.

**📋 중요**: 완전한 개발 가이드라인, 아키텍처 요구사항, 디자인 표준은 `shrimp-rules.md`를 참조하세요.

## 개발 명령어

```bash
npm run dev                 # 개발 서버 실행 (http://localhost:5173)
npm run build              # 프로덕션 빌드 (정적 사이트)
npm run preview           # 프로덕션 빌드 미리보기
npm run prepare           # SvelteKit 동기화
```

## 기술 설정

### Tailwind CSS v4 설정
- **PostCSS**: `@tailwindcss/postcss` 플러그인 사용 (일반 tailwindcss 아님)
- **CSS Import**: `src/app.css`에 `@import "tailwindcss"` (v4 문법)
- **설정**: `tailwind.config.js`에 Pretendard 한국어 폰트 스택 구성

### SvelteKit 정적 배포
- **어댑터**: `svelte.config.js`에 `@sveltejs/adapter-static` 설정
- **배포 대상**: Vercel을 통해 https://concisebible.serving-hands.org 배포

## 주요 파일 참조

- **`shrimp-rules.md`**: 완전한 개발 가이드라인 및 아키텍처
- **`doc/PRD.md`**: 상세한 프로젝트 요구사항 및 명세  
- **`data/tasks.json`**: 컴포넌트 구현 태스크 (Shrimp MCP에서 관리)

## 개발 주의사항

- `shrimp-rules.md`의 엄격한 컴포넌트 구조와 한국어 콘텐츠 요구사항 준수
- Tailwind CSS와 Lucide Svelte만 사용 (다른 라이브러리 금지)
- 모바일/태블릿/데스크톱 반응형 디자인 유지
- 태스크 관리는 Shrimp MCP에서 처리 - 진행 상황 추적 중복 금지