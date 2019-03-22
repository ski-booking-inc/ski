<template>
  <main class="adminEdit">
    <h3>Redigera produkt</h3>
    <section class="input-wrapper">
      <section class="input-box" >
        <label>Produkt</label>
        <input type="text" placeholder="Produkt" v-model="product.article">
      </section>
      <section class="input-box" >
        <label>Art nr</label>
        <input type="text" placeholder="Art nr" v-model="product.artnr">
      </section>
      <section class="input-box" >
        <label>Kategori</label>
        <input type="text" placeholder="Kategori" v-model="product.category">
      </section>
      <section class="input-box" >
        <label>Pris</label>
        <input type="text" placeholder="Pris" v-model="product.price">
      </section>
      <section class="input-box" >
        <label>Ålder</label>
        <input type="text" placeholder="Ålder" v-model="product.age">
      </section>
      <section class="input-box" >
        <label>Info</label>
        <input type="text"  placeholder="Info" v-model="product.info">
      </section>
    </section>
    <section>
      <a href="#" class="btn-orange" @click="editProduct">Klar</a>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'adminEdit',
    computed: {
      product() {
        return this.$store.getters.getProductById(
          this.$route.params.id
        )
      }
    },
    methods: {
      //Trigger function to edit product in mongo db
      editProduct(product, id) {
        this.$store.dispatch('editProduct', this.product)
        this.$router.push('/adminProducts')
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/main";

  .adminEdit {
    margin: .5rem 2rem 0 2rem;
    @extend%center;
    flex-direction: column;

   .input-wrapper {
      margin-top: 1rem;
    }


    section {
      @extend%center;
      width: 40vw;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0;

      &.input-box {
        @extend%center;
        flex-direction: column;
        max-width: 9rem;
        margin: 0 1rem 0 1rem;
      }
      label {
        font-size: .8rem;
      }

      input {
        width: 8rem;
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
