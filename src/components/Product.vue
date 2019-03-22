<template>
  <main class="product">
    <section class="user">
      <h2>{{ booking.userInfo.name }}</h2>
      <p>{{ booking.chosenProduct.article }}</p>
      <p>{{ booking.chosenDates.startDate }} - {{ booking.chosenDates.stopDate }}</p>
      <h3>{{ dayDiff}} dagar {{ booking.chosenProduct.price * dayDiff}}:-</h3>
    </section>
    <section class="grid" v-if="!show">
      <section class="cat">
        <p>{{ booking.chosenProduct.category }}</p>
      </section>
      <section class="age">
        <p>{{ booking.chosenProduct.age }}</p>
      </section>
      <section class="length">
        <p>{{ booking.userInfo.length }} cm</p>
      </section>
      <section class="weigth">
        <p>{{ booking.userInfo.weight }} kg</p>
      </section>
      <section class="shoe">
        <p>Stl {{ booking.userInfo.shoe }}</p>
      </section>
      <section class="info">
        <p>{{ booking.chosenProduct.info }}</p>
      </section>
      <section class="extra">
        <p v-if="booking.userInfo.lift">Liftkort 499:-</p>
        <p v-if="booking.userInfo.helmet">Hjälm 49:-</p>
        <p v-if="booking.userInfo.skigoogles">Skidglasögon 69:-</p>
      </section>
      </section>
      <article class="aside">
        <section class="arrow">
          <img v-if="show" @click="show=false" src="../assets/img/baseline-arrow_downward-24px.svg" alt="arrow">
          <img v-if="!show" @click="show=true" src="../assets/img/baseline-arrow_upward-24px.svg" alt="arrow">
        </section>
        <section class="bin">
          <img @click="removeItem" src="../assets/img/baseline-delete-24px.svg" alt="delete">
        </section>
      </article>
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
    //Trigger remove product from cart function and update total sum
    removeItem() {
      this.$store.dispatch("removeProduct", this.booking);
      this.$emit('countTotalSum')
    }
  }
};
</script>
<style lang="scss">
@import "../scss/main";
.aside {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
