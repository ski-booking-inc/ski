<template>
  <main class="products">
    <h1>Products</h1>
    <section>Kalender</section>

    <section class="products">
      <h2>Välj utrustning</h2>
      <a class="btn" href="#" @click="addProduct('Skidor Alpin')">Skidor Alpint</a>
      <a class="btn" href="#" @click="addProduct('Snowboard')">Snowboard</a>
      <a class="btn" href="#" @click="addProduct('Skidor Längd')">Skidor Längd</a>
    </section>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: "products",
  methods: {
    addProduct(article){
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
}
</style>
