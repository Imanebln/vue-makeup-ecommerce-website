import { auth, db } from "@/firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

const productsRef = collection(db, "products");
const cartRef = collection(db, "cart");

export default {
  getUser() {
    let userInfo = null;
    auth.onAuthStateChanged((user) => {
      userInfo = user;
    });
    return userInfo;
  },
  async getProducts() {
    let products = [];
    const querySnap = await getDocs(query(productsRef));
    querySnap.forEach((doc) => {
      products.push(doc.data());
    });
    return products;
  },

  async getProductById(id) {
    let product = {};
    const querySnap = await getDocs(query(productsRef, where("id", "==", id)));
    querySnap.forEach((doc) => {
      product = doc.data();
    });
    return product;
  },

  async getCartItems(userID) {
    let items = [];
    const cartItems = await getDocs(
      query(cartRef, where("userId", "==", userID))
    );
    cartItems.forEach((doc) => {
      let item = { ...doc.data(), id: doc.id };
      items.push(item);
    });
    return items;
  },

  async addToCart(item, user) {
    await addDoc(cartRef, {
      ...item,
      userId: user?.uid,
    });
  },

  async updateItemQuantity(item) {
    const itemToUpdate = doc(db, "cart", item.id);
    await setDoc(itemToUpdate, item);
  },

  async removeFromCart(id) {
    try {
      const itemToDelete = doc(db, "cart", id);
      await deleteDoc(itemToDelete);
    } catch (err) {}
  },

  // reviews services
  async getProductReviews(productId) {
    let reviews = [];
    const querySnap = await getDocs(
      query(collection(db, "reviews"), where("productId", "==", productId))
    );
    querySnap.forEach((doc) => {
      reviews.push(doc.data());
    });

    return reviews;
  },

  async addReview(item) {
    return await addDoc(collection(db, "reviews"), item);
  },
};
