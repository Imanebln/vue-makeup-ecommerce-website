<template>
  <div class="single-product">
    <div class="img-container">
      <router-link
        :to="{ name: 'product-details', params: { id: product.id } }"
      >
        <img :src="product.image" alt="product Image" />
      </router-link>
      <div v-if="product.onSale" class="sale">-50%</div>
      <div class="add-to-cart-btn" @click="addToCart()">Add to cart</div>
    </div>

    <div class="product-content">
      <h6 class="name">
        {{ product.title }}
      </h6>
      <div class="rating">
        <span class="price">
          ${{ product.onSale ? product.price * 0.5 : product.price }}
        </span>
        <span class="icon">
          <!-- <img :src="getImage(product.rating)" alt="" /> -->
          <img src="@/assets/images/rating.png" alt="rating Image" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart() {
      let item = {
        productId: this.product.id,
        title: this.product.title,
        category: this.product.category,
        price: this.product.price,
        onSale: this.product.onSale,
        image: this.product.image,
        quantity: 1,
      };
      if (this.$store.getters.user.loggedIn) {
        this.$store.dispatch("addItem", item);
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.single-product .img-container {
  cursor: pointer;
  position: relative;
}
.single-product .img-container img {
  max-height: 362.8px;
  object-fit: cover;
}

.single-product .img-container .sale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 9px;
  background: #e91e63;
  right: auto;
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  text-align: center;

  /* white */
  color: #ffffff;
}
.single-product .add-to-cart-btn {
  position: absolute;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: none;
}

.single-product:hover .add-to-cart-btn {
  display: block;
}
.single-product .add-to-cart-btn:hover {
  background-color: #fff;
  color: #333;
  font-weight: 600;
}
.single-product .product-content {
  padding: 10px 0px;
}
.single-product .product-content h6 {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.6;
  cursor: pointer;
}
.single-product .product-content .rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}
.single-product .rating .price {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
}
@media only screen and (max-width: 1222px) {
  .single-product .img-container img {
    max-height: 327.33px;
  }
}
@media only screen and (max-width: 1100px) {
  .single-product .img-container img {
    max-height: 286.52px;
  }
}
@media only screen and (max-width: 493px) {
  .single-product .img-container img {
    max-height: 286.52px;
  }
  .single-product .add-to-cart-btn {
    font-size: 12px;
  }
}
</style>
