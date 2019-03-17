export default {
    setProducts(state, products) {
        state.products = products;
    },
    setDbBookings(state, dbBookings) {
        state.dbBookings = dbBookings;
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
    },
    setActiveUser(state, user) {
        state.activeUser = user;
    },
    toggleRejected(state) {
        state.rejected = !state.rejected;
    },
    removeActiveUser(state, activeUser) {
        state.activeUser = activeUser
    }
}
