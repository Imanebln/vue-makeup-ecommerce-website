<template>
  <section class="blogs">
    <div class="container">
      <div class="blogs-header">
        <h3>LATEST FROM BLOG</h3>
        <a href="#"> SEE ALL </a>
      </div>
      <div class="blogs-wrapper">
        <div class="blog">
          <div class="img-container">
            <img src="@/assets/freestocks-AFvUO61NlOU-unsplash.webp" alt="" />
          </div>
          <div class="blog-content">
            <h3>The Future of Makeup Trends</h3>
            <p>
              Makeup trends are constantly evolving, with new colors, textures,
              and techniques emerging all the time.
            </p>
          </div>
        </div>
        <div class="blog">
          <div class="img-container">
            <img
              src="@/assets/johanne-pold-jacobsen-sYct_zI982g-unsplash.webp"
              alt=""
            />
          </div>
          <div class="blog-content">
            <h3>The Secret to Flawless Makeup</h3>
            <p>
              Before applying makeup, it's important to properly cleanse and
              moisturize your skin to create a smooth, even base.
            </p>
          </div>
        </div>
        <div class="blog">
          <div class="img-container">
            <img src="@/assets/oleg-ivanov-Anf3n2ZEv-8-unsplash.webp" alt="" />
          </div>
          <div class="blog-content">
            <h3>Unlock Your Creativity</h3>
            <p>
              When it comes to makeup, there are endless options for different
              looks and styles.
            </p>
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
.blogs .blogs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}
.blogs .img-container img {
  object-fit: cover;
  max-height: 268px;
}
.blogs-header h3 {
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
.blogs-header a {
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: #121212;
  opacity: 0.6;
}
.blogs-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
.blog .blog-content {
  max-width: calc(100% - 48px);
  width: 100%;
  margin: auto;
  transform: translateY(-100px);
  background-color: #fff;
  padding: 24px 16px;
}
.blog .blog-content h3 {
  margin-bottom: 8px;
}
.blog .blog-content p {
}
@media (max-width: 969px) {
  .blogs-wrapper {
    grid-template-columns: 1fr 1fr;
  }
  .blog .blog-content {
    max-width: 100%;
    transform: translateY(0px);
  }
}
@media (max-width: 600px) {
  .blogs-wrapper {
    grid-template-columns: 1fr;
  }
  .blog .blog-content {
    padding: 10px 0px;
  }
}
</style>
