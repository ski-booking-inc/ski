<template>
          <div class="productAdmin">
        <div>
            <h3>Products</h3>
              <table cellspacing="0" class="table">
                  <thead>
                      <tr>
                          <th>Namn:</th>
                          <th>Nivå:</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="prod in products" :key="prod._id">
                      <td>{{ prod.article }}</td>
                      <td>{{ prod.category }}</td>
                      <!-- <td><button><img src="../assets/img/edit.svg" alt="edit"></button></td>  -->
                      <!-- <td><button @click="removeProd(prod._id)"><img src="../assets/img/baseline-delete-24px.svg" alt="Ta Bort"></button></td> -->
                      </tr>
                  </tbody>
              </table>
        </div>
      </div>
</template>

<script>
export default {
name: 'AdminProducts',
data(){
    return {
    }
},
// methods: {
//       async removeProd(id) {
//      this.$store.dispatch('removeProd',id);
//       await this.$store.dispatch('getProducts');
//    }
// },
computed: {
    products(){
        return this.$store.state.products;
   }
 }
}
</script>

<style>

</style>
