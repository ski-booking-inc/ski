<template>
        <main class="addAdmin">
            <h1>Lägg till produkt</h1>
                <input type="text" placeholder="Produkt" v-model="addProducts.article">
                <input type="text" placeholder="Art nr" v-model="addProducts.artnr">
                <input type="text" placeholder="Kategori" v-model="addProducts.category">
                <input type="text" placeholder="Pris" v-model="addProducts.price">
                <input type="text" placeholder="Ålder" v-model="addProducts.age">
                <textarea  placeholder="Info" v-model="addProducts.info"></textarea>
            <div>
            <a href="#" class="btn-orange" @click="createProduct">Lägg till</a>
            </div>
        </main>
</template>

<script>
export default {
    name:'adminAdd',
 data() {
   return {
     addProducts: {
       article: '',
       artnr: '',
        category: '',
        age:'',
        info:'',
        price:'',
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
      this.addProducts.artnr ='',
      this.addProducts.category ='',
      this.addProducts.info ='',
      this.addProducts.age ='',
      this.addProducts.price =''
    }
}
}
</script>

<style scoped lang="scss">
  @import "../scss/main";

.addAdmin {
  padding: 0 1rem 1rem 1rem;
  background: white;
  border: 5px solid rgba(255, 255, 255, 0.336);
  margin: 1rem;
  @extend%center;
  flex-direction: column;
  max-width: 300px;

  h3 {
    margin: .5rem 0 0 0;
    padding-bottom: 1.5rem;
  }

  .btn-orange {
    @extend %center;
    width: 10rem;
    background: orange;
    margin: .2rem;
    height: 2.5rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: .8rem;
    border-radius: 4px;
  }

  input,
  textarea {
    width: 80%;
    padding: .5rem;
    margin: .4rem;
    border-radius: 3px;
    max-width: 200px;
    max-height: 50px;
    min-width: 200px;
    min-height: 20px;
  }

  textarea {
    margin-bottom: 2rem;
  }
}
</style>
