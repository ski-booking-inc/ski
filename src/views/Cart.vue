<template>
  <div class="cart">
   <h1>Cart</h1>
   <section v-for="(product, index) in bookedProducts" :key="index">
   </section>
   <section>

   </section>
  </div>
</template>

<script>
import product from '@/components/Product.vue';

// @ is an alias to /src

export default {
  name: 'cart',
  components: {
    product
  },
  computed: {
    bookedProducts () {
      return this.$store.getters.bookedProducts;
    }
  }
 
}
</script>
