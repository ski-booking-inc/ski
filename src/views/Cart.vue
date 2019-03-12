<template>
  <div class="cart">
    <h1>Cart</h1>
    <product/>
    <button type="button" name="button" @click="dateDiff">Test</button>
  </div>
</template>

<script>
import product from "@/components/Product.vue";

// @ is an alias to /src

export default {
  name: "cart",
  components: {
    product
  },
  computed: {
    dates() {
      return this.$store.getters.dates;
    }
  },
  methods: {
    dateDiff() {
      var dt1 = new Date(this.dates.startDate);
      var dt2 = new Date(this.dates.stopDate);
      var dayDiff = Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
      );
      this.$store.dispatch('addDateDiff', dayDiff);
      console.log(dayDiff);
    }
  }
};
</script>
