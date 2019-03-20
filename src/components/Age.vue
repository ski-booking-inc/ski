<template>
<main class="age">
  <section class="container">
    <h2 v-if="show">Välj ålder</h2>
    <a class="btnChoose" :class="[{hide1:select1 == 1}, {hide2:select2 == 1}]" href="#" @click="addAge('Vuxen 16+', 2, 3)">Vuxen 16+</a>
    <a class="btnChoose" :class="[{hide1:select1 == 2}, {hide2:select2 == 2}]" href="#" @click="addAge('Ungdom 7-15', 1, 3)">Ungdom 7-15 år</a>
    <a class="btnChoose" :class="[{hide1:select1 == 3}, {hide2:select2 == 3}]" href="#" @click="addAge('Barn 0-6', 1, 2)">Barn 0-6 år</a>
  </section>
    <router-view/>
</main>
</template>

<script>
export default {
  name: "age",
  data(){
    return {
      select1: undefined,
      select2: undefined,
      show: true
    }
  },
  methods: {
    addAge(age, num1, num2){
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
