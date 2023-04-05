<template>
  <div>
    <div class="" :class="{ overlay: showCart }" @click="toggleCart"></div>
    <div class="sidebar-cart" :class="{ active: showCart }">
      <h3>Shopping Cart</h3>

      <h4 class="no-products" v-show="!user.loggedIn">
        No products in your cart.
      </h4>
      <div class="cart-item-box">
        <div
          v-show="user.loggedIn"
          class="product-card"
          v-for="(item, i) in inCart"
          :key="i"
        >
          <div class="card">
            <div class="img-box">
              <img
                :src="item.image"
                alt="image product"
                width="80px"
                class="product-img"
              />
            </div>

            <div class="detail">
              <h4 class="product-name">{{ item.title }}</h4>

              <div class="wrapper">
                <div class="product-qty">
                  <button id="decrement" @click="decQuantity(item)">
                    <!-- <ion-icon name="remove-outline"></ion-icon> -->
                    -
                  </button>

                  <span id="quantity">{{ item.quantity }}</span>

                  <button id="increment" @click="incQuantity(item)">
                    <!-- <ion-icon name="add-outline"></ion-icon> -->
                    +
                  </button>
                </div>

                <div class="price">
                  $ <span id="price">{{ item.price }}</span>
                </div>
              </div>
            </div>

            <button
              id="delete"
              class="product-close-btn"
              @click="removeItem(item)"
            >
              <!-- <ion-icon name="close-outline"></ion-icon> -->
              &times;
            </button>
          </div>
        </div>
      </div>
      <div v-show="user.loggedIn" class="amount">
        <div class="subtotal">
          <span>Subtotal</span>
          <span
            >$
            <span id="subtotal">{{ cartTotalPrice().toFixed(2) }}</span></span
          >
        </div>

        <div class="tax">
          <span>Tax</span> <span>$ <span id="tax">0.10</span></span>
        </div>

        <div class="shipping">
          <span>Shipping</span>
          <span
            >$ <span id="shipping">{{ this.shipping }}</span></span
          >
        </div>

        <div class="total">
          <span>Total</span>
          <span
            >$
            <span id="total">{{
              cartTotalPriceWithShipping().toFixed(2)
            }}</span></span
          >
        </div>
      </div>
      <div v-show="user.loggedIn" class="checkout">
        <!-- <router-link to="/checkout"> -->
        <button class="checkout-btn" @click="handleCheckout()">
          Proceed To Checkout
        </button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    showCart: Boolean,
    toggleCart: Function,
  },
  data() {
    return {
      shipping: 7,
    };
  },
  // computed: mapState(["inCart"]),
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getCartItems");
    auth.onAuthStateChanged((user) => {
      this.$store.dispatch("fetchUser", user);
    });
  },
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    incQuantity(item) {
      this.$store.dispatch("incrementQuItem", item);
    },
    decQuantity(item) {
      this.$store.dispatch("decrementQuItem", item);
    },
    handleCheckout() {
      this.$router.push("/checkout");
      this.toggleCart();
    },
    removeItem(item) {
      this.$store.dispatch("removeItemFromCart", item);
    },
    // calculate cart total price
    cartTotalPrice() {
      let total = 0;
      this.inCart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
    // calculate cart total price + shipping
    cartTotalPriceWithShipping() {
      if (this.shipping) {
        return this.cartTotalPrice() + 7;
      }
      return this.cartTotalPrice();
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar-cart {
  position: fixed;
  top: 0;
  right: -100%;
  width: 310px;
  height: 100%;
  background-color: #fff;
  border-left: 2px solid #f8f8f8;
  padding: 20px;
  box-sizing: border-box;
  z-index: 10000000;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.sidebar-cart.active {
  right: 0;
}

.no-products {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.cart {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.cart-item-box {
  padding: 30px 0;
  padding-right: 30px;
  margin-bottom: auto;
  height: 500px;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: scroll;
}

/* Customize scrollbar */
.cart-item-box::-webkit-scrollbar {
  width: 4px;
  margin-left: 10px;
  padding: 10px;
}

.cart-item-box::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.cart-item-box::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
  cursor: pointer;
}

.cart-item-box::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
/* .scroll-container {
  width: 400px;
  height: 300px;
  overflow: hidden;
  border: none;
}

.scroll-content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 20px;
  box-sizing: content-box;
} */
.product-card:not(:last-child) {
  margin-bottom: 20px;
}

.product-card .card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 7px;
  border-bottom: 2px solid #f8f8f8;
}

.card .product-img {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  padding: 5px;
  object-fit: cover;
}

.card .detail .product-name {
  font-weight: 600;
  font-size: 15px;
  color: hsl(0, 0%, 39%);
  margin-bottom: 10px;
}

.card .detail .wrapper {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
}
.card .detail .wrapper .price {
  color: red;
  font-weight: 600;
  font-size: 14px;
}
.product-qty {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-qty button {
  background: hsl(0, 0%, 91%);
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
}

.product-qty button:active,
.product-close-btn:active ion-icon {
  transform: scale(0.95);
}

.product-qty button ion-icon {
  --ionicon-stroke-width: 60px;
  font-size: 10px;
}

.product-close-btn {
  position: absolute;
  top: 30%;
  right: 0;
  border: none;
  background: none;
}

#delete {
  font-size: 18px;
  color: hsl(0, 0%, 64%);
  cursor: pointer;
}

#delete:hover {
  color: hsl(0, 77%, 60%);
}

.amount {
  padding: 25px 20px;
}

.amount > div {
  display: flex;
  justify-content: space-between;
}

.amount > div:not(:last-child) {
  margin-bottom: 10px;
}

.amount .total {
  font-size: 18px;
  font-weight: 700;
  color: hsl(0, 0%, 25%);
}
.checkout {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkout .checkout-btn {
  padding: 6px 12px;
  font-weight: 600;
  font-size: 15px;

  cursor: pointer;
  background-color: #fff;
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
  border-radius: 3px;
}
.checkout .checkout-btn:hover {
  background-color: cornflowerblue;
  color: #fff;
  border: none;
}
</style>
