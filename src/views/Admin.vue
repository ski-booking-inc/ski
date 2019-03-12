<template>
    <main class="admin">
      <div class="productAdmin">
        <div>
          <ul>
            <h3>Products</h3>
            <li v-for="prod in products" :key="prod._id">{{ prod.article }}</li>
          </ul> 
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
      await this.$store.dispatch('getProducts');

     console.log(this.addProducts);
    //  setTimeout(() => { 
       this.clearInput();
    //  }, 5000);
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
// HÄR LIGGER STYLINGEN
        ul {
          li{
            list-style: none;
            margin: 0;
            padding:0;
          }
        }
      }

      .editAdmin{
        grid-area: editAdmin;
        margin: 0 auto;

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

