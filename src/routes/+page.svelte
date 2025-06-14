<script>
  import { BookOpen, Check, Palette } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center">
  <div class="text-center p-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">컨사이스 바이블 랜딩 페이지</h1>
    <p class="text-xl text-gray-600 mb-6">프로젝트 초기화 테스트</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
      <div class="p-6 bg-white rounded-lg shadow-md">
        <Check class="w-8 h-8 text-green-500 mx-auto mb-3" />
        <p class="text-sm text-gray-500 mb-1">SvelteKit</p>
        <p class="text-green-600 font-semibold">✓ 정상 작동</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <Palette class="w-8 h-8 text-blue-500 mx-auto mb-3" />
        <p class="text-sm text-gray-500 mb-1">Tailwind CSS</p>
        <p class="text-green-600 font-semibold">✓ 스타일 적용됨</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <BookOpen class="w-8 h-8 text-purple-500 mx-auto mb-3" />
        <p class="text-sm text-gray-500 mb-1">Lucide Icons</p>
        <p class="text-green-600 font-semibold">✓ 아이콘 표시됨</p>
      </div>
    </div>
    <p class="mt-8 text-gray-600">
      모든 의존성이 정상적으로 설치되었습니다.<br>
      이제 컴포넌트 개발을 시작할 수 있습니다.
    </p>
  </div>
</div>
