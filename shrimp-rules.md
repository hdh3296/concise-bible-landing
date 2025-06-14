# Development Guidelines

> **📋 이 문서의 목적**  
> **대상**: 개발자 (사람 + AI)  
> **목적**: 프로젝트의 상세한 개발 규칙과 가이드라인  
> **내용**: 아키텍처 규칙, 컴포넌트 구조, 디자인 표준, 코딩 규칙

## Project Overview

### Purpose
- Create a static landing page for "컨사이스 바이블" (Concise Bible) book
- Target Korean-speaking audience interested in Bible content
- Deploy to https://concisebible.serving-hands.org via Vercel

### Technology Stack Requirements
- **MUST use SvelteKit** for static site generation
- **MUST use Tailwind CSS** for all styling
- **MUST use Lucide Svelte** for all icons
- **PROHIBIT** any other CSS frameworks or icon libraries

## Project Architecture

### Mandatory Directory Structure
```
concise-bible-landing/
├── doc/
│   ├── PRD.md                    # Project requirements (READ-ONLY)
│   └── design-system.md          # Design system (if created)
├── src/
│   ├── app.html                  # HTML template
│   ├── app.css                   # Global styles only
│   ├── routes/
│   │   └── +page.svelte          # Main landing page
│   ├── lib/
│   │   └── components/           # Reusable components
│   └── static/                   # Static assets only
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js               # Vite configuration
├── svelte.config.js             # SvelteKit configuration
└── package.json                 # Dependencies
```

### File Creation Rules
- **MUST follow exact directory structure** from PRD.md
- **PROHIBIT** creating files outside designated directories
- **MUST place** all components in `src/lib/components/`
- **MUST place** all static assets in `src/static/`

## Component Implementation Standards

### Required Components (in order)
1. **Header Component** (`Header.svelte`)
   - Logo or title display
   - Simple navigation if needed
   
2. **Hero Section Component** (`Hero.svelte`)
   - Book cover image (main visual)
   - Book title: "간추린 성경 컨사이스 바이블"
   - Subtitle: "THE CONCISE BIBLE"
   - Main CTA button
   
3. **Book Introduction Component** (`BookIntro.svelte`)
   - Core value explanation
   - **MUST include**: "모든 사람에게 주는 하나님의 말씀과 좋은 소식은 우리 삶에 깊은 평안과 지혜를 전해줍니다"
   - Purpose and target audience description
   
4. **Features Section Component** (`Features.svelte`)
   - Book's main features list
   - Visual elements with descriptions
   - Easy-to-read format
   
5. **Call to Action Component** (`CTA.svelte`)
   - "컨사이스 바이블 보기" button
   - "컨사이스 바이블 응원" button
   - Define functionality for each button
   
6. **Footer Component** (`Footer.svelte`)
   - Copyright information
   - Contact information if needed

### Component Development Rules
- **MUST create** each component as separate `.svelte` file
- **MUST use** composition pattern in main `+page.svelte`
- **PROHIBIT** inline styles - use Tailwind classes only
- **MUST implement** proper component props for reusability

## Responsive Design Requirements

### Mandatory Breakpoints
- **Mobile**: 320px ~ 767px
- **Tablet**: 768px ~ 1023px  
- **Desktop**: 1024px and above

### Responsive Implementation Rules
- **MUST optimize** images for each screen size
- **MUST ensure** text remains readable across all sizes
- **MUST make** buttons minimum 44px for touch accessibility
- **MUST use** vertical layout on mobile, horizontal on desktop
- **MUST test** on all three breakpoints before completion

## Design Standards

### Color Palette (STRICT)
- **Primary**: Natural blue tones (reference book cover)
- **Secondary**: Warm white, soft gray
- **Accent**: Gold/orange (CTA buttons only)
- **PROHIBIT** using colors outside this palette

### Typography Requirements
- **Headlines**: Bold, readable fonts
- **Body text**: High readability fonts
- **Korean text**: 나눔고딕, 맑은고딕 preferred
- **English text**: Inter, Roboto preferred
- **PROHIBIT** mixing more than 2 font families

