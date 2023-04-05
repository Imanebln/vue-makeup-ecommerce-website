import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";
import LoginView from "../views/LoginView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Glam Haven" },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { title: "Glam Haven - Login" },
  },
  {
    path: "/products",
    name: "products",
    meta: { title: "Glam Haven - Store" },
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
  },
  {
    path: "/product/:id",
    name: "product-details",
    meta: { title: "Glam Haven - Product" },
    component: () =>
      import(
        /* webpackChunkName: "product" */ "../views/ProductDetailsView.vue"
      ),
    props: true,
  },
  {
    path: "/checkout",
    name: "checkout",
    meta: { title: "Glam Haven - Checkout" },
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/CheckoutView.vue"),
  },
  {
    path: "/confirmation",
    name: "order-confirmation",
    meta: { title: "Glam Haven - Confirmation" },
    component: () =>
      import(
        /* webpackChunkName: "order-confirmation" */ "../views/OrderConfirmationView.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  if (title) {
    document.title = title;
  }
  window.scrollTo(0, 0);
  next();
});

export default router;
