<template>
  <main class="products">
    <h1>Products</h1>
    <section>Kalender</section>

    <section class="products">
      <h2>Välj utrustning</h2>
      <a class="btn" href="#" @click="$router.push(`/age`)">Komplett</a>
      <a class="btn" href="#" @click="$router.push(`/age`)">Snowboard</a>
      <a class="btn" href="#" @click="$router.push(`/age`)">Alpint</a>
    </section>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: "products",
  data () {
      
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
