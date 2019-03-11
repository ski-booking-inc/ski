export default {
    setProducts(state, products) {
        state.products = products;
    },
    addToProductKeys(state, payload) {
        state.productKeys.push(payload)
    },
    setProduct(state, payload) {
      state.chosenProduct = payload
    },
    setInput(state, userInput) {
        state.userInfo = userInput
    }
}
