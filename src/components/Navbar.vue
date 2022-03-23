<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  data() {
    return {
      brand : {
        text1 : "IEEE",
        text2 : "KOÜ" 
      },
      menuItems : [
        {name : "Anasayfa", url:"/#", hasDropdown: false},
        {name : "Komiteler", url:"/#komiteler", hasDropdown: false},
        {name: "Teknik", url:"/#teknik", hasDropdown: false},
        {name: "İletişim", url:"/#iletisim", hasDropdown: false},
        {name: "SSS", url:"/#sss", hasDropdown: false},
      ], 
      selectedMenuItem : {name : "Anasayfa", url:"/#", hasDropdown: false},
    }
  },
}
</script>


<template>
  <nav class="h-24 absolute flex items-center w-full px-0 md:px-10 z-3">
    <div class="container max-w-8xl flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <img class="ml-5 md:ml-0 h-5 md:h-10" src="@/assets/images/logo.png" alt="">
      </a>

      <button @click="toggleNav" type="button" class="inline-flex mr-10 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-black" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg :class="showMenu ? 'hidden' : 'block'" class="w-6 h-6" fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg :class="showMenu ? 'block' : 'hidden'" class="w-6 h-6" fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>

      <div class="w-full md:block md:w-auto md:mr-10 md:bg-transparent" :class="showMenu ? 'hidden' : 'hidden'">
        <ul class="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li v-for="item in menuItems" :key="item.name">
            <a @click="selectedMenuItem = item" :href="item.url" class="block text-lg py-2 pr-4 pl-3 md:bg-transparent md:p-0" :class="selectedMenuItem.name == item.name ? 'md:text-[#19659f] text-white bg-[#19659f]' : 'text-gray-900'" aria-current="page">{{item.name}}</a>
          </li> 
        </ul>
      </div>

    </div>
  </nav>
  
</template>