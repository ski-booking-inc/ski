export default {
    setProducts(state, products) {
        state.products = products;
    },
    addToProductArray(state, article) {
        state.chosenProduct.push(article)
    }
}
