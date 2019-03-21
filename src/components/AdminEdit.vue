<template>
        <main class="adminEdit">
            <h3>Redigera produkt</h3>
              <section>
                <input type="text" placeholder="Produkt" v-model="product.article">
                <input type="text" placeholder="Art nr" v-model="product.artnr">
                <input type="text" placeholder="Kategori" v-model="product.category">
                <input type="text" placeholder="Pris" v-model="product.price">
                <input type="text" placeholder="Ålder" v-model="product.age">
                <input type="text"  placeholder="Info" v-model="product.info">
              </section>
              <section>
                <a href="#" class="btn-orange" @click="editProduct">Klar</a>
              </section>
      </main>
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
      this.$router.push('/adminProducts')
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/main";

.adminEdit{
  margin: 2rem;

  section {
    @extend%center;
  width: 40vw;
  flex-wrap: wrap;

  input {
    width: 25%;
    padding: .5rem;
    margin: .4rem;
    border-radius: 3px;
    height: 1rem;
    border: 1px solid gray;

  }

  textarea {
    margin-bottom: 2rem;
  }
}
}


</style>
