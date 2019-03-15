import Axios from "axios";

export default {
  async getProducts(ctx) {
    let products = await Axios.get('http://localhost:3000/products');
    ctx.commit('setProducts', products.data)
  },
  async dbBookings(ctx) {
    let dbBookings = await Axios.get('http://localhost:3000/bookings');
    ctx.commit('setDbBookings', dbBookings.data)
    console.log(dbBookings);
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
  setDates(ctx, dates) {
    ctx.commit('selectedDates', dates)
  },
  addInput(ctx, userInput) {
    ctx.commit('setInput', userInput)
  },
  testing(ctx, userInput) {
    let chosenProduct = this.state.chosenProduct;
    let chosenDates = this.state.dates;
    let booking = {
      chosenProduct: chosenProduct,
      chosenDates: chosenDates,
      userInfo: userInput
    }
    ctx.commit('setBooking', booking)
  },
  addDateDiff(ctx, dayDiff) {
    ctx.commit('setDateDiff', dayDiff)
  },
  async createProduct(ctx, prod) {
    try {
      await Axios.post('http://localhost:3000/products', prod)
    } catch (err) {
      console.err(err.stack);
    }
  },
  removeProd(ctx, id) {
    return Axios.delete(`http://localhost:3000/products/${id}`)
  },
  removeProduct(ctx, booking) {
    let array = this.state.userBookings;
    array.splice(array.findIndex(v => v.userInfo.name == booking.userInfo.name), 1);
    ctx.commit('removedProducts', array)
  },
  setBooking(ctx, bookings) {
    bookings.forEach(v => Axios.post('http://localhost:3000/bookings', v))
  },
  //login grejer
  async login(ctx, loginData) {

    try {

      // post username + password to /auth, receive auth token
      let token = await Axios.post(`${ctx.state.apiUrl}/auth`, loginData)
      console.log(token);

      // Set token in session storage
      sessionStorage.setItem('vueauthdemo', token.authToken);

      // update activeUser for UI ( ex. "Greger is logged in." )
      ctx.commit('setActiveUser', {name: token.data.username, role: token.data.role});

      // Get items
      ctx.dispatch('getItems')

    } catch (err) {

      ctx.commit('toggleRejected');
      setTimeout(() => {
        ctx.commit('toggleRejected');
      }, 1000)

      console.error(err);
    }
  },
  async getItems(ctx) {
    let opt = {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('vueauthdemo')}`
      }
    }
    let items = await Axios.get(`${ctx.state.apiUrl}/items`, opt);
    console.log(items);
  }
}
