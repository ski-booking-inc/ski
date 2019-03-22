export default {

  getChosenProduct(state) {
    return state.chosenProduct;
  },
  getProducts(state) {
    return state.products;
  },
  getUserInfo(state) {
    return state.userInfo;
  },
  dates(state) {
    return state.dates;
  },
  dayDiff(state) {
    return state.dayDiff;
  },
  userBookings(state) {   
    return state.userBookings;
  },
  extras(state) {
    return state.extras;
  },
  dbBookings(state){
    return state.dbBookings;
  },
  myBookings(state){
    return state.dbBookings.filter(booking => booking.username === state.activeUser.name)
  },
  getExtras(state) {
    let total = state.userBookings
    let theTruth = [];
    for (let i = 0; i < total.length; i++) {
      if (total[i].userInfo.lift) {
        theTruth.push(state.extras.lift)
      }
      if (total[i].userInfo.helmet) {
        theTruth.push(state.extras.helmet)
      }
      if (total[i].userInfo.skigoogles) {
        theTruth.push(state.extras.skigoogles)
      }
    }
    return theTruth;
  },
  getActiveUser (state) {
    return state.activeUser;
  },
  getProductById(state){
    return (id) => {
      return state.products.filter(
        product => product._id == id
      )[0]
    }
  }
}
