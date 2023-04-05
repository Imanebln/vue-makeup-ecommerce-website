import axios from "axios";

export const API_URL = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCartItems() {
    return API_URL.get("/inCart");
  },
  getCartItemById(id) {
    return API_URL.get(`inCart/${id}`);
  },
  addItemToCart(item) {
    return API_URL.post("/inCart", item);
  },
  incrementItemQuantity(item) {
    return API_URL.put(`inCart/${item.id}`, {
      ...item,
      quantity: item.quantity + 1,
    });
  },
  incrementItemQu(item) {
    return API_URL.put(`inCart/${item.id}`, {
      ...item,
      quantity: item.quantity + 1,
    });
  },
  decrementItemQu(item) {
    return API_URL.put(`inCart/${item.id}`, {
      ...item,
      quantity: item.quantity - 1,
    });
  },
  deleteItemFromCart(item) {
    return API_URL.delete(`inCart/${item.id}`);
  },
};
