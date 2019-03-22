<template>
  <main class="addAdmin">
    <h1>Lägg till produkt</h1>
    <label>Produkt</label>
    <input type="text" placeholder="Produkt" v-model="addProducts.article">
    <label>Art nr</label>
    <input type="text" placeholder="Art nr" v-model="addProducts.artnr">
    <label>Kategori</label>
    <input type="text" placeholder="Kategori" v-model="addProducts.category">
    <label>Pris</label>
    <input type="text" placeholder="Pris" v-model="addProducts.price">
    <label>Ålder</label>
    <input type="text" placeholder="Ålder" v-model="addProducts.age">
    <label>Info</label>
    <textarea  placeholder="Info" v-model="addProducts.info"></textarea>
    <section>
      <a href="#" class="btn-orange" @click="createProduct">Lägg till</a>
    </section>
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
   //Trigger function to send new product to mongo db
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

  label {
    font-size: .8rem;
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
    border: 1px solid gray;
  }

  textarea {
    margin-bottom: 2rem;
  }
}
</style>
