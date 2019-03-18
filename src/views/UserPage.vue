<template>
  <div class="userPage">
    <h1>Mina bokningar</h1>
    <myProduct v-for='(booking, index) in myBookings' :key='index' :booking='booking'/>
    <a class="btn green" href="#" @click="logOut">Logga ut</a>
    <a class="btn blue" href="#" @click="$router.push('/main1')">Hem</a>
  </div>
</template>

<script>
  import myProduct from "@/components/MyProduct.vue";

  export default {
    name: "userPage",
    components: {
      myProduct
    },
    computed: {
      myBookings(){
        return this.$store.getters.myBookings
      }
    },
    methods: {
      logOut(){
       this.$store.dispatch("logOut")
       this.$router.push('/main1')
     }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../scss/main";

  p {
    color: peachpuff;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
