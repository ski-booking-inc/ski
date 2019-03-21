<template>
      <main class="bookingAdmin adminTable">
        <h1>Bokningar</h1>
        <section>
            <a href="#" class="btn-orange" @click="bookingStatus = 'old'">Gamla Bokningar</a>
            <a href="#" class="btn-orange" @click="bookingStatus = 'new'">Nya Bokningar</a>
            <a href="#" class="btn-orange" @click="bookingStatus = 'all'">Alla Bokningar</a>
        </section>
        <table cellspacing="0" class="table">
            <thead>
                <tr>
                    <th>Kund</th>
                    <th>Start</th>
                    <th>Slut</th>
                    <th>Produkt</th>
                    <th>Märkning</th>
                    <th>Skidglasögon</th>
                    <th>Liftkort</th>
                    <th>Hjälm</th>
                </tr>
            </thead>
            <tbody class="scrolling-box align-left">
                <tr v-for="user in filteredBookings" :key="user._id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.chosenDates.startDate }}</td>
                    <td>{{ user.chosenDates.stopDate }}</td>
                    <td>{{ user.artnr }}</td>
                    <td>{{ user.userInfo.name }}</td>
                    <td>{{ user.userInfo.skigoogles }}</td>
                    <td>{{ user.userInfo.lift }}</td>
                    <td>{{ user.userInfo.helmet }}</td>

                </tr>
            </tbody>
        </table>

      </main>
</template>

<script>
export default {
name:'adminBooking',
data(){
    return{
      currentDate: '',
      bookingStatus: 'all'
    }
},
computed: {
    dbBookings(){
        return this.$store.getters.dbBookings;
   },
   filteredBookings(){
    return this.dbBookings.filter((booking) => {
      if(this.bookingStatus == 'old'){
        return new Date(booking.chosenDates.startDate) < new Date(this.currentDate);
      }
      if(this.bookingStatus == 'new'){
        return new Date(booking.chosenDates.startDate) > new Date(this.currentDate);
      }
      if(this.bookingStatus == 'all'){
        return this.dbBookings;
      }

  })
}
 },
 methods: {
   getTodaysDate(){
     var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      }
      if(mm<10) {
          mm = '0'+mm
      }
      this.currentDate = mm + '-' + dd + '-' + yyyy;
      console.log(this.currentDate)
   },

 },
 beforeMount(){
   this.getTodaysDate()
 }
}
</script>

<style scoped lang="scss">
  @import "../scss/main";
  .bookingAdmin {
    background: white;
    border: 5px solid rgba(255, 255, 255, 0.336);
    margin: 1rem;

    section {
      @extend %center;
      margin: 2rem;

    }
    .scrolling-box {
      display: block;
      overflow-y: scroll;
      height: 40vh;
    }
    .align-left {
    text-align: left;
    }
  }

</style>
