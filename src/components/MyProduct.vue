<template>
  <main>
    <section>
      <h2>{{ booking.userInfo.name  }}</h2>
      <p>{{ product[0].article }}</p>
      <p>{{ booking.chosenDates.startDate }} - {{ booking.chosenDates.stopDate }}</p>
    </section>
    <section v-if="!show">
      <h3>{{ dayDiff}} dagar {{ product[0].price * dayDiff}}:-</h3>
      <p>{{ product.category }}</p>
      <p>{{ product[0].age }}</p>
      <p>{{ product[0].info }}</p>
      <p>{{ booking.userInfo.length }} cm</p>
      <p>{{ booking.userInfo.weight }} kg</p>
      <p>Stl {{ booking.userInfo.shoe }}</p>
      <p v-if="booking.userInfo.lift">Liftkort 1999:-</p>
      <p v-if="booking.userInfo.helmet">Hjälm 49:-</p>
      <p v-if="booking.userInfo.skigoogles">Skidglasögon 69:-</p>
      <h3>Totalsumma: {{ total }}:-</h3>

    </section>
    <section>
      <aside class>
        <button class="btn" @click="removeItem">Avboka</button>
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
  name: "myProduct",
  props: ["booking"],
  data() {
    return {
      show: true,
      dayDiff: 0,
      total: 0
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProducts.filter(product => product.artnr === this.booking.artnr);
    },
    extras() {
      return this.$store.getters.extras;
    }
  },
  methods: {
    removeItem(booking) {
      let id = this.booking._id;
      this.$store.dispatch("removeBooking", id);
    },
    dateDiff(){
      var dt1 = new Date(this.booking.chosenDates.startDate);
      var dt2 = new Date(this.booking.chosenDates.stopDate);
      this.dayDiff = Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
      );
    },
    countTotal(){
      if(this.booking.userInfo.helmet){
        this.total += this.extras.helmet * this.dayDiff
      }
      if(this.booking.userInfo.lift){
        this.total += this.extras.lift * this.dayDiff
      }
      if(this.booking.userInfo.skigoogles){
        this.total += this.extras.skigoogles * this.dayDiff
      }
      this.total += this.product[0].price * this.dayDiff
      console.log(this.total)
    }

  },
  beforeMount(){
      this.dateDiff()
      this.countTotal()
  }
};
</script>
<style lang="scss">
@import "../scss/main";
main {
  border: 1px solid black;
}
</style>
