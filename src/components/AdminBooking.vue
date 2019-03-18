<template>
          <div class="bookingAdmin adminTable">
        <div>
            <h3>Bokning</h3>
            <a href="#" @click="bookingStatus = 'old'">Gamla Bokningar</a>
            <a href="#" @click="bookingStatus = 'new'">Nya Bokningar</a>
            <a href="#" @click="bookingStatus = 'all'">Alla Bokningar</a>
              <table cellspacing="0" class="table">
                  <thead>
                      <tr>
                          <th>Namn:</th>
                          <th>Start Datum:</th>
                          <th>Slut Datum:</th>
                          <th>Hjälm?</th>
                          <th>Skidglasögon</th>
                          <th>Liftkort?</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="user in filteredBookings" :key="user._id">
                      <td>{{ user.userInfo.name }}</td>
                      <td>{{ user.chosenDates.startDate }}</td>
                      <td>{{ user.chosenDates.stopDate }}</td>
                      <td>{{ user.userInfo.helmet }}</td>
                      <td>{{ user.userInfo.skigoogles }}</td>
                      <td>{{ user.userInfo.lift }}</td>
                      </tr>
                  </tbody>
              </table>
        </div>
      </div>
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
      var mm = today.getMonth()+1; //January is 0!
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

<style>

</style>
