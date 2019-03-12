<template>
  <main>
      <section>
        <h2>{{ userInfo.name }}</h2>
        <p>{{ chosenProduct.article }}</p>
      </section>
      <section>
        <p>{{ chosenProduct.brand }}</p>
        <p>{{  chosenProduct.category }}</p>
        <p>{{  chosenProduct.age }}</p>
        <p>{{ chosenProduct.info }}</p>
        <h3>{{ chosenProduct.price }}</h3>
      </section>
      <section>
        <img src="../assets/img/baseline-delete-24px.svg" alt="arrow">
        <img src="../assets/img/baseline-arrow_downward-24px.svg" alt="arrow">
      </section>

  </main>
</template>

<script>
  export default {
    name: 'product',

    computed: {
      chosenProduct() {
        return this.$store.getters.getChosenProduct;
      },
      userInfo() {
        return this.$store.getters.getUserInfo;
      }

    }

    }

</script>

<style lang="scss">
  @import "../scss/main";
</style>
