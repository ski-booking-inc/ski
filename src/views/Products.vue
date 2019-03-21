<template>
  <main class="products">
    <Who/>

    <section class="containerTest">
    <h2>Välj datum</h2>
    <h3>Från: </h3>
    <date-pick v-model="dates.startDate" :format="'YYYY-MM-DD'" :isDateDisabled="isFutureDate"></date-pick>
    <h3>Till: </h3>
    <date-pick v-model="dates.stopDate" :format="'YYYY-MM-DD'" :isDateDisabled="isFutureDate"></date-pick>
      <h2 v-if="show">Välj utrustning</h2>
      <a
        class="btnChoose"
        :class="[{hide1:select1 == 1}, {hide2:select2 == 1}]"
        href="#"
        @click="addProduct('Skidor Alpin', 2, 3)"
      >Skidor Alpin</a>
      <a
        class="btnChoose"
        :class="[{hide1:select1 == 2}, {hide2:select2 == 2}]"
        href="#"
        @click="addProduct('Snowboard', 1, 3)"
      >Snowboard</a>
      <a
        class="btnChoose"
        :class="[{hide1:select1 == 3}, {hide2:select2 == 3}]"
        href="#"
        @click="addProduct('Skidor Längd', 1, 2)"
      >Skidor Längd</a>
      <section>
        <router-view />
      </section>
    </section>
    <span>
    <a href="#" class="btn" @click="dateFunctions">Gå vidare</a>
    </span>
  </main>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import Who from "@/components/Who.vue";

export default {
  name: "products",
  components: {
    DatePick,
    Who
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
      datesArray: [],
      isBooked: false
    };
  },
  computed: {
    dbBookings(){
      return this.$store.getters.dbBookings
    },
    chosenProduct(){
      return this.$store.getters.getChosenProduct
    },
    products(){
      return this.$store.getters.getProducts
    }
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
      if (dayDiff == 0){
        dayDiff ++;
      }
      this.$store.dispatch("addDateDiff", dayDiff);
    },
    async dateFunctions(){
      await this.getDatesArray()
      await this.checkIfBooked()
      if(!this.isBooked){
      this.$router.push('/userInfo')
    } else {
        this.alert()
    }
    },
    showButton(){
      console.log('Hek')
    },
    alert() {
      this.$swal("Fullbokat", "Prova nåt annat", "warning")
      },
    getDatesArray() {
      var getDaysArray = function(startDate, stopDate) {
        for (var arr = [], dt = startDate;dt <= stopDate;dt.setDate(dt.getDate() + 1)) {
          arr.push(new Date(dt));
        }
        return arr;
      };
      var daylist = getDaysArray(new Date(this.dates.startDate),new Date(this.dates.stopDate));
      this.datesArray = daylist.map(v => v.toISOString().slice(0, 10));
    },
    async checkIfBooked(){
      let p = this.products;
      let x = this.dbBookings;
      let y = this.chosenProduct;
      let d = this.datesArray;
      let booked = [];

      let prodArr = p.filter(v => v.artnr === y.artnr)
      let filtered = x.filter(v => v.artnr === y.artnr)

      for(let i=0; i<filtered.length; i++){
        if(d.includes(filtered[i].chosenDates.startDate) || d.includes(filtered[i].chosenDates.stopDate)) {
          booked.push(filtered[i])
        }
      }
        if(booked.length == prodArr.length){
          this.isBooked = true
          console.log('Fullbokat')
        }
        if(booked.length == 0) {
          this.isBooked = false
          console.log('Ingen bokning på detta artnr')
        }
        if(booked.length > 0 && booked.length < prodArr.length) {
          booked.forEach(function(element) {
          for(let i=0; i<prodArr.length; i++){
            if(element.productId == prodArr[i]._id){
              let position = prodArr.indexOf(prodArr[i])
              prodArr.splice(position,1)
            }
          }
        })
        await this.$store.dispatch('updateChosenProduct', prodArr[0])
        this.isBooked = false
        console.log('Bokningar finns på detta artnr, men ej fullbokat')
        }

    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";
.products{
  .containerTest {
    padding: 0 4rem !important;

  h2 {
   padding: .3rem;
   margin: .1rem;
   font-size: 1.5rem;

  }
  h3 {
    margin: .1rem;
    font-size: .7rem;
  }
    input {
    border-radius: 5px;
    border: none;
    height: 1.8rem;
    margin: .3rem;
  }
    @media screen and (min-width: 480px){
          input {
            height: 1rem;
        }
          h2 {
            padding: .2rem;
            font-size: 1.3rem;
          }
        }
}
      
    
}


</style>
