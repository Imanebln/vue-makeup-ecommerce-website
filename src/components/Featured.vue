<template>
  <section class="featured-products">
    <div class="container">
      <div class="products">
        <div class="product">
          <div class="img-container">
            <img src="@/assets/igor-rand-3J4HyvV9bwY-unsplash.webp" alt="" />
            <div class="content">
              <h6>New Season</h6>
              <h3>Blush Perfectly Peachy</h3>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="img-container">
            <img
              src="@/assets/element5-digital-ceWgSMd8rvQ-unsplash.webp"
              alt=""
            />
            <div class="content">
              <h6>Sale</h6>
              <h3>Get UP to <span>50% off</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.featured-products {
  margin-bottom: 50px;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.products .img-container {
  position: relative;
}
.products img {
  max-height: 400px;
  object-fit: cover;
}
.products .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: #fff;
  text-align: center;
}
.content h6 {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 6px;
  opacity: 0.6;
  text-transform: uppercase;
}
.content h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
}
.content h3 span {
  color: #e91e63;
}
</style>
