import Axios from "axios";

export default {
    async getProducts (ctx) {
        let products = await Axios.get('http://localhost:3000/products');
        ctx.commit('setProducts', products.data)
    }
}
