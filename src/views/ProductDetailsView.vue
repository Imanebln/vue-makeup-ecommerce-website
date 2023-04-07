<template>
  <div>
    <div class="card-wrapper">
      <div class="card">
        <!-- card left -->
        <div class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img :src="product.image" alt="shoe image" />
            </div>
          </div>
          <div class="img-select">
            <div class="img-item">
              <a href="#" data-id="1">
                <img :src="product.image" alt="shoe image" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="2">
                <img :src="product.image" alt="shoe image" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="3">
                <img :src="product.image" alt="shoe image" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="4">
                <img :src="product.image" alt="shoe image" />
              </a>
            </div>
          </div>
        </div>
        <!-- card right -->
        <div class="product-content">
          <h2 class="product-title">{{ product.title }}</h2>
          <a href="#" class="product-link">visit category store</a>
          <div class="product-rating">
            <!-- <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>4.7(21)</span> -->
            <rating :fixed-rating="ratingAvgVal"></rating>
          </div>

          <div class="product-price">
            <p v-show="product.onSale" class="last-price">
              Old Price: <span>${{ product.price }}</span>
            </p>
            <p class="new-price">
              {{ product.onSale ? "New Price:" : "Price" }}
              <span
                >${{
                  product.onSale
                    ? `${product.price * 0.5} (50%)`
                    : product.price
                }}
              </span>
            </p>
          </div>

          <div class="product-detail">
            <h2>about this item:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>
            <ul>
              <li>Color: <span>Peachy</span></li>
              <li>Available: <span>in stock</span></li>
              <li>
                Category: <span>{{ product.category }}</span>
              </li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>

          <div class="purchase-info">
            <input type="number" min="0" v-model="inputValue" />
            <button type="button" class="btn" @click="addToCart()">
              Add to Cart <i class="fas fa-shopping-cart"></i>
            </button>
            <button type="button" class="btn" @click="shopNow()">
              Shop Now
            </button>
          </div>

          <div class="social-links">
            <p>Share At:</p>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Reviews :product="this.product" @avgRateChange="getAvgRate" />
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";
import FirebaseService from "@/services/FirebaseService";
import Reviews from "@/components/Reviews.vue";
export default {
  // props: ["id"],
  components: {
    Reviews,
    Rating,
  },
  data() {
    return {
      product: {},
      id: Number(this.$route.params.id),
      inputValue: 1,
      ratingAvgVal: 0,
    };
  },
  created() {
    FirebaseService.getProductById(this.id).then((res) => {
      this.product = res;
    });
  },
  computed: {
    cartItem() {
      return this.$store.state.cartItem;
    },
    inCart() {
      return this.$store.state.inCart;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    ratingAvg(avg) {
      this.ratingAvgVal = avg;
    },
    shopNow() {
      this.addToCart();
      this.$router.push("/checkout");
    },
    addToCart() {
      let item = {
        productId: this.product.id,
        title: this.product.title,
        category: this.product.category,
        price: this.product.price,
        onSale: this.product.onSale,
        image: this.product.image,
        quantity: this.inputValue,
      };
      if (this.$store.getters.user.loggedIn) {
        this.$store.dispatch("addItemToFirestoreCart", {
          item,
          user: this.user.data,
        });
      } else {
        this.$router.push("/login");
      }
    },
    getAvgRate(rateAvg) {
      this.ratingAvgVal = rateAvg;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

body {
  line-height: 1.5;
}
.card-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}
img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 500px;
}
.product-imgs {
  /* max-height: 430px;
  margin-top: 8rem; */
}
.img-display {
  overflow: hidden;
}
.img-showcase {
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
}
.img-showcase img {
  min-width: 100%;
}
.img-select {
  display: flex;
  gap: 1.5rem;
  max-height: 80px;
}
.img-item {
  margin: 0.3rem;
  width: 100%;
}

.img-item a img {
  margin: 0.3rem;
  object-fit: cover;
  max-height: 110px;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3) {
  margin-right: 0;
}
.img-item:hover {
  opacity: 0.8;
}
.product-content {
  padding: 2rem 1rem;
}
.product-title {
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: 600;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
  font-family: "Inconsolata";
}
.product-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 80px;
  background: #12263a;
}
.product-link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  background: #fefef4;
  color: #12263a;
  padding: 0 0.3rem;
  transition: all 0.5s ease;
}
.product-link:hover {
  opacity: 0.9;
}
.product-rating {
  color: #ffc107;
}
.product-rating span {
  margin-left: 0.3rem;
  font-weight: 600;
  color: #252525;
}
.product-price {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}
.product-price span {
  font-weight: 400;
}
.last-price span {
  color: #f64749;
  text-decoration: line-through;
}
.new-price span {
  color: #256eff;
}
.product-detail h2 {
  text-transform: capitalize;
  color: #12263a;
  padding-bottom: 0.6rem;
}
.product-detail p {
  font-size: 0.9rem;
  padding: 0.3rem;
  opacity: 0.8;
}
.product-detail ul {
  margin: 1rem 0;
  font-size: 0.9rem;
}
.product-detail ul li {
  margin: 0;
  list-style: none;
  background: url(@/assets/check-mark.png) left center no-repeat;
  background-size: 17px;
  padding-left: 1.7rem;
  margin: 0.4rem 0;
  font-weight: 600;
  opacity: 0.9;
}
.product-detail ul li span {
  font-weight: 400;
}
.purchase-info {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.6rem;
  margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn {
  border: 1.5px solid #ddd;
  border-radius: 25px;
  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.2rem;
  margin-bottom: 1rem;
}
.purchase-info input {
  width: 60px;
}
.purchase-info .btn {
  cursor: pointer;
  color: #fff;
}
.purchase-info .btn:first-of-type {
  background: #12263a;
  max-width: 9rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
}
.purchase-info .btn:hover {
  background: #fff;
  color: #12263a;
  border: 1.53px solid #12263a;
}
.purchase-info .btn:last-of-type {
  background: #fff;
  color: #12263a;
  max-width: 6rem;
}
.purchase-info .btn:hover {
  opacity: 0.9;
}
.social-links {
  display: flex;
  align-items: center;
}
.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000;
  border: 1px solid #000;
  margin: 0 0.2rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.5s ease;
}
.social-links p {
  margin-right: 0.7rem;
}
.social-links a:hover {
  background: #000;
  border-color: transparent;
  color: #fff;
}

@media screen and (min-width: 992px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  .card-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-imgs {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product-content {
    padding-top: 0;
  }
}
</style>
