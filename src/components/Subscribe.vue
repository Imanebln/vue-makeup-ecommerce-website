<template>
  <section class="subscribe-section">
    <div class="subscribe-wrapper">
      <h6>Special Offer</h6>
      <h3>
        Subscribe <br />
        And <span> Get 10% Off </span>
      </h3>
      <input type="text" placeholder="Enter your email" />
      <button class="btn">Subscribe</button>
      <div class="img-container left">
        <img src="@/assets/left-subscribe.png" alt="" />
      </div>
      <div class="img-container right">
        <!-- <img src="@/assets/images/right.png" alt="" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background: linear-gradient(180deg, #f3f2f2 0%, #dcdbdb 100%);
  padding: 60px 0px;
  overflow-y: hidden;
  margin-bottom: 50px;
}
.subscribe-wrapper {
  max-width: 532px;
  width: 100%;
  margin: auto;
  background: #fff;
  position: relative;
}
.subscribe-wrapper .img-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -50%;
  right: auto;
}
.subscribe-wrapper .img-container.right {
  left: auto;
  right: -35%;
}

.subscribe-wrapper .img-container img {
  height: 450px;
}
.subscribe-wrapper .img-container.left img {
  margin-left: 1rem;
  height: 584px;
}
.subscribe-wrapper {
  text-align: center;
  padding: 80px 0px;
  /* margin: 60px 0px; */
}
.subscribe-wrapper h6 {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.4;
}
.subscribe-wrapper h3 {
  font-weight: 700;
  font-size: 26px;
  max-width: 300px;
  text-align: center;
  margin: auto;
  margin-bottom: 32px;
}
.subscribe-wrapper h3 span {
  color: #e91e63;
}
.subscribe-wrapper input {
  height: 50px;
  max-width: 340px;
  margin: auto;
  background: #f8f8f8;
  text-align: center;
  border: none;
  outline: none;
  width: 100%;
  margin-bottom: 20px;
}
.subscribe-wrapper .btn {
  max-width: 340px;
  height: 64px;
  background: #121212;
  border: 2px solid #121212;
  margin: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.9;
}

@media (max-width: 969px) {
  .subscribe-wrapper .img-container {
    display: none;
  }
}
@media (max-width: 600px) {
  .subscribe-wrapper {
    /* margin: 0 20px; */
    padding: 80px 20px;
  }
  section {
    padding: 60px 20px;
  }
}
@media (max-width: 400px) {
  .subscribe-wrapper h3 {
    font-size: 16px;
    line-height: 20px;
  }
  .subscribe-wrapper input,
  .subscribe-wrapper .btn {
    height: 40px;
  }
}
</style>
