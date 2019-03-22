<template>
    <section class="who">
      <p v-if="user.name"><b>{{ user.name }}</b> är inloggad</p>
    </section>
</template>

<script>
export default {
  name: "App",
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
