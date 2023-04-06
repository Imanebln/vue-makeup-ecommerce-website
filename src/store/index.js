import Vue from "vue";
import Vuex from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "@/firebaseConfig";
import FirebaseService from "@/services/FirebaseService";
Vue.use(Vuex);

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
      let products = await FirebaseService.getProducts();
      state.commit("setProducts", products);
    },
    async getCartItems(state, user) {
      let cart = await FirebaseService.getCartItems(user.uid);
      console.log(cart);
      state.commit("setCart", cart);
    },
    async addItemToFirestoreCart(state, { item, user }) {
      const existingProductIndex = state.getters.inCart.findIndex(
        (product) => product.productId === item.productId
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.getters.inCart];
        const productCart = updatedCart[existingProductIndex];
        productCart.quantity += 1;
        await FirebaseService.updateItemQuantity(productCart);
        state.commit("incrementItemQuantity", productCart);
      } else {
        await FirebaseService.addToCart(item, user);
        state.commit("addToCart", item);
      }
    },
    async incrementQuItem(state, item) {
      const existingProductIndex = state.getters.inCart.findIndex(
        (product) => product.productId === item.productId
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.getters.inCart];
        const productCart = updatedCart[existingProductIndex];
        productCart.quantity += 1;
        await FirebaseService.updateItemQuantity(productCart);
        state.commit("incrementItemQu", productCart);
      }
    },
    async decrementQuItem(state, item) {
      const existingProductIndex = state.getters.inCart.findIndex(
        (product) => product.productId === item.productId
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.getters.inCart];
        const productCart = updatedCart[existingProductIndex];
        if (productCart.quantity > 1) {
          productCart.quantity -= 1;
        }

        await FirebaseService.updateItemQuantity(productCart);
        state.commit("incrementItemQu", productCart);
      }
    },
    async removeItemFromCart(state, item) {
      await FirebaseService.removeFromCart(item.id);
      state.commit("removeFromCart", item);
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
      } else {
        throw new Error("Unable to register user");
      }
    },
    async logIn(state, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        console.log(response);
        console.log(state.user);
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
          uid: user.uid,
        });
      } else {
        state.commit("SET_USER", null);
      }
    },
  },
  modules: {},
});
