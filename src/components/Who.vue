<template>
    <section class="who">
      <p v-if="user.name"><b>{{ user.name }}</b> är inloggad.</p>
    </section>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch('dbBookings');
  },
  computed: {
    user() {
      // hämtar in och skriver ut vem som är inloggad
      return this.$store.state.activeUser;
    }
  }
};
</script>
<style scoped lang="scss">

.who {
  color: white;

  // padding:  .5rem ;
  // border-radius: 5px;
  // background: white;
  // opacity: 0.9;
  // p {
  //   padding: 0;
  //   margin: 0;
  // }
}

</style>
