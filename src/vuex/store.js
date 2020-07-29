import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const SERVER_API_URL = process.env.VUE_APP_SERVER_API_URL;

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products.map((item) => {
        const product = item;
        product.price = Math.trunc(product.price);
        return product;
      });
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.forEach((data) => {
          const item = data;
          if (item.article === product.article) {
            isProductExist = true;
            item.quantity += 1;
          }
        });
        if (!isProductExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity += 1;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios.get(SERVER_API_URL)
        .then((response) => {
          commit('SET_PRODUCTS_TO_STATE', response.data);
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
