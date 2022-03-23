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
  <div class="z-2 w-full md:w-1/2 absolute top-24 bottom-0 flex items-center pl-12 pr-12 md:pl-40 md:pr-0 ">
    <div class="h-auto w-auto">
      <div class="text-[#19659f] text-2xl font-bold mb-5">{{welcomeText}}</div>
      <div class="text-gray-900 text-5xl font-black">{{bigTextTop}}</div>
      <div class="text-gray-900 text-7xl font-black tracking-widest mb-5">{{bigTextBottom}}</div>
      <div class="text-gray-900 text-2xl font-sm md:font-lg mb-10">{{explanation}}</div>
      <div class="w-full">
        <div class="cursor-pointer select-none float-left py-2 w-32 md:w-44  flex justify-center bg-[#19659f] rounded-lg text-2xl text-white font-bold border-4 border-[#19659f]">Sign Up</div>
        <div class="cursor-pointer select-none float-left ml-5 py-2 w-32 md:w-44 flex justify-center  rounded-lg text-2xl text-[#19659f] font-bold border-4 border-[#19659f]">Sign Up</div>
      </div>
    </div>
  </div>
</template>