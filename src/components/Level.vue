<template>
<main class="level">
  <section class="container">
    <h2 v-if="show">Välj din åknivå</h2>
    <button class="btnChoose" :class="[{hide1:select1 == 1}, {hide2:select2 == 1}]" @click="addCategory('Nybörjare', 2, 3)"  href="#" :disabled = isDisabled>Nybörjare</button>
    <button class="btnChoose" :class="[{hide1:select1 == 2}, {hide2:select2 == 2}]" @click="addCategory('Medelmåtta', 1, 2)" href="#" :disabled = isDisabled>Medelmåtta</button>
    <button class="btnChoose" :class="[{hide1:select1 == 3}, {hide2:select2 == 3}]" @click="addCategory('Proffs', 2, 3)" href="#" :disabled = isDisabled>Proffs</button>
  </section>
</main>
</template>

<script>
export default {
  name: "level",
  data(){
    return {
      isDisabled: false,
      select1: undefined,
      select2: undefined,
      show: true
    }
  },
  methods: {
    //Adds chosen option to state and trigger find match
    addCategory(category, num1, num2){
      this.isDisabled = true;
      this.select1 = num1
      this.select2 = num2
      this.show = false
      this.$store.dispatch('addProduct', category)
      this.$store.dispatch('findMatch')
      this.$emit('showButton')
      this.$store.dispatch('showButton', true)

    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

</style>
