import axios from "axios";

const API_URL = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProducts() {
    return API_URL.get("/products");
  },
  getProductById(id) {
    return API_URL.get("/products/" + id);
  },
};
