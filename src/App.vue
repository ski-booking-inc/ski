<template>
  <div id="app">
    <!-- <transition name="fade"> -->
      <p v-if="user"> <!--flytta detta till rätt, -->
        User logged in as
        <b>{{ user }}</b>
      </p>
      <router-view/>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    this.$store.dispatch("getProducts");
  },
  computed: { // flytta även till rätt (userpage.vue)
    user() {
      return this.$store.state.activeUser;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
