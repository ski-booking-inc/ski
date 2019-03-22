<template>
    <section class="who">
      <p v-if="user.name"><b>{{ user.name }}</b> är inloggad</p>
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
      return this.$store.state.activeUser;
    }
  }
};
</script>
<style scoped lang="scss">

.who {
  color: white;
   p {
     padding: 0;
     margin-bottom: .5rem;
   }
}

</style>
