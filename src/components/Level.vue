<template>
  <section class="level">
    <h2 v-if="show">Välj din åknivå</h2>
    <a class="btn" :class="[{hide1:select1 == 1}, {hide2:select2 == 1}]" @click="addCategory('Nybörjare', 2, 3)" href="#">Nybörjare</a>
    <a class="btn" :class="[{hide1:select1 == 2}, {hide2:select2 == 2}]" @click="addCategory('Medelmåtta', 1, 2)" href="#">Medelmåtta</a>
    <a class="btn" :class="[{hide1:select1 == 3}, {hide2:select2 == 3}]" @click="addCategory('Proffs', 2, 3)" href="#">Proffs</a>
  </section>
</template>

<script>
export default {
  name: "level",
  data(){
    return {
      select1: undefined,
      select2: undefined,
      show: true
    }
  },
  methods: {
    addCategory(category, num1, num2){
      this.select1 = num1
      this.select2 = num2
      this.show = false
      this.$store.dispatch('addProduct', category)
      this.$store.dispatch('findMatch')
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.level {
  @extend %center;
  flex-direction: column;

  .hide1, .hide2 {
    display: none !important;
  }
}
</style>
