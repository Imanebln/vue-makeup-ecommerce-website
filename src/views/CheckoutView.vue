<template>
  <main class="container">
    <h1 class="heading">
      <!-- <ion-icon name="cart-outline"></ion-icon>  -->
      <span class="icon">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13ZM2 7H16L17 19H1L2 7Z"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      Shopping Cart
    </h1>

    <div class="item-flex">
      <!--
   - checkout section
  -->
      <section class="checkout">
        <h2 class="section-heading">Payment Details</h2>

        <div class="payment-form">
          <div class="payment-method">
            <button class="method selected">
              <ion-icon name="card"></ion-icon>

              <span>Credit Card</span>

              <ion-icon
                class="checkmark fill"
                name="checkmark-circle"
              ></ion-icon>
            </button>

            <button class="method">
              <span>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-222.000000, -7559.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M182.475463,7404.9 C181.260804,7410.117 177.555645,7411 172.578656,7411 L171.078137,7419 L173.825411,7419 C174.325918,7419 174.53555,7418.659 174.627828,7418.179 C175.312891,7413.848 175.216601,7414.557 175.278788,7413.879 C175.337966,7413.501 175.664951,7413 176.049108,7413 C179.698098,7413 182.118387,7411.945 182.857614,7408.158 C183.120405,7406.811 183.034145,7405.772 182.475463,7404.9 M171.134306,7410.86 L170.011926,7417 L166.535456,7417 C166.206465,7417 165.954707,7416.598 166.006864,7416.274 L168.602682,7399.751 C168.670887,7399.319 169.045014,7399 169.484337,7399 L175.718111,7399 C179.409228,7399 181.894714,7400.401 181.319983,7404.054 C180.313953,7410.56 174.737157,7410 172.199514,7410 C171.760191,7410 171.203515,7410.428 171.134306,7410.86"
                          id="paypal-[#140]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span>PayPal</span>

              <ion-icon
                class="checkmark"
                name="checkmark-circle-outline"
              ></ion-icon>
            </button>
          </div>

          <form action="#" @submit.prevent="handlePay">
            <div class="cardholder-name">
              <label for="cardholder-name" class="label-default"
                >Cardholder name</label
              >
              <input
                type="text"
                name="cardholder-name"
                id="cardholder-name"
                class="input-default"
                required
              />
            </div>

            <div class="card-number">
              <label for="card-number" class="label-default">Card number</label>
              <input
                v-model="cardNumber"
                type="number"
                name="card-number"
                id="card-number"
                class="input-default"
                required
              />
              <p class="error" v-if="errors.cardNumberInvalidError">
                Enter a valid card number
              </p>
            </div>

            <div class="input-flex">
              <div class="expire-date">
                <label for="expire-date" class="label-default"
                  >Expiration date</label
                >

                <div class="input-flex">
                  <input
                    type="number"
                    name="day"
                    id="expire-date"
                    placeholder="31"
                    min="1"
                    max="31"
                    class="input-default"
                    required
                  />
                  /
                  <input
                    type="number"
                    name="month"
                    id="expire-date"
                    placeholder="12"
                    min="1"
                    max="12"
                    class="input-default"
                    required
                  />
                </div>
              </div>

              <div class="cvv">
                <label for="cvv" class="label-default">CVV</label>
                <input
                  v-model="cvv"
                  type="number"
                  name="cvv"
                  id="cvv"
                  class="input-default"
                  required
                />
                <p class="error" v-if="errors.cardNumberInvalidError">
                  Enter a valid cvv
                </p>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              <b>Pay</b> $ <span id="payAmount">2.15</span>
            </button>
          </form>
        </div>

        <!-- <button type="submit" class="btn btn-primary" @click="handlePay()">
          <b>Pay</b> $ <span id="payAmount">2.15</span>
        </button> -->
      </section>

      <!--
    - cart section
  -->
      <div class="scroll-container">
        <div class="scroll-content">
          <!-- Your content here -->
        </div>
      </div>
      <section class="cart">
        <div class="cart-item-box">
          <h2 class="section-heading">Order Summery</h2>

          <div class="product-card" v-for="(item, i) in inCart" :key="i">
            <div class="card">
              <div class="img-box">
                <img
                  :src="item.image"
                  alt="Green tomatoes"
                  width="80px"
                  class="product-img"
                />
              </div>

              <div class="detail">
                <h4 class="product-name">{{ item.title }}</h4>

                <div class="wrapper">
                  <div class="product-qty">
                    <button id="decrement" @click="decQuantity(item)">
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>

                    <span id="quantity">{{ item.quantity }}</span>

                    <button id="increment" @click="incQuantity(item)">
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>

                  <div class="price">
                    $ <span id="price">{{ item.price }}</span>
                  </div>
                </div>
              </div>

              <button class="product-close-btn" @click="removeItem(item)">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <div class="discount-token">
            <label for="discount-token" class="label-default"
              >Gift card/Discount code</label
            >

            <div class="wrapper-flex">
              <input
                type="text"
                name="discount-token"
                id="discount-token"
                class="input-default"
              />

              <button class="btn btn-outline">Apply</button>
            </div>
          </div>

          <div class="amount">
            <div class="subtotal">
              <span>Subtotal</span>
              <span
                >$
                <span id="subtotal">{{
                  cartTotalPrice().toFixed(2)
                }}</span></span
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
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      shipping: 7,
      cardHolderName: "",
      cardNumber: null,
      expiryDate: null,
      cvv: null,
      errors: {
        cardNumberError: false,
        cardNumberInvalidError: false,
        expiryDateError: false,
        expiryDateInvalidError: false,
        cvvError: false,
        cvvInvalidError: false,
      },
    };
  },
  mounted() {
    this.$store.dispatch("getCartItems");
  },
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
  },
  methods: {
    handlePay() {
      console.log(this.checkForm());
      if (this.checkForm()) {
        this.inCart.forEach((item) => {
          this.$store.dispatch("removeItemFromCart", item);
        });
        this.$router.push("/confirmation");
      }
    },
    incQuantity(item) {
      this.$store.dispatch("incrementQuItem", item);
    },
    decQuantity(item) {
      this.$store.dispatch("decrementQuItem", item);
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
    //handle validation
    validCardNumber(cardNumber) {
      var re = /^[0-9]{13,19}$/;
      return re.test(cardNumber);
    },
    validExpiryDate(expiryDate) {
      var re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
      if (!re.test(expiryDate)) {
        return false;
      }

      var today = new Date();
      var parts = expiryDate.split("/");
      var month = parseInt(parts[0]);
      var year = parseInt(parts[1]);
      if (year < 100) {
        year += 2000;
      }
      var expiry = new Date(year, month - 1, 1);
      expiry.setMonth(expiry.getMonth() + 1);
      expiry.setDate(expiry.getDate() - 1);
      return expiry >= today;
    },

    onExpiryDateChange() {
      if (this.expiryDate.length === 2 && !this.expiryDate.includes("/")) {
        this.expiryDate += "/";
      }
    },

    validCvv(cvv) {
      var re = /^[0-9]{3,4}$/;
      return re.test(cvv);
    },
    checkForm() {
      this.errors = [];

      if (!this.validCardNumber(this.cardNumber)) {
        this.errors = { ...this.errors, cardNumberInvalidError: true };
      }

      // if (!this.expiryDate) {
      //   this.errors = { ...this.errors, expiryDateError: true };
      // } else if (!this.validExpiryDate(this.expiryDate)) {
      //   this.errors = { ...this.errors, expiryDateInvalidError: true };
      // }

      if (!this.cvv) {
        this.errors = { ...this.errors, cvvError: true };
      } else if (!this.validCvv(this.cvv)) {
        this.errors = { ...this.errors, cvvInvalidError: true };
      }

      if (Object.values(this.errors).every((error) => !error)) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}

ion-icon,
span {
  display: inline-block;
}

label,
img {
  display: block;
}

input {
  font: inherit;
  width: 100%;
  border: none;
}

input:focus {
  outline: 2px solid hsl(219, 77%, 60%);
}

/**
   * Remove number input up & down button
   */
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
}

/**
   * Custom scrollbar style
   */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 80%);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(0, 0%, 70%);
}

