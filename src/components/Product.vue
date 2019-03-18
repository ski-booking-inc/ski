<template>
  <main>
    <section>
      <h2>{{ booking.userInfo.name }}</h2>
      <p>{{ booking.chosenProduct.article }}</p>
      <p>{{ booking.chosenDates.startDate }} - {{ booking.chosenDates.stopDate }}</p>
    </section>
    <section v-if="!show">
      <h3>{{ dayDiff}} dagar {{ booking.chosenProduct.price * dayDiff}}:-</h3>
      <p>{{ booking.chosenProduct.category }}</p>
      <p>{{ booking.chosenProduct.age }}</p>
      <p>{{ booking.chosenProduct.info }}</p>
      <p>{{ booking.userInfo.length }} cm</p>
      <p>{{ booking.userInfo.weight }} kg</p>
      <p>Stl {{ booking.userInfo.shoe }}</p>
      <p v-if="booking.userInfo.lift">Liftkort 1999:-</p>
      <p v-if="booking.userInfo.helmet">Hjälm 49:-</p>
      <p v-if="booking.userInfo.skigoogles">Skidglasögon 69:-</p>
    </section>
    <section>
      <aside class>
        <img @click="removeItem" src="../assets/img/baseline-delete-24px.svg" alt="delete">
      </aside>
      <aside class>
        <img
          v-if="show"
          @click="show=false"
          src="../assets/img/baseline-arrow_downward-24px.svg"
          alt="arrow"
        >
        <img
          v-if="!show"
          @click="show=true"
          src="../assets/img/baseline-arrow_upward-24px.svg"
          alt="arrow"
        >
      </aside>
    </section>
  </main>
</template>
<script>
export default {
  name: "product",
  props: ["booking"],
  data() {
    return {
      show: true
    };
  },
  computed: {
    dayDiff() {
      return this.$store.getters.dayDiff;
    }
  },
  methods: {
    removeItem() {
      this.$store.dispatch("removeProduct", this.booking);
      this.$emit('countTotalSum')
    }
  }
};
</script>
<style lang="scss">
@import "../scss/main";
main {
  border: 1px solid black;
}
</style>
