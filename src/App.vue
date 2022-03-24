<script setup>
  import Navbar from "@/components/Navbar.vue"
  import HeroSection from "@/components/HeroSection.vue"
  import WhoAreWe from "@/components/WhoAreWe.vue"
</script>

<script>
export default {
  components: {
    Navbar,
    HeroSection,
    WhoAreWe
  },
}
</script>

<template>
  <div class="z-1 w-full h-full absolute flex justify-end">
    <img class="h-[00px] md:h-[700px] lg:h-[900px]" src="@/assets/images/bg.png" alt="">
  </div>
  <div class="w-full h-auto absolute z-40">
    <Navbar/>
    <HeroSection/>
    <WhoAreWe/>
  </div>
</template>

<style>

html, body {
  height: 100%;
  background: #eeeeee;
}
#app {
  height: 100%;
}

</style>
