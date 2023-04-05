<template>
  <CategoryProducts :isStore="true" />
  <!-- <div>
    <div v-for="product in products" :key="product.id">{{ product.title }}</div>
  </div> -->
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import CategoryProducts from "../components/CategoryProducts.vue";

export default {
  components: {
    CategoryProducts,
  },
  computed: {
    products() {
      // console.log(this.$store.state.products);
      return this.$store.state.products;
    },
  },
};
const makeupTabs = ref([
  "NEW ARRIVALS",
  "SPECIALS",
  "BESTSELLERS",
  "MOST VIEWED",
  "FEATURED PRODUCTS",
]);

const categoryTitle = ref("Categories");
// export default {
//   name: "HomeView",
//   components: { Banner, Subscribe, Featured, Blog },
// };
</script>

<style></style>
