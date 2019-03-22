<template>
  <main class="productAdmin adminTable">
    <h1>Produkter</h1>
    <section>
      <input class="inputsearch" type="text" v-model="search" placeholder="Sök efter en produkt">
      <table cellspacing="0" class="table">
        <thead class="align-left">
          <tr class="tableProd">
            <th>Art nr</th>
            <th>Namn</th>
            <th>Kategori</th>
            <th>Ålder</th>
            <th>Pris</th>
            <th>Info</th>
            <th>Edit</th>
            <th>Ta bort</th>
          </tr>
        </thead>
        <tbody class="scrolling-box align-left">
          <tr v-for="prod in filterProd" :key="prod._id">
            <td>{{ prod.artnr }}</td>
            <td>{{ prod.article }}</td>
            <td>{{ prod.category }}</td>
            <td>{{ prod.age }}</td>
            <td>{{ prod.price }}</td>
            <td>{{ prod.info }}</td>
            <td><img src="../assets/img/edit.svg" alt="edit" @click="$router.push(`/adminEdit/${prod._id}`)"></td>
            <td><img src="../assets/img/baseline-delete-24px.svg" alt="Ta Bort" @click="removeProd(prod._id)"></td>
          </tr>
        </tbody>
      </table>
    </section>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "adminProducts",
  data() {
    return {
      prod: [],
      search: "",
      edit: false
    };
  },
  methods: {
    //Trigger remove product from mongo db in admin
    async removeProd(id) {
      this.$store.dispatch("removeProd", id);
      await this.$store.dispatch("getProducts");
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filterProd() {
      return this.products.filter(prod => {
        return (
          prod.article.toLowerCase().match(this.search.toLowerCase()) ||
          prod.category.toLowerCase().match(this.search.toLowerCase()) ||
          prod.age.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.productAdmin {
  background: white;
  border: 5px solid rgba(255, 255, 255, 0.336);
  margin: 1rem;

  .inputsearch {
    border: none;
    padding: .5rem;
    font-size: 1rem;
    height: 1.5rem;
    border: 1px solid gray;
    border-radius: 4px;
    margin: 1rem;
  }
  .scrolling-box {
    display: block;
    overflow-y: scroll;
    height: 40vh;
  }
  .align-left {
  text-align: left;

  }
  .tableProd {
    display: inline-block;
  }
}
</style>