/*-----------------------------------*\
    #MAIN STYLE
  \*-----------------------------------*/

/**
   * main container 
   */

.container {
  max-width: 1440px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  border-bottom: 1px solid hsl(0, 0%, 90%);
}

.heading {
  font-size: 24px;
  font-weight: 700;
  color: hsl(0, 0%, 25%);
  border-bottom: 1px solid hsl(0, 0%, 90%);
  padding: 20px 60px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.icon {
  font-size: 20px;
  margin-top: 3px;
}
.heading ion-icon {
  font-size: 40px;
}

.item-flex {
  display: flex;
  flex-grow: 1;
}

/**
   * checkout section style 
   */

.checkout {
  width: 70%;
  padding: 40px 60px;
  background: hsl(0, 0%, 100%);
  border-right: 1px solid hsl(0, 0%, 90%);
}

.section-heading {
  color: hsl(0, 0%, 25%);
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
}

.payment-form {
  margin-bottom: 40px;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
}

.payment-method .method {
  border: 1px solid hsl(0, 0%, 64%);
  border-radius: 5px;
  width: 50%;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  gap: 20px;
  cursor: pointer;
}

.payment-method .selected {
  border-color: hsl(219, 77%, 60%);
}

.payment-method .method ion-icon {
  font-size: 20px;
}

.payment-method .method .checkmark {
  margin-left: auto;
  color: hsl(0, 0%, 64%);
}

.payment-method .method .fill {
  color: hsl(219, 77%, 60%);
}

.label-default {
  padding-left: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  color: hsl(0, 0%, 62%);
}

.input-default {
  background: hsl(0, 0%, 91%);
  border-radius: 5px;
  color: hsl(0, 0%, 30%);
}

.payment-form input {
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 500;
}

.cardholder-name,
.card-number {
  margin-bottom: 20px;
}
.error {
  color: red;
  margin-top: 10px;
}
.card-number input,
.cvv input {
  letter-spacing: 3px;
}

.input-flex {
  display: flex;
  align-items: start;
  gap: 30px;
}
/* .input-flex .expire-date {
  width: 60%;
} */
/* .input-flex .expire-date, */
/* .input-flex .cvv {
  width: 40%;
} */
.input-flex .expire-date,
.input-flex .cvv {
  width: 50%;
}

.expire-date .input-flex {
  color: hsl(0, 0%, 62%);
  gap: 13px;
}

.expire-date .input-flex input {
  text-align: center;
}

.btn {
  border-radius: 5px;
}

.btn:active {
  transform: scale(0.99);
}

.btn:focus {
  color: hsl(0, 0%, 100%);
  background: hsl(219, 77%, 60%);
  outline: 2px solid hsl(219, 77%, 60%);
  outline-offset: 2px;
}

.btn-primary {
  background: hsl(219, 77%, 60%);
  font-weight: 500;
  color: hsl(0, 0%, 100%);
  margin-top: 25px;
  padding: 13px 45px;
}

.btn-primary b {
  margin-right: 10px;
}

/**
   * cart section style
   */

.cart {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.cart-item-box {
  padding: 40px 60px;
  margin-bottom: auto;
}

.product-card:not(:last-child) {
  margin-bottom: 20px;
}

.product-card .card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.card {
}

.card .product-img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
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
  align-items: center;
  gap: 20px;
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
}

.product-close-btn ion-icon {
  font-size: 25px;
  color: hsl(0, 0%, 64%);
}

.product-close-btn:hover ion-icon {
  color: hsl(0, 77%, 60%);
}

.discount-token {
  padding: 40px 60px;
  border-top: 1px solid hsl(0, 0%, 90%);
  border-bottom: 1px solid hsl(0, 0%, 90%);
}

.wrapper-flex {
  display: flex;
  align-items: center;
  gap: 30px;
}

.wrapper-flex input {
  padding: 12px 15px;
  font-weight: 600;
  letter-spacing: 2px;
}

.btn-outline {
  padding: 10px 25px;
  border: 1px solid hsl(219, 77%, 60%);
  color: hsl(219, 77%, 60%);
}

.btn-outline:hover {
  background: hsl(219, 77%, 60%);
  color: hsl(0, 0%, 100%);
}

.amount {
  padding: 40px 60px;
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

/*-----------------------------------*\
    #RESPONSIVE
  \*-----------------------------------*/

@media (max-width: 1200px) {
  .item-flex {
    flex-direction: column-reverse;
  }

  /**
     * checkout section responsive 
     */

  .checkout {
    width: 100%;
    border-right: none;
  }

  .btn-primary {
    width: 100%;
  }

  /**
     * cart section responsive
     */

  .cart {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    border-bottom: 1px solid hsl(0, 0%, 90%);
  }

  .cart .wrapper {
    margin-top: auto;
  }

  .cart .cart-item-box {
    border-right: 1px solid hsl(0, 0%, 90%);
    margin-bottom: 0;
  }

  .discount-token {
    border-top: none;
  }
}

@media (max-width: 768px) {
  .cart {
    grid-template-columns: 1fr;
  }

  .discount-token {
    border-top: 1px solid hsl(0, 0%, 90%);
  }

  .wrapper-flex {
    gap: 40px;
  }
}

@media (max-width: 567px) {
  .payment-method,
  .input-flex {
    flex-direction: column;
    gap: 20px;
  }

  .payment-method .method {
    width: 100%;
  }

  .input-flex .expire-date,
  .input-flex .cvv {
    width: 100%;
  }

  .expire-date .input-flex {
    flex-direction: row;
  }
}
</style>
