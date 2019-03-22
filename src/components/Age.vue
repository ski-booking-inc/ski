<template>
<main class="age">
  <section class="container">
    <h2 v-if="show">Välj ålder</h2>
    <button class="btnChoose" :class="[{hide1:select1 == 1}, {hide2:select2 == 1}]" href="#" @click="addAge('Vuxen 16+', 2, 3)" :disabled = isDisabled>Vuxen 16+</button>
    <button class="btnChoose" :class="[{hide1:select1 == 2}, {hide2:select2 == 2}]" href="#" @click="addAge('Ungdom 7-15', 1, 3)" :disabled = isDisabled>Ungdom 7-15 år</button>
    <button class="btnChoose" :class="[{hide1:select1 == 3}, {hide2:select2 == 3}]" href="#" @click="addAge('Barn 0-6', 1, 2)" :disabled = isDisabled>Barn 0-6 år</button>
  </section>
  <router-view />
</main>
</template>

<script>
export default {
  name: "age",
  data() {
    return {
      isDisabled: false,
      select1: undefined,
      select2: undefined,
      show: true
    }
  },
  methods: {
    //Adds chosen option to state 
    addAge(age, num1, num2) {
      this.isDisabled = true;
      this.select1 = num1
      this.select2 = num2
      this.show = false
      this.$store.dispatch('addProduct', age)
      this.$router.push(`/age/level`)
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";
</style>
