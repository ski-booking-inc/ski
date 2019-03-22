<template>
  <main class="myproduct">
    <section class="user">
      <h2>{{ booking.userInfo.name  }}</h2>
      <p>{{ product[0].article }}</p>
      <p>{{ booking.chosenDates.startDate }} - {{ booking.chosenDates.stopDate }}</p>
      <h3>{{ dayDiff}} dagar {{ product[0].price * dayDiff}}:-</h3>
    </section>
    <section class="grid" v-if="!show">
      <section class="cat">
        <p>{{ product[0].category }}</p>
      </section>
      <section class="age">
        <p>{{ product[0].age }}</p>
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
      <p>{{ product[0].info }}</p>
      </section>
      <section class="extra">
        <p v-if="booking.userInfo.lift">Liftkort 499:-</p>
        <p v-if="booking.userInfo.helmet">Hjälm 49:-</p>
        <p v-if="booking.userInfo.skigoogles">Skidglasögon 69:-</p>
      </section>
    </section>
    <h3>Totalsumma: {{ total }}:-</h3>
    <a href="#" class="btn-orange" @click="removeItem">Avboka</a>
    <section>
      <img v-if="show" @click="show=false" src="../assets/img/baseline-arrow_downward-24px.svg" alt="arrow">
      <img v-if="!show" @click="show=true" src="../assets/img/baseline-arrow_upward-24px.svg" alt="arrow">
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
    //Trigger remove booking from db function
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
h2 {
  font-size: 1rem;
  margin: .3rem;
}
.btn-orange {
   margin: 0 auto !important;
   margin-bottom: .1rem;
}
</style>
