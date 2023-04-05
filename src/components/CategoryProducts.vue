<template>
  <section class="catagory-products">
    <div class="container">
      <div class="catagory-header">
        <div class="cat">
          <h3 v-if="isStore">Categories</h3>
          <h3 v-else>Best Sellers</h3>
          <div class="category" v-show="isStore">
            <select name="category" id="category" v-model="category">
              <option value="">All</option>
              <option value="eye">Eye</option>
              <option value="face">Face</option>
              <option value="lips">Lips</option>
            </select>
          </div>
          <div class="price" v-show="isStore">
            <select name="price" id="price" v-model="price">
              <option value="" disabled selected>Sort By Price</option>
              <option value="asc">Price Low To High</option>
              <option value="desc">Price High To Low</option>
            </select>
          </div>
        </div>

        <div class="tabs">
          <div v-for="(tab, i) in tabs" :key="i" class="tab">
            {{ tab }}
          </div>
        </div>
      </div>
      <div class="products">
        <SingleProduct
          v-for="(product, i) in products"
          :key="i"
          :product="product"
        />
      </div>
      <router-link to="/products">
        <button v-show="!isStore" class="btn">SEE ALL</button>
      </router-link>
    </div>
  </section>
</template>

<script>
import SingleProduct from "./SingleProduct.vue";
export default {
  props: {
    isStore: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      category: "",
      price: "",
    };
  },
  components: {
    SingleProduct,
  },
  computed: {
    tabs() {
      return makeupTabs.map((tab) => tab);
    },
    products() {
      let products = this.$store.getters.products;
      if (!this.isStore) {
        products = products.slice(0, 4);
      }
      if (this.category) {
        products = products.filter((p) => p.category === this.category);
      }
      if (this.price) {
        products = products.sort((a, b) =>
          this.price === "asc" ? a.price - b.price : b.price - a.price
        );
      }
      return products;
    },
  },
  methods: {},
};
export const makeupTabs = [
  "NEW ARRIVALS",
  "SPECIALS",
  "BESTSELLERS",
  "MOST VIEWED",
  "FEATURED PRODUCTS",
];
</script>

<style scoped>
.catagory-products {
  margin-bottom: 100px;
}
.catagory-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
}
.cat {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.catagory-header h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
.category select {
  border: 1px solid #eee;
  padding: 3px 7px;
  border-radius: 4px;
  font-weight: 600;
  font-family: "Nunito Sans";
}
.price select {
  border: 1px solid #eee;
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: 600;
  font-family: "Nunito Sans";
}
.category select:after {
  border: 6px solid transparent;
  border-radius: 5px;
}

.tabs {
  display: flex;
  align-items: center;
}
.tabs .tab {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.6;
  transition: 0.3s;
  margin-right: 32px;
  cursor: pointer;
}
.tabs .tab.active,
.tabs .tab:hover {
  opacity: 1;
}
@media (max-width: 969px) {
  .tabs {
    display: none;
  }
}
.catagory-products .btn {
  height: 48px;
  background: #f8f8f8;
  border: 2px solid #f8f8f8;
  max-width: 100%;
  margin-top: 18px;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}
@media (max-width: 969px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 493px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
