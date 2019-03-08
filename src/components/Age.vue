<template>
  <section class="age">
    <h2>Välj ålder</h2>
    <a class="btn" href="#" @click="addAge('Vuxen 16+')">Vuxen 16+</a>
    <a class="btn" href="#" @click="addAge('Ungdom 7-15 år')">Ungdom 7-15 år</a>
    <a class="btn" href="#" @click="addAge('Barn 0-6 år')">Barn 0-6 år</a>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: "age",
  methods: {
    addAge(age){
      this.$store.dispatch('addProduct', age)
      this.$router.push(`/age/level`)
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.age {
  @extend %center;
  flex-direction: column;
}
</style>
