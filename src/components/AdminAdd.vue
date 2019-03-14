<template>
        <div class="editAdmin">
            <h3>Add</h3>
                <input type="text" placeholder="Name..." v-model="addProducts.article">
                <input type="text" placeholder="Nivå Nybörjare, Medel, Proffs" v-model="addProducts.category">
                <input type="text" placeholder="Pris..." v-model="addProducts.price">
                <input type="text" placeholder="Ålder? 0-6, 7-15, +16" v-model="addProducts.age">
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
        booked: false
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
      this.addProducts.price =''
    }
}
}
</script>

<style>

</style>
