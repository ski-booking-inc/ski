<template>
  <div class="userPage">
    <h1>Mina bokningar</h1>
    <myProduct v-for='(booking, index) in userBookings' :key='index' :booking='booking'/>
    <p>Total summa: ?</p>
    <a class="btn green" href="#">Logga ut</a>
    <a class="btn blue" href="#" >Hem</a>
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
      //Hämta in myBookings från store
    },
    beforeMount() {
      //Dispatch en action i store som hämtar myBookings från DB
    },

    methods: {
      //Dispatch en action som deletar bokning
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
