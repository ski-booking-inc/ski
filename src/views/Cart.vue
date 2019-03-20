<template>
  <main class="cart">
    <Who/>
    <section class="containerTest">
      <h1>Varukorg</h1>
      <product class="product" v-for='(booking, index) in userBookings' :key='index' :booking='booking' @countTotalSum="countTotalSum"/>
      <p>Total summa: {{ totalSum }}</p>
      <a class="btn-orange" href="#" @click="$router.push('/products')">Lägg till nytt paket</a>
    </section>
    <a class="btn blue" href="#" @click="addBooking">Boka</a>
  </main>
</template>

<script>
  import product from "@/components/Product.vue";
  import Who from "@/components/Who.vue";

  export default {
    name: "cart",
    data() {
      return {
        totalSum: 0
      }
    },
    components: {
      product,
      Who
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
          this.$store.dispatch('emptyBookings')
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

  .cart {
    .containerTest {
      overflow: scroll;

      .btn-orange {
        @extend %center;
        width: 10rem;
        background: #ff794f;
        margin: .2rem;
        height: 2.5rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-size: .8rem;
        border-radius: 4px;
      }

      .product {
        margin-top: .7rem;
      }
    }


  }

</style>
