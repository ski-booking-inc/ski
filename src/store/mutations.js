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
    setBooking(state, booking) {
      state.userBookings.push(booking)
    },
    setDateDiff(state, dayDiff) {
        state.dayDiff = dayDiff
    },
    removedProduct(state, array) {
        state.userBookings = array
    },
    setExtras(state, extras) {
        state.extras = extras
    },

    setProd(state, testProd) {
        state.testProd = testProd
    }
}
