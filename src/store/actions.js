import Axios from "axios";

export default {
  //Get products from API,Mongo
  async getProducts(ctx) {
    let products = await Axios.get('http://localhost:3000/products');
    ctx.commit('setProducts', products.data)
  },
  //Get bookings from API,Mongo
  async dbBookings(ctx) {
    let dbBookings = await Axios.get('http://localhost:3000/bookings');
    ctx.commit('setDbBookings', dbBookings.data)
  },
  //Adds chosen options to arr
  addProduct(ctx, payload) {
    ctx.commit('addToProductKeys', payload)
  },
  //Find matching product
  findMatch(ctx) {
    let x = this.state.products;
    let y = this.state.productKeys;
    for (let i = 0; i < x.length; i++) {
      if (y[0] == x[i].article && y[1] == x[i].age && y[2] == x[i].category) {
        ctx.commit('setProduct', x[i])
        //First time use of break!
        break;
      }
    }
  },
  //Update chosen product according to availablity
  updateChosenProduct(ctx, newProduct) {
    ctx.commit('setProduct', newProduct)
  },
  //Set chosen date
  setDates(ctx, dates) {
    ctx.commit('selectedDates', dates)
  },
  //Adds userInfo
  addInput(ctx, userInput) {
    ctx.commit('setInput', userInput)
  },
  //Create booking locally
  bookingObj(ctx, userInput) {
    let chosenProduct = this.state.chosenProduct;
    let chosenDates = this.state.dates;
    let booking = {
      chosenProduct: chosenProduct,
      chosenDates: chosenDates,
      userInfo: userInput,
      username: ""
    }
    ctx.commit('setBooking', booking)
  },
  emptyBookings(ctx) {
    ctx.commit('emptyBookings')
  },
  addDateDiff(ctx, dayDiff) {
    ctx.commit('setDateDiff', dayDiff)
  },
  //Send new product to API, Mongo
  async createProduct(ctx, prod) {
    try {
      await Axios.post('http://localhost:3000/products', prod)
    } catch (err) {
      console.error(err.stack);
    }
  },
  //Remove product from API, Mongo
  async removeProd(ctx, id) {
    try {
      await Axios.delete(`http://localhost:3000/products/${id}`)
    } catch (err) {
      console.error(err.stack);
    }
  },
  //Remove booking from API, Mongo
  async removeBooking(ctx, id) {
    try {
      await Axios.delete(`http://localhost:3000/bookings/${id}`)
      ctx.dispatch('dbBookings')
    } catch (err) {
      console.error(err.stack);
    }
  },
  //Remove booking from cart
  removeProduct(ctx, booking) {
    let array = this.state.userBookings;
    array.splice(array.findIndex(v => v.userInfo.name == booking.userInfo.name), 1);
    ctx.commit('removedProducts', array)
  },
  //Send bookings to API, Mongo
  async setBooking(ctx, bookings) {
    await bookings.forEach(v => Axios.post('http://localhost:3000/bookings', v))
    ctx.dispatch('dbBookings')
  },
  //login function
  async login(ctx, loginData) {
    try {
      //Post username + password to API
      let token = await Axios.post(`${ctx.state.apiUrl}/auth`, loginData)
      console.log(token);

      //Set token in session storage
      sessionStorage.setItem('loginSession', token.data.authToken);

      //Update activeUser
      ctx.commit('setActiveUser', {
        name: token.data.username,
        role: token.data.role
      });

    } catch (err) {
      console.error(err);
    }
  },
  //Signup function
  async signup(ctx, signupData) {
    try {
      await Axios.post('http://localhost:3000/users', signupData)
      ctx.dispatch('login', signupData)
    } catch (err) {
      console.err(err.stack);
    }
  },
  //Check if logged in
  async getItems(ctx) {
    let opt = {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('loginSession')}`
      }
    }
  },
  //Send edit data to API
  async editProduct(ctx, productData) {
    await Axios.put('http://localhost:3000/products/', productData)
    //Update view
    ctx.dispatch('getProducts')
  },
  //Removes item in session storage
  logOut(ctx) {
    sessionStorage.removeItem('loginSession')
    ctx.commit('removeActiveUser', {
      name: null,
      role: null
    })
  },
  //Toggle button in Products view
  showButton(ctx, payload) {
    ctx.commit('showButton', payload)
  },
  emptyProductKeys(ctx) {
    ctx.commit('emptyProductKeys')
  }
}
