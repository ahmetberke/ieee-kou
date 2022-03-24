<script>
export default {
  data() {
    return {
      title: "BİZ KİMİZ?",
      explanation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      managers: [
        {name: "Enes Batur", picture: "person.jpg", title: "Yönetim Kurulu Eş Başkanı", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {name: "Çağrı Uçmazkızı", picture: "person.jpg", title: "Yönetim Kurulu Eş Başkanı", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      ],
      team: [
        {name: "Selin Toplayıcı", picture: "person.jpg"},
        {name: "Ahmet Berke Demirayak", picture: "person.jpg"},
        {name: "Cem Koşmuş", picture: "person.jpg"},
        {name: "Elif Kaplan", picture: "person.jpg"},
      ]
    }
  }
}
</script>

<template>
  <div class="w-full h-auto mt-20">
    <div class="w-full text-center flex justify-center text-[#19659f] font-bold text-4xl">{{title}}</div>
    <div class="w-full mt-6 px-5 container max-w-6xl mx-auto text-center flex justify-center text-sm md:text-xl font-semibold text-gray-900">{{explanation}}</div> 
    <div class="w-full my-0 md:my-10 container max-w-7xl mx-auto h-auto grid grid-cols-1 md:grid-cols-2">
      <div v-for="manager in managers" :key="manager.name" class="my-shadow mx-4 col-span-1 h-48 md:h-64 mt-10 md:mt-0 bg-gray-100 flex items-center">
        <div class="w-full h-full pl-5 grid grid-cols-5">
          <div class="col-span-2 h-full w-auto flex items-center">
            <img class="h-28 w-28 md:h-36 md:w-36 lg:w-48 lg:h-48 rounded-full object-cover" :src="`src/assets/images/${manager.picture}`" alt="">
          </div>
          <div class="col-span-3 w-full h-full flex items-center pr-10">
            <div class="h-auto-w-auto">
              <div class="w-full text-xs font-black text-[#19659f] uppercase mb-2">{{manager.title}}</div>
              <div class="w-full text-base md:text-lg font-base text-gray-900 uppercase mb-2">{{manager.name}}</div>
              <hr class="mb-2">
              <div class="w-full text-xs md:text-sm font-base text-gray-600  mb-2">{{manager.description}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-shadow {
  box-shadow: 20px 20px 0px 0px #d5dfff;
}
</style>