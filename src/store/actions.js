import Axios from "axios";

export default {
  async getProducts(ctx) {
    let products = await Axios.get('http://localhost:3000/products');
    ctx.commit('setProducts', products.data)
  },
  addProduct(ctx, payload) {
    ctx.commit('addToProductKeys', payload)
  },
  findMatch(ctx) {
    let x = this.state.products;
    let y = this.state.productKeys;
    for (let i = 0; i < x.length; i++) {
      if (y[0] == x[i].article && y[1] == x[i].age && y[2] == x[i].category) {
        ctx.commit('setProduct', x[i])
      }
    }
  },
  setDates (ctx, dates) {
    ctx.commit('selectedDates', dates)
  }, 
  addInput(ctx, userInput) {
    ctx.commit('setInput', userInput)
  },
  async createProduct(ctx, prod ) {
    try {
      await Axios.post('http://localhost:3000/products', prod)
      ctx.dispatch('getProd');
    } catch (err) {
      console.err(err.stack);
    }
  },
  async getProd(ctx) {
    let prod = await Axios.get('http://localhost:3000/products')
    ctx.commit('setProd', prod.data)
  }
}
