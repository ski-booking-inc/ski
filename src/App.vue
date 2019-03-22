<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "App",
    //Get products and bookings from Mongo before mount
    beforeMount() {
      this.$store.dispatch("getProducts");
      this.$store.dispatch('dbBookings');
    }
  };
</script>

<style lang="scss">
  body {
    margin: 0;

    #app {
      font-family: "Montserrat", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
    }

    .fade-enter-active {
      transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }
</style>