### Image Standards
- **Book cover**: High resolution with shadow effects
- **Background**: Natural, peaceful feeling
- **Icons**: Minimal and intuitive (Lucide Svelte only)
- **MUST implement** lazy loading for all images

## Content Standards

### Korean Content Handling
- **MUST maintain** all Korean text exactly as specified in PRD
- **PROHIBIT** automatic translation or modification
- **MUST ensure** proper Korean font rendering
- **MUST test** Korean text display across all devices

### Required Content Elements
- Book title: "간추린 성경 컨사이스 바이블"
- Subtitle: "THE CONCISE BIBLE"
- Core message: "모든 사람에게 주는 하나님의 말씀과 좋은 소식은 우리 삶에 깊은 평안과 지혜를 전해줍니다"
- **PROHIBIT** modifying these exact text elements

## Performance Requirements

### Mandatory Optimizations
- **MUST achieve** loading speed under 3 seconds
- **MUST implement** image lazy loading
- **MUST optimize** all static assets
- **MUST ensure** cross-browser compatibility

### Performance Testing Rules
- **MUST test** loading speed before deployment
- **MUST verify** performance on mobile devices
- **PROHIBIT** deployment if performance requirements not met

## Prohibited Actions

### Technology Restrictions
- **PROHIBIT** SEO optimization (marked unnecessary in PRD)
- **PROHIBIT** multi-language support (not needed)
- **PROHIBIT** database integration (static site only)
- **PROHIBIT** complex animations (keep simple)
- **PROHIBIT** external CSS frameworks except Tailwind

### Development Restrictions  
- **PROHIBIT** modifying PRD.md content
- **PROHIBIT** adding features not specified in PRD
- **PROHIBIT** using icons other than Lucide Svelte
- **PROHIBIT** creating additional pages beyond landing page

## Deployment Standards

### Vercel Deployment Requirements
- **MUST configure** for static site generation
- **MUST connect** to GitHub repository
- **MUST deploy** to https://concisebible.serving-hands.org
- **MUST verify** all sections work after deployment

### Pre-deployment Checklist
- [ ] All components render correctly
- [ ] Responsive design works on all breakpoints
- [ ] Korean text displays properly
- [ ] Images load with lazy loading
- [ ] Loading speed under 3 seconds
- [ ] Cross-browser compatibility verified

## File Interaction Standards

### Multi-file Coordination Rules
- **WHEN modifying** `tailwind.config.js` **MUST verify** all components still render correctly
- **WHEN adding** new components **MUST update** main `+page.svelte` imports
- **WHEN changing** global styles in `app.css` **MUST test** all components
- **WHEN updating** static assets **MUST verify** all references in components

### Configuration File Rules
- **MUST maintain** SvelteKit adapter-static configuration
- **MUST keep** Tailwind configuration minimal and project-specific
- **PROHIBIT** adding unnecessary Vite plugins
- **MUST preserve** package.json scripts for development and build

## AI Decision-making Standards

### Priority Order for Conflicts
1. PRD.md specifications (highest priority)
2. Performance requirements
3. Responsive design requirements
4. Component functionality
5. Visual design preferences (lowest priority)

### When Requirements Conflict
- **ALWAYS prioritize** functionality over aesthetics
- **ALWAYS prioritize** Korean content accuracy over English
- **ALWAYS prioritize** mobile experience over desktop
- **ALWAYS consult** PRD.md for clarification before making decisions

### Examples of Correct Decisions
- ✅ Choose simpler animation if complex one affects performance
- ✅ Prioritize mobile layout if desktop conflicts
- ✅ Keep Korean text exact even if English needs adjustment
- ✅ Use Tailwind solution even if custom CSS seems easier

### Examples of Incorrect Decisions  
- ❌ Add SEO features "to make it better"
- ❌ Use different icon library "for better icons"
- ❌ Modify Korean text "for better readability"
- ❌ Add database features "for future scalability"