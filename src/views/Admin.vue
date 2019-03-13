<template>
    <main class="admin">
      <div class="productAdmin">
        <div>
            <h3>Products</h3>
              <table cellspacing="0" class="table">
                  <thead>
                      <tr>
                          <th>Namn:</th>
                          <th>Nivå:</th>
                          <th>Totalt antal:</th>
                          <th>Antal uthyrda:</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="prod in products" :key="prod._id">
                      <td>{{ prod.article }}</td>
                      <td>{{ prod.category }}</td>
                      <td>{{ prod.packages.total }}</td>
                      <td>{{ prod.packages.booked }}</td> 
                      </tr>
                  </tbody>
              </table>
        </div>
      </div>
      <div class="bookingAdmin">
        <h3>Bookings</h3> 
      </div>
      <div class="editAdmin">
        <h3>Add/Edit/Delete</h3>
        <input type="text" placeholder="Package Name..." v-model="addProducts.article">
        <input type="text" placeholder="Nybörjare, Medel, Proffs" v-model="addProducts.category">
        <input type="text" placeholder="Price..." v-model="addProducts.price">
        <input type="text" placeholder="0-6, 7-16, 17+" v-model="addProducts.age">
        <input type="text" placeholder="How many package..." v-model="addProducts.packages.total">
        <textarea  placeholder="Info..." v-model="addProducts.info"></textarea>
        <div>
          <a href="#" class="btn" @click="createProduct">Add</a>
        </div>
      </div>
    </main>
</template>

<script>

export default {
  name: 'admin',
 beforeMount(){
   this.$store.dispatch('getProducts');
 },
 data() {
   return {
      addProducts: {
        article: '',
        category: '',
        age:'',
        info:'',
        price:'',
        packages :{
          total: '',
          booked: ''
        }
      }
    }
  },
 methods: {
    async createProduct(){
      await this.$store.dispatch('createProduct', this.addProducts);
      await this.$store.dispatch('getProducts');
            this.clearInput();

   },
     clearInput(){
      this.addProducts.article ='',
      this.addProducts.category ='',
      this.addProducts.info ='',
      this.addProducts.age ='',
      this.addProducts.price ='',
      this.addProducts.packages.total =''
    }
 },
 computed: {
   products(){
     return this.$store.state.products;
   }
 }
}
</script>
<style lang="scss">
@import "../scss/main";
$baseline: 100px;

body {
  margin: 0 auto;
    display: flex;
    flex-direction: column;
    @extend%center;
    max-width: 768px;

    .admin {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows:auto auto;
      grid-template-areas:
      "productAdmin editAdmin"
      "bookingAdmin editAdmin";
      width: 100vw;
      

      .productAdmin{
        grid-area: productAdmin;
        background: rgba($color: #000000, $alpha: 0.3);

        h3 {
          margin: .5rem 0 0 0;
        }
        

         table {
            grid-area: table;
            padding: .1rem;
            margin: 0 auto;

            thead {
                tr {
                    th {
                        color: darkmagenta;
                        font-weight: 500;
                        font-size: 1.1rem !important;
                        border-bottom: 1px solid #fff;
                        padding:1.5rem;
                    }
                }
            }
            tbody {
                tr {
                    td {
                        color: rgba($color: #fff, $alpha: 0.8);
                    }
                    &:nth-child(2n){
                        background:  #ffffff2c;
                    }
                }
            }
        }

      }

      .editAdmin{
        grid-area: editAdmin;
        margin: 0 auto;
        padding: 0 1rem 1rem 1rem;
        background: rgba($color: #000000, $alpha: 0.3);

        h3 {
          margin: .5rem 0 0 0;
          padding-bottom: 1.5rem;
        }

        input, textarea {
          width: 80%;
          padding: .5rem;
          margin: .4rem;
          border-radius: 3px;
          max-width: 200px;
          max-height: 50px;
          min-width: 200px;
          min-height: 20px;
          display: block;
        }
        .btn {
          width:inherit;
        }
      }

      .bookingAdmin {
        background: fuchsia;
        grid-area: bookingAdmin;
      }
    }
  @media screen and (max-width: 650px){
  .admin{
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "productAdmin"
    "bookingAdmin"
    "editAdmin";
    }
  }
}
</style>

