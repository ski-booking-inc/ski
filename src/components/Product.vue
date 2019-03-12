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
<button type="button" name="button" @click="dateDiff">Test</button>

      </section>
  </main>
</template>

<script>
  export default {
    name: 'product',
    data() {
      return {
        dayDiff: 0
      }
    },
    computed: {
      chosenProduct() {
        return this.$store.getters.getChosenProduct;
      },
      userInfo() {
        return this.$store.getters.getUserInfo;
      },
      dates() {
        return this.$store.getters.dates;
      }
    },
    methods: {
      dateDiff() {
        var dt1 = new Date(this.dates.startDate);
        var dt2 = new Date(this.dates.stopDate);
        var dayDiff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
        this.dayDiff = dayDiff
        console.log(this.dayDiff);
      }
}
    }

</script>

<style lang="scss">
  @import "../scss/main";
</style>
