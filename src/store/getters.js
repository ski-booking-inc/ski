export default {

  getChosenProduct(state) {
    return state.chosenProduct;
  },
  getUserInfo(state) {
    return state.userInfo;
  },
  dates(state) {
    return state.dates;
  },
  getUserBookings(state) {
    return state.userBookings;
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
  getExtras(state) {
    let total = state.userBookings
    let theTruth = [];
    for (let i = 0; i < total.length; i++) {
      console.log(total[0])
      if (total[i].userInfo.lift) {
        theTruth.push({
          lift: true
        })
      }
      if (total[i].userInfo.helmet) {
        theTruth.push({
          helmet: true
        })
      }
      if (total[i].userInfo.skigoogles) {
        theTruth.push({
          skigoogles: true
        })
      }
    }
    return theTruth;
  }
}