<template>
  <main class="userPage">
    <section class="opacityBox">
      <h1>Mina bokningar</h1>
      <myProduct class="component" v-for='(booking, index) in myBookings' :key='index' :booking='booking'/>
    </section>
    <a class="btn green" href="#" @click="logOut">Logga ut</a>
    <a class="btn blue" href="#" @click="$router.push('/home')">Hem</a>
  </main>
</template>

<script>
  import myProduct from "@/components/MyProduct.vue";

  export default {
    name: "userPage",
    components: {
      myProduct
    },
    computed: {
      myBookings() {
        return this.$store.getters.myBookings
      }
    },
    methods: {
      //Trigger logout function and change route
      logOut() {
        this.$store.dispatch("logOut")
        this.$router.push('/home')
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../scss/main";

  .opacityBox {
    overflow: scroll;

    .component {
      margin-top: .2rem;
    }
  }
</style>
