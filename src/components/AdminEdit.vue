<template>
        <div class="adminEdit">
            <h3>Redigera produkt</h3>
                <input type="text" placeholder="Produkt" v-model="product.article">
                <input type="text" placeholder="Art nr" v-model="product.artnr">
                <input type="text" placeholder="Kategori" v-model="product.category">
                <input type="text" placeholder="Pris" v-model="product.price">
                <input type="text" placeholder="Ålder" v-model="product.age">
                <textarea  placeholder="Info" v-model="product.info"></textarea>
            <div>
            <a href="#" class="btnAdmin" @click="editProduct, $router.push('/adminProducts')">Edit</a>
            </div>
      </div>
</template>

<script>
export default {
    name:'adminEdit',
computed: {
  product(){
    return this.$store.getters.getProductById(
      this.$route.params.id
    )
  }
},
 methods: {
    editProduct(product, id){
      this.$store.dispatch('editProduct', this.product)
      console.log(this.product)
}


}
}
</script>

<style>
.adminEdit{
  margin: 2rem;
}
textarea {
  margin-bottom: 2rem;
}
</style>
