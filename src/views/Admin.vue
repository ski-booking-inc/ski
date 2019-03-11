<template>
    <main class="admin">
      <div class="productAdmin">
        <h3>Products</h3>

      </div>
      <div class="bookingAdmin">
        <h3>Bookings</h3> 
      </div>
      <div class="editAdmin">
        <h3>Add/Edit/Delete</h3>
        <input type="text" placeholder="Package Name..." v-model="addProducts.article">
        <input type="text" placeholder="Level..." v-model="addProducts.category">
        <input type="textarea" placeholder="Info..." v-model="addProducts.info">
        <input type="text" placeholder="Price..." v-model="addProducts.price">
        <input type="text" placeholder="Age..." v-model="addProducts.age">
        <input type="text" placeholder="How many package..." v-model="addProducts.packages.total">
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
   //this.$store.state.adminProducts = []
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
     await this.$store.dispatch('getProd');
     
     console.log(this.addProducts);
    

      // this.clearInput()
    
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
   testProducts(){
     return this.$store.state.testProducts;
   }
 }
}
</script>
<style lang="scss">
@import "../scss/main";
$baseline: 100px;

body {
    margin: 0;
    display: flex;
    flex-direction: column;
    @extend%center;

    .admin {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows:$baseline*2 $baseline*3;
      grid-template-areas:
      "productAdmin editAdmin"
      "bookingAdmin editAdmin";
      width: 100vw;
      max-width: 1000px;
      

      .productAdmin{
        background: red;
        grid-area: productAdmin;

      }

      .editAdmin{
        background: darkcyan;
        grid-area: editAdmin;
      }

      .bookingAdmin {
        background: fuchsia;
        grid-area: bookingAdmin;
      }
    }
  @media screen and (max-width: 480px){
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

