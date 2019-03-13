<template>
  <div class="cart">
    <h1>Cart</h1>
    <product v-for='(booking, index) in userBookings' :key='index' :booking='booking'/>
    <p>Total summa: {{ getExtras }}</p>
    <a class="btn green" href="#" @click="$router.push('/products')">Lägg till nytt paket</a>
    <a class="btn blue" href="#" @click="$router.push('/products')">Boka</a>
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
    userBookings() {
      return this.$store.getters.userBookings;
    },
    chosenProduct() {
      return this.$store.getters.getChosenProduct;
    },
    dayDiff() {
      return this.$store.getters.dayDiff;
    },
    getExtras() {
      return this.$store.getters.getExtras;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main";

p {
  color: peachpuff;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>