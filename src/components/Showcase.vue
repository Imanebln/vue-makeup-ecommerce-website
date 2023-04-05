<template>
  <!-- Slider main container -->
  <div ref="swiper" class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(image, index) in images" :key="index">
        <div
          class="showcase-container"
          :style="{ backgroundImage: `url(${image})` }"
        >
          <!-- <div class="showcase">
            <h1>Welcome to my app!</h1>
          </div> -->
        </div>
      </div>
    </div>
    <!-- If we need pagination -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
      images: [
        "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw657d366c/images/beauty/0-HOME/BEAUTY/2023/JANUARY/Addict23_Instit_5550x2000.jpg?sw=2520&sfrm=jpg",
        "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dweb44f272/images/beauty/0-HOME/BEAUTY/Addict23_Anya_SacBordeaux_CutOut_5550x2000_V2.jpg?sw=2520&sfrm=jpg",
      ],
      activeIndex: 0,
    };
  },
  mounted() {
    const SECOND = 1000; // milliseconds

    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination, Autoplay],

      loop: true,
      autoplay: {
        delay: 3 * SECOND,
        disableOnInteraction: false,
      },
      speed: 2 * SECOND,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: (swiper) => {
          this.activeIndex = swiper.realIndex;
        },
      },
    });
  },
};
</script>

<style scoped>
.swiper {
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.showcase-container {
  background-size: cover;
  background-position: left;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
