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
      <section class="arrow">
        <img v-if="show" @click="show=false" src="../assets/img/baseline-arrow_downward-24px.svg" alt="arrow">
        <img v-if="!show" @click="show=true" src="../assets/img/baseline-arrow_upward-24px.svg" alt="arrow">
      </section>
      <section class="bin">
        <img @click="removeItem" src="../assets/img/baseline-delete-24px.svg" alt="delete">
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
.product {
  background-color: white;
  color: black;

  .user {
    padding: 0 3rem 0 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
    "cat cat cat age age age"
    "length length weigth weigth shoe shoe"
    "info info info info info info"
    "extra extra extra extra extra extra";

    p {
      margin: .3rem;
      padding: .2rem;
    }

    .cat {
      grid-area: cat;
      border: 1px solid lightgray;
    }
    .age {
      grid-area: age;
      border: 1px solid lightgray;

    }
    .length {
      grid-area: length;
      border: 1px solid lightgray;

    }
    .weigth {
      grid-area: weigth;
      border: 1px solid lightgray;

    }
    .shoe {
      grid-area: shoe;
      border: 1px solid lightgray;

    }
    .info {
      grid-area: info;
      border: 1px solid lightgray;

    }
    .extra {
      grid-area: extra;
      border: 1px solid lightgray;

    }


  }

}
</style>
