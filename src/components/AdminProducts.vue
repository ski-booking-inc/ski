<template>
  <div class="productAdmin adminTable">
    <div>
      <h3>Produkter</h3>
      <input class="inputsearch" type="text" v-model="search" placeholder="Sök efter en produkt">
      <table cellspacing="0" class="table">
        <thead>
          <tr class="tableProd">
            <th>Namn:</th>
            <th>Nivå:</th>
            <th>Ålder:</th>
          </tr>
        </thead>
        <tbody class="scrolling-box">
          <tr  v-for="prod in filterProd" :key="prod._id">
            <td>{{ prod.article }}</td>
            <td>{{ prod.category }}</td>
            <td>{{ prod.age }}</td>
            <!-- <td><button><img src="../assets/img/edit.svg" alt="edit"></button></td>  -->
            <td>
              <button @click="removeProd(prod._id)">
                <img src="../assets/img/baseline-delete-24px.svg" alt="Ta Bort">
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminProducts",
  data() {
    return {
      prod: [],
      search: ""
    };
  },
  methods: {
    async removeProd(id) {
      this.$store.dispatch("removeProd", id);
      await this.$store.dispatch("getProducts");
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filterProd: function() {
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
.inputsearch {
  margin-top: 1rem;
  font-size: 0.7rem;
  padding: 0.2rem 1rem;
}
.scrolling-box {
  display: block;
  overflow-y: scroll;
  height: 50vh;
}
.tableProd {
  display: inline-block;
}
</style>
