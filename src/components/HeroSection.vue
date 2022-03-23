<script>
export default ({
  data() {
    return {
      welcomeText : "Hi! Welcome to IEEE KOÜ",
      bigTextTop : "We Are Reaching to",
      bigTextBottom : "The Stars",
      explanation : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent molestie, orci sed condimentum malesuada, eros."
    }
  }
})
</script>


<template>
  <div class="z-2 w-full lg:w-3/5 max-w-3xl absolute top-24 bottom-0 flex items-center pl-12 pr-12 lg:pl-40 lg:pr-0 ">
    <div class="h-auto w-auto">
      <div class="text-[#19659f] text-2xl font-bold mb-5">{{welcomeText}}</div>
      <div class="text-gray-900 text-5xl font-black">{{bigTextTop}}</div>
      <div class="text-gray-900 text-7xl font-black tracking-widest mb-5">{{bigTextBottom}}</div>
      <div class="text-gray-900 text-2xl font-sm md:font-lg mb-10">{{explanation}}</div>
      <div class="w-full">
        <div class="cursor-pointer select-none float-left py-2 w-32 md:w-44  flex justify-center bg-[#19659f] hover:bg-[#0c3e64] rounded-lg text-2xl text-white font-bold border-4 border-[#19659f] hover:border-[#0c3e64] transition-all duration-300">Giriş Yap</div>
        <div class="cursor-pointer select-none float-left ml-5 py-2 w-32 md:w-44 flex justify-center  rounded-lg text-2xl text-[#19659f] hover:bg-[#19659f] hover:text-white font-bold border-4 border-[#19659f] transition-all duration-300">Kayıt Ol</div>
      </div>
    </div>
  </div>
</template>