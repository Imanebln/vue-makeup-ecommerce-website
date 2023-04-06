<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "@/components/Footer.vue";
import { auth } from "@/firebaseConfig";
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("getProducts");
    auth.onAuthStateChanged((user) => {
      this.$store.dispatch("fetchUser", user);
      this.$store.dispatch("getCartItems", user);
    });
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Dancing+Script:wght@700&family=Inconsolata:wght@300;400;500;700&family=Nunito+Sans:wght@300;400;600;700;800&family=Poppins:wght@700&family=Raleway:wght@400;500&family=Roboto:wght@300;400;500;700&display=swap");
:root {
  --primary: #fff;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #333;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  text-decoration: none;
}
.container {
  max-width: calc(1440px - 130px);
  padding: 0 20px;
  width: 100%;
  margin: auto;
}
.btn {
  background: transparent;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
}
span.icon {
  display: flex;
  align-items: center;
}
</style>
