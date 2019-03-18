<template>
  <div class="cart">
    <h1>Cart</h1>
    <product v-for='(booking, index) in userBookings' :key='index' :booking='booking' @countTotalSum="countTotalSum"/>
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
      this.countTotalSum()
    },

    methods: {
      async addBooking(){
        if (this.activeUser.name == null) {
          this.$router.push('/login')
        } else {
          //lägg till username till varje Bokning, glöm inte async
          await this.addUsername()
          this.$store.dispatch('setBooking', this.userBookings)
          this.$router.push('/confirm')

        }
      },
      addUsername(){
        for(let i=0; i<this.userBookings.length; i++){
          this.userBookings[i].username = this.activeUser.name
        }
        console.log(this.userBookings)
      },
      countTotalSum(){
        let sum = 0;
        let sumExtras = 0;

        for (let i = 0; i < this.userBookings.length; i++) {
          sum =+ this.userBookings[i].chosenProduct.price * this.dayDiff
        }
        this.getExtras.forEach(item => sumExtras += item)
        this.totalSum = (sumExtras + sum) * this.dayDiff
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
