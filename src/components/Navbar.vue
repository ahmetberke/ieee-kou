<script>
export default {
  data() {
    return {
      brand : {
        text1 : "IEEE",
        text2 : "KOÜ" 
      },
      menuItems : [
        {name : "Anasayfa", url:"/", hasDropdown: false},
        {name : "Hakkımızda", url:"/hakkimizda", hasDropdown: false},
        {name: "Teknik Projeler", url:null, hasDropdown: true, dropdownItems: [
          {name: "İHA Takımı", url:"/teknik-projeler/iha"},
          {name: "Rover", url:"/teknik-projeler/rover"},
          {name: "Su Altı Aracı", url:"/teknik-projeler/su-alti-araci"},
        ]}
      ]
    }
  }
}
</script>


<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>


<style scoped>
</style>