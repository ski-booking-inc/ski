<template>
  <main class="products">
    <h1>Products</h1>
    <section>Kalender</section>

    <section class="products">
      <h2 v-if="show">Välj utrustning</h2>
      <a class="btn" :class="[{hide1:select1 == 1}, {hide2:select2 == 1}]" href="#" @click="addProduct('Skidor Alpin', 2, 3)">Skidor Alpin</a>
      <a class="btn" :class="[{hide1:select1 == 2}, {hide2:select2 == 2}]" href="#" @click="addProduct('Snowboard', 1, 3)">Snowboard</a>
      <a class="btn" :class="[{hide1:select1 == 3}, {hide2:select2 == 3}]" href="#" @click="addProduct('Skidor Längd', 1, 2)">Skidor Längd</a>
    </section>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: "products",
  data(){
    return {
      select1: undefined,
      select2: undefined,
      show: true
    }
  },
  methods: {
    addProduct(article, num1, num2){
      this.select1 = num1
      this.select2 = num2
      this.show = false
      this.$store.dispatch('addProduct', article)
      this.$router.push(`/age`)
    }

  }
};
</script>

<style lang="scss">
@import "../scss/main";

.products {
  @extend %center;
  flex-direction: column;

  .hide1, .hide2 {
    display: none !important;
  }
}

</style>
