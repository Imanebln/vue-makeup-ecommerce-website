<template>
  <div>
    <Showcase />
    <Banner />
    <CategoryProducts id="bestSellers" :isStore="false" />
    <Featured />
    <Subscribe />
    <Blog />
  </div>
</template>

<script>
import CategoryProducts from "../components/CategoryProducts.vue";
import Banner from "../components/Banner.vue";
import Subscribe from "../components/Subscribe.vue";
import Featured from "../components/Featured.vue";
import Blog from "../components/Blog.vue";
import Showcase from "../components/Showcase.vue";

export default {
  components: { Banner, CategoryProducts, Subscribe, Featured, Blog, Showcase },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  created() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    async signOut() {
      await store.dispatch("logOut");
      router.push("/login");
    },
  },
};
</script>
