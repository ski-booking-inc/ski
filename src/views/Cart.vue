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

  // @ is an alias to /src

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
      extras() {
        return this.$store.getters.extras;
      },
      activeUser(){
        return this.$store.getters.getActiveUser;
      }
    },
    beforeMount() {
      let sum = 0;
      let liftcount = 0;
      let helmetcount = 0;
      let skigooglescount = 0;

      for (let i = 0; i < this.userBookings.length; i++) {
        sum = +this.userBookings[i].chosenProduct.price * this.dayDiff
      }
      for (let j = 0; j < this.getExtras.length; j++) {
        if (this.getExtras[j] === 'lift') {
          liftcount++
        }
        if (this.getExtras[j] === 'helmet') {
          helmetcount++
        }
        if (this.getExtras[j] === 'skigoogles') {
          skigooglescount++
        }
      }
      let sumExtras = ((liftcount * this.extras.lift) + (helmetcount * this.extras.helmet) + (skigooglescount * this.extras.skigoogles)) * this.dayDiff
      this.totalSum = sumExtras + sum
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
