<template>
  <nav>
    <div class="nav-inner">
      <div class="navbar-icon">
        <span class="icon">
          <svg
            width="24"
            height="24"
            stroke-width="3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.75C3 5.33579 3.33579 5 3.75 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75Z"
              fill="#121212"
            />
            <path
              d="M3 11.75C3 11.3358 3.33579 11 3.75 11H20.25C20.6642 11 21 11.3358 21 11.75C21 12.1642 20.6642 12.5 20.25 12.5H3.75C3.33579 12.5 3 12.1642 3 11.75Z"
              fill="#121212"
            />
            <path
              d="M3 17.75C3 17.3358 3.33579 17 3.75 17H20.25C20.6642 17 21 17.3358 21 17.75C21 18.1642 20.6642 18.5 20.25 18.5H3.75C3.33579 18.5 3 18.1642 3 17.75Z"
              fill="#121212"
            />
          </svg>
        </span>
      </div>
      <!-- Logo -->
      <div class="logo">
        <router-link to="/"
          ><img
            src="../assets/glam-haven-low-resolution-logo-black-on-transparent-background.png"
            alt="logo"
        /></router-link>
      </div>
      <!-- Links -->
      <div class="links">
        <a href="#"> About Us </a>
        <a href="#"> Face </a>
        <a href="#"> Eye </a>
        <a href="#"> Lip </a>
        <a href="#bestSellers"> BestSellers </a>
        <router-link to="/products"><a href="#"> Store </a></router-link>
        <a href="#contact"> Contact </a>
      </div>
      <!-- Icons -->
      <div class="icons">
        <span class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span v-if="!user.loggedIn" class="icon" @click="login()">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5Z"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span v-else class="icon" @click="logout()">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.5 13H13.5V11H1.5V13Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.29294 7.79297L0.79294 11.293C0.402416 11.6835 0.402416 12.3167 0.79294 12.7072L4.29294 16.2072L5.70715 14.793L2.91426 12.0001L5.70715 9.20718L4.29294 7.79297Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5 5C11.7825 5 9.42483 6.54837 8.26436 8.81567L6.48401 7.90442C7.97315 4.995 11.0028 3 14.5 3C19.4706 3 23.5 7.02944 23.5 12C23.5 16.9706 19.4706 21 14.5 21C11.0028 21 7.97315 19.005 6.48401 16.0956L8.26436 15.1843C9.42483 17.4516 11.7825 19 14.5 19C18.366 19 21.5 15.866 21.5 12C21.5 8.13401 18.366 5 14.5 5Z"
              fill="black"
            />
          </svg>
        </span>

        <span class="icon" @click="toggleCart()">
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
          <span v-show="user.loggedIn" class="badge">{{ cartLength }}</span>
        </span>
      </div>
    </div>
    <ShoppingCart :showCart="showCart" :toggleCart="toggleCart" />
  </nav>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";
export default {
  data() {
    return {
      showCart: false,
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getCartItems");
    auth.onAuthStateChanged((user) => {
      this.$store.dispatch("fetchUser", user);
    });
  },
  computed: {
    cartLength() {
      return this.$store.getters.inCart.length;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
    login() {
      this.$router.push("/login");
    },
    async logout() {
      await this.$store.dispatch("logOut");
      this.$router.push("/login");
    },
  },
  components: { ShoppingCart },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Dancing+Script:wght@700&family=Inconsolata:wght@300;400;500;700&family=Poppins:wght@700&family=Raleway:wght@400;500&family=Roboto:wght@300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inconsolata:wght@300;400;500;700&family=Poppins:wght@700&family=Raleway:wght@400;500&family=Roboto:wght@300;400;500;700&display=swap");
nav {
  border-bottom: 2px solid #f8f8f8;
}
nav .nav-inner {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1440px - 170px);
  width: 100%;
  margin: auto;
}
.nav-inner .logo {
  width: 120px;
  height: 27px;
}
.nav-inner .navbar-icon {
  display: none;
}
.nav-inner .links a {
  margin: 0px 16px;
  font-style: normal;
  font-weight: 400;
  font-family: "Charm";
  font-size: 20px;
  line-height: 1.25;
  color: #121212;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}
.nav-inner .links a:hover {
  border-color: #121212;
}

.icons {
  display: flex;
  align-items: center;
}
.icons span {
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
/* Sidebar */
/* .side {
  position: absolute;
} */
.sidebar {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.sidebar-item {
  margin: 10px 0;
}

.sidebar-item a {
  color: #fff;
  text-decoration: none;
}
.badge {
  position: relative;
  top: -7px;
  right: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: rgb(255, 0, 0, 0.8);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

@media only screen and (max-width: 1280px) {
  .nav-inner .logo {
    width: 100px;
    height: 27px;
    margin-left: 4rem;
  }
  .icons {
    margin-right: 1.5rem;
  }
}
@media only screen and (max-width: 949px) {
  .nav-inner .logo {
    width: 100px;
    height: 27px;
  }
  .links {
    display: none;
  }
  .nav-inner .navbar-icon {
    display: block;
    margin-left: 2rem;
  }
  .sidebar {
    display: block;
  }
}
</style>
