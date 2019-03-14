<template>
        <div class="editAdmin">
            <h3>Add</h3>
                <input type="text" placeholder="Name..." v-model="addProducts.article">
                <input type="text" placeholder="Nybörjare, Medel, Proffs" v-model="addProducts.category">
                <input type="text" placeholder="Pris..." v-model="addProducts.price">
                <input type="text" placeholder="0-6, 7-15, +16" v-model="addProducts.age">
                <input type="text" placeholder="Hur många..." v-model="addProducts.packages.total">
                <input type="text" placeholder="Antal uthyrda (under dev...)" v-model="addProducts.packages.booked">
                <textarea  placeholder="Info..." v-model="addProducts.info"></textarea>
            <div>
            <a href="#" class="btn" @click="createProduct">Add</a>
            </div>
            <div>
            <!-- <a href="#" class="btn" >Edit</a> -->
            </div>
      </div>
</template>

<script>
export default {
    name:'adminAdd',
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
      this.addProducts.packages.booked =''
    }
}
}
</script>

<style>

</style>
