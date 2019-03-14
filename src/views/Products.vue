<template>
  <main class="products">
    <h2>Välj Datum</h2>
    <date-pick v-model="dates.startDate" :format="'YYYY-MM-DD'" :isDateDisabled="isFutureDate"></date-pick>
    <date-pick v-model="dates.stopDate" :format="'YYYY-MM-DD'" :isDateDisabled="isFutureDate"></date-pick>
    <section class="products">
      <h2 v-if="show">Välj utrustning</h2>
      <a
        class="btn"
        :class="[{hide1:select1 == 1}, {hide2:select2 == 1}]"
        href="#"
        @click="addProduct('Skidor Alpin', 2, 3)"
      >Skidor Alpin</a>
      <a
        class="btn"
        :class="[{hide1:select1 == 2}, {hide2:select2 == 2}]"
        href="#"
        @click="addProduct('Snowboard', 1, 3)"
      >Snowboard</a>
      <a
        class="btn"
        :class="[{hide1:select1 == 3}, {hide2:select2 == 3}]"
        href="#"
        @click="addProduct('Skidor Längd', 1, 2)"
      >Skidor Längd</a>
    </section>
    <section>
      <a href="#" class="btn" @click="checkDates">Kolla datum</a>
    </section>
    <router-view/>
  </main>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  name: "products",
  components: {
    DatePick
  },
  data() {
    return {
      select1: undefined,
      select2: undefined,
      show: true,
      dates: {
        startDate: "",
        stopDate: ""
      },
      datesArray: []
    };
  },
  methods: {
    addProduct(article, num1, num2) {
      this.select1 = num1;
      this.select2 = num2;
      this.show = false;
      this.$store.dispatch("addProduct", article);
      this.$router.push(`/age`);
      this.addDates();
      this.dateDiff();
    },
    isFutureDate(date) {
      const currentDate = new Date();
      return date < currentDate;
    },
    addDates() {
      this.$store.dispatch("setDates", this.dates);
    },
    dateDiff() {
      var dt1 = new Date(this.dates.startDate);
      var dt2 = new Date(this.dates.stopDate);
      var dayDiff = Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
      );
      this.$store.dispatch("addDateDiff", dayDiff);
      console.log(dayDiff);
    },
    checkDates() {
      var getDaysArray = function(startDate, stopDate) {
        for (var arr = [], dt = startDate;dt <= stopDate;dt.setDate(dt.getDate() + 1)) {
          arr.push(new Date(dt));
        }
        return arr;
      };
      var daylist = getDaysArray(new Date(this.dates.startDate),new Date(this.dates.stopDate));
      this.datesArray = daylist.map(v => v.toISOString().slice(0, 10));
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.products {
  @extend %center;
  flex-direction: column;

  .hide1,
  .hide2 {
    display: none !important;
  }
}
</style>
