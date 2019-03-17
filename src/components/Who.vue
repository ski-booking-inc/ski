<template>
      <p v-if="user.name">
        User logged in as
        <b>{{ user.name }}</b>
      </p>
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