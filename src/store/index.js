import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import CartService from "@/services/CartService";
import ProductService from "@/services/ProductService";
import { auth, db } from "@/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

Vue.use(Vuex);

const API_URL = "http://localhost:4000/";
export default new Vuex.Store({
  state: {
    products: [],
    inCart: [],
    user: {
      loggedIn: false,
      data: null,
    },
  },
  getters: {
    products: (state) => state.products,
    inCart: (state) => state.inCart,
    user: (state) => state.user,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    filterByCategory(state, payload) {
      return state.products.filter((product) => product.category === payload);
    },
    setCart(state, payload) {
      state.inCart = payload;
    },
    addToCart(state, payload) {
      console.log(payload);
      state.inCart.push(payload);
    },
    incrementItemQuantity(state, payload) {
      console.log(payload);
      state.inCart = state.inCart.map((item) => {
        if (item.productId === payload.id) {
          item.quantity += 1;
        }
        return item;
      });
    },
    incrementItemQu(state, payload) {
      console.log(payload);
      state.inCart = state.inCart.map((item) => {
        if (item.productId === payload.id) {
          item.quantity += 1;
        }
        return item;
      });
    },
    decrementItemQu(state, payload) {
      console.log(payload);
      state.inCart = state.inCart.map((item) => {
        if (item.productId === payload.id && item.quantity > 1) {
          item.quantity -= 1;
        }
        return item;
      });
    },
    removeFromCart(state, item) {
      const productIndex = state.inCart.findIndex(
        (product) => product.id === item.id
      );
      state.inCart.splice(productIndex, 1);
    },
    SET_USER(state, payload) {
      state.user.data = payload;
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
  },
  actions: {
    async getProducts(state) {
      ProductService.getProducts()
        .then((res) => {
          state.commit("setProducts", res.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    async getCartItems(state) {
      CartService.getCartItems()
        .then((res) => {
          state.commit("setCart", res.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    async addItem(state, item) {
      // check if the product already exists in the cart
      const existingProductIndex = state.getters.inCart.findIndex(
        (product) => product.productId === item.productId
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.getters.inCart];
        const productCart = updatedCart[existingProductIndex];
        // productCart.quantity += 1;
        await CartService.incrementItemQuantity(productCart)
          .then((res) => {
            state.commit("incrementItemQuantity", res.data);
          })
          .catch((error) => {
            console.error(error.message);
          });
      } else {
        await CartService.addItemToCart(item)
          .then((res) => {
            state.commit("addToCart", res.data);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    },
    // async addProductToCart(state, item) {
    //   await CartService.addItemToCart(item)
    //     .then((res) => {
    //       state.commit("addToCart", res.data);
    //     })
    //     .catch((error) => {
    //       console.error(error.message);
    //     });
    // },
    // async incrementQuantityItem(state, item) {
    //   await CartService.incrementItemQuantity(item)
    //     .then((res) => {
    //       state.commit("incrementItemQuantity", res.data);
    //     })
    //     .catch((error) => {
    //       console.error(error.message);
    //     });
    // },
    async incrementQuItem(state, item) {
      await CartService.incrementItemQu(item)
        .then((res) => {
          state.commit("incrementItemQu", res.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    async decrementQuItem(state, item) {
      await CartService.decrementItemQu(item)
        .then((res) => {
          state.commit("decrementItemQu", res.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    async removeItemFromCart(state, item) {
      await CartService.deleteItemFromCart(item).then((res) => {
        state.commit("removeFromCart", item);
      });
    },
    async register(state, { email, password, name }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        console.log(response);
        state.commit("SET_USER", response.user);
        // response.user.updateProfile({ displayName: name });
      } else {
        throw new Error("Unable to register user");
      }
    },
    async logIn(state, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        console.log(response);
        console.log(state.user);
        // state.commit("SET_USER", response.user);
      } else {
        throw new Error("login failed");
      }
    },
    async logOut(state) {
      await signOut(auth);
      state.commit("SET_USER", null);
    },
    async fetchUser(state, user) {
      state.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        state.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        state.commit("SET_USER", null);
      }
    },
  },
  modules: {},
});
