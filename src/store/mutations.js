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
    selectedDates(state, dates) {
        state.dates = dates
    },
    setInput(state, userInput) {
        state.userInfo = userInput
    },
    setProd(state, testProd) {
        state.testProd = testProd
    }
}
