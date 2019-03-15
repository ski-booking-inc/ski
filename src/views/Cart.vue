<template>
  <div class="cart">
    <h1>Cart</h1>
    <product v-for='(booking, index) in userBookings' :key='index' :booking='booking'/>
    <p>Total summa: {{ totalSum }}</p>
    <a class="btn green" href="#" @click="$router.push('/products')">Lägg till nytt paket</a>
    <a class="btn blue" href="#" @click="addBooking">Boka</a>
  </div>
</template>

<script>
  import product from "@/components/Product.vue";

  export default {
    name: "cart",
    data() {
      return {
        totalSum: 0
      }
    },
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
      },
      activeUser(){
        return this.$store.getters.getActiveUser;
      }
    },
    beforeMount() {
      let sum = 0;
      let sumExtras = 0;

      for (let i = 0; i < this.userBookings.length; i++) {
        sum =+ this.userBookings[i].chosenProduct.price * this.dayDiff
      }
      this.getExtras.forEach(item => sumExtras += item)
      this.totalSum = (sumExtras + sum) * this.dayDiff
    },

    methods: {
      addBooking(){
        this.$store.dispatch('setBooking', this.userBookings)
        console.log(this.userBookings)
        if (this.activeUser.name == null) {
          this.$router.push('/login')
        } else {
          this.$router.push('/confirm')
        }
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
