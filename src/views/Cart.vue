<template>
  <div class="cart">
    <h1>Cart</h1>
    <product/>
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
    userBookings () {
      return this.$store.getters.userBookings;
    }
  }
};
</script>
