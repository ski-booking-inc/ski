<template>
          <div class="bookingAdmin adminTable">
        <div>
            <h3>Bokning</h3>
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
                      <tr v-for="user in dbBookings" :key="user._id">
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
    return{}
},
computed: {
    dbBookings(){
        return this.$store.getters.dbBookings;
   }
 }
}
</script>

<style>

</style>
