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
    removedProducts(state, array) {
        state.userBookings = array
    },
    setExtras(state, extras) {
        state.extras = extras
    },
    setActiveUser(state, user) {
        state.activeUser = user;
    },
    removeActiveUser(state, activeUser) {
        state.activeUser = activeUser
    },
    emptyBookings(state) {
        state.userBookings.length = 0;
    },
    showButton(state, payload) {
      state.showButton = payload;
    },
    emptyProductKeys(state) {
        state.productKeys.length = 0;
    },

}
