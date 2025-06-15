<script>
  import { BookOpen, Heart, Users, Zap } from 'lucide-svelte';
</script>

<section id="features" class="bg-gray-50 py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 md:px-8">
    
    <!-- 섹션 제목 -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        컨사이스 바이블의 특징
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        누구나 쉽게 읽고 이해할 수 있도록 특별히 편집된 컨사이스 바이블의 주요 특징들을 소개합니다.
      </p>
    </div>
    
    <!-- 특징 그리드 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <!-- 특징 1: 간결한 구성 -->
      <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
          <BookOpen class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          간결한 구성
        </h3>
        <p class="text-gray-600 leading-relaxed">
          핵심 메시지만을 담아 누구나 부담 없이 읽을 수 있는 분량으로 구성되었습니다.
        </p>
      </div>
      
      <!-- 특징 2: 마음에 와닿는 내용 -->
      <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6">
          <Heart class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          마음에 와닿는 내용
        </h3>
        <p class="text-gray-600 leading-relaxed">
          현대인의 일상에 실질적인 도움과 위로를 주는 하나님의 사랑이 담겨 있습니다.
        </p>
      </div>
      
      <!-- 특징 3: 모든 연령층 -->
      <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
          <Users class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          모든 연령층
        </h3>
        <p class="text-gray-600 leading-relaxed">
          성경을 처음 접하는 분부터 잘 알고 계신 분까지 모두에게 새로운 깨달음을 선사합니다.
        </p>
      </div>
      
      <!-- 특징 4: 쉬운 이해 -->
      <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-6">
          <Zap class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          쉬운 이해
        </h3>
        <p class="text-gray-600 leading-relaxed">
          복잡한 내용을 명확하고 이해하기 쉽게 정리하여 성경의 참된 의미를 전달합니다.
        </p>
      </div>
      
    </div>
  </div>
</section>