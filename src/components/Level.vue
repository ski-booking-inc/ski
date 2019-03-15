<template>
  <section class="level">
    <h2>Välj din åknivå</h2>
    <a class="btn" @click="addCategory('Nybörjare')" href="#">Nybörjare</a>
    <a class="btn" @click="addCategory('Medelmåtta')" href="#">Medelmåtta</a>
    <a class="btn" @click="addCategory('Proffs')" href="#">Proffs</a>
  </section>
</template>

<script>
export default {
  name: "level",
  methods: {
    addCategory(category){
      this.$store.dispatch('addProduct', category)
      this.$store.dispatch('findMatch')
      this.$router.push('/userInfo')
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.level {
  @extend %center;
  flex-direction: column;
}
</style>
