<template>
  <main>
    <section>
      <h2>{{ chosenProduct.article }}</h2>
      <p>{{ chosenProduct.brand }}</p>
      <p>{{  chosenProduct.category }}</p>
      <p>{{  chosenProduct.age }}</p>
      <p>{{ chosenProduct.info }}</p
      <h3>{{ chosenProduct.price }}</h3>
    </section>
    <section>

    </section>
  </main>
</template>

<script>
  export default {
    name: 'product',
    computed(){
      chosenProduct(){
        return this.$store.getters.getChosenProduct;
      },
      userInfo(){
        return this.$store.getters.getUserInfo;
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/main";
</style>
