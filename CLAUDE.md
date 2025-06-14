# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a Korean-language static landing page for "컨사이스 바이블" (Concise Bible) book. The project uses SvelteKit with strict architectural requirements defined in `shrimp-rules.md` and detailed specifications in `doc/PRD.md`.

## Development Commands

```bash
# Development server
npm run dev                 # Starts dev server at http://localhost:5173

# Production build
npm run build              # Builds static site using adapter-static

# Preview production build
npm run preview           # Preview built site locally

# Project sync
npm run prepare           # Runs svelte-kit sync
```

## Architecture Overview

### Technology Constraints
- **SvelteKit**: Static site generation with adapter-static
- **Tailwind CSS v4**: Uses `@tailwindcss/postcss` plugin (NOT standard tailwindcss)
- **Lucide Svelte**: Only permitted icon library
- **Korean optimization**: Pretendard font stack configured

### Critical Configuration Files
- `postcss.config.js`: Uses `@tailwindcss/postcss` (Tailwind v4 requirement)
- `tailwind.config.js`: Korean font stack with Pretendard
- `svelte.config.js`: Static adapter for Vercel deployment
- `src/app.css`: Single `@import "tailwindcss"` statement (Tailwind v4 syntax)

### Component Architecture
The landing page follows a strict 6-component structure (defined in shrimp-rules.md):

1. **Header.svelte** - Logo/navigation
2. **Hero.svelte** - Book cover, title "간추린 성경 컨사이스 바이블", subtitle "THE CONCISE BIBLE"  
3. **BookIntro.svelte** - Must include exact text: "모든 사람에게 주는 하나님의 말씀과 좋은 소식은 우리 삶에 깊은 평안과 지혜를 전해줍니다"
4. **Features.svelte** - Book features with Lucide icons
5. **CTA.svelte** - "컨사이스 바이블 보기" and "컨사이스 바이블 응원" buttons
6. **Footer.svelte** - Copyright and contact info

All components must be placed in `src/lib/components/` and composed in `src/routes/+page.svelte`.

### Design System
- **Responsive breakpoints**: Mobile (320-767px), Tablet (768-1023px), Desktop (1024px+)
- **Colors**: Natural blue tones (primary), warm white/soft gray (secondary), gold/orange (accent)
- **Typography**: Korean-optimized font stack with Pretendard
- **Touch targets**: Minimum 44px for accessibility
- **Layout**: Vertical on mobile, horizontal on desktop

### Task Management
The project uses Shrimp task manager with tasks defined in `data/tasks.json`. Each component has specific implementation requirements and verification criteria.

## Development Guidelines

### Styling Rules
- **PROHIBIT** inline styles - use Tailwind classes only
- **PROHIBIT** other CSS frameworks or icon libraries besides specified stack
- **REQUIRE** proper responsive implementation across all breakpoints

### Content Requirements  
- Korean language content must remain exactly as specified
- Specific required text strings cannot be modified
- Book title and subtitle are fixed: "간추린 성경 컨사이스 바이블" / "THE CONCISE BIBLE"

### File Organization
- All components in `src/lib/components/`
- Static assets in `src/static/` (currently unused)
- Global styles only in `src/app.css`
- Follow exact directory structure from `shrimp-rules.md`

## Deployment Target

- **Platform**: Vercel with static adapter
- **Domain**: https://concisebible.serving-hands.org
- **Build output**: Static files optimized for Korean audience