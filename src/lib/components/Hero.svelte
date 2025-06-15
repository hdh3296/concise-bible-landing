<script>
  import { BookOpen } from 'lucide-svelte';
</script>

<section class="bg-gradient-to-b from-blue-50 to-blue-100 py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 md:px-8">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      <!-- 책 표지 이미지 영역 (모바일: 위, 데스크톱: 좌측) -->
      <div class="flex-shrink-0">
        <!-- 책 표지 placeholder -->
        <div class="w-64 h-80 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg shadow-xl flex flex-col items-center justify-center border border-blue-200">
          <BookOpen class="w-16 h-16 text-blue-600 mb-4" />
          <p class="text-sm text-gray-600 font-medium">책 표지 이미지</p>
          <p class="text-xs text-gray-500">(추후 추가 예정)</p>
        </div>
      </div>
      
      <!-- 텍스트 및 CTA 영역 (모바일: 아래, 데스크톱: 우측) -->
      <div class="flex-1 text-center lg:text-left">
        <!-- 메인 제목 -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          간추린 성경<br>
          <span class="text-blue-700">컨사이스 바이블</span>
        </h1>
        
        <!-- 부제목 -->
        <h2 class="text-xl md:text-2xl text-gray-600 font-medium mb-8 tracking-wide">
          THE CONCISE BIBLE
        </h2>
        
        <!-- 설명 텍스트 -->
        <p class="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          성경의 핵심 메시지를 간결하고 명확하게 담은 특별한 책입니다.<br>
          누구나 쉽게 읽고 이해할 수 있도록 정성스럽게 편집되었습니다.
        </p>
        
        <!-- CTA 버튼 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button class="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[44px]">
            컨사이스 바이블 보기
          </button>
          <button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 min-h-[44px]">
            자세히 알아보기
          </button>
        </div>
      </div>
      
    </div>
  </div>
</section>