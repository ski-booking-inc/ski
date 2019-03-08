export default {
    setProducts(state, products) {
        state.products = products;
    },
    addToProductArray(state, payload) {
        state.chosenProduct.push(payload)
    },
    setProduct(state, payload) {
      state.theProduct = payload
    }
}
