<script setup>
  import Navbar from "@/components/Navbar.vue"
  import HeroSection from "@/components/HeroSection.vue"
</script>

<script>
export default {
  components: {
    Navbar,
    HeroSection,
  },
}
</script>

<template>
  <div class="z-1 w-full h-full absolute flex justify-end">
    <img class="h-[00px] md:h-[700px] lg:h-[900px]" src="@/assets/images/bg.png" alt="">
  </div>
  <Navbar/>
  <HeroSection/>
</template>

<style>

html, body {
  height: 100%;
}
#app {
  height: 100%;
}

</style>
