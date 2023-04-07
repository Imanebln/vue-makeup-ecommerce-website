<template>
  <section id="testimonials">
    <!--heading--->
    <div class="testimonial-heading">
      <span>Reviews</span>
      <h4>Clients Says</h4>
    </div>
    <!--testimonials-box-container------>
    <div class="wrap">
      <div class="testimonial-box-container">
        <!--BOXS-------------->
        <div class="testimonial-box" v-for="(review, i) in reviews" :key="i">
          <!--top------------------------->
          <div class="box-top">
            <!--profile----->
            <div class="profile">
              <!--img---->
              <div class="profile-img">
                <img
                  src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                />
              </div>
              <!--name-and-username-->
              <div class="name-user">
                <!-- <strong>Imane Boulouane</strong> -->
                <span
                  ><strong>@{{ review.username }}</strong></span
                >
              </div>
            </div>
            <rating class="rating" :fixedRating="review.rating"></rating>
          </div>
          <div class="client-comment">
            <p>
              {{ review.content }}
            </p>
          </div>
        </div>
      </div>

      <section class="contact__container">
        <h2>Add Review</h2>
        <!--reviews------>
        <div class="rating">
          <rating
            class="rating"
            :clickable="true"
            @rateChange="rateChange"
          ></rating>
        </div>
        <div>
          <form @submit.prevent="onSubmit()">
            <input
              v-model="username"
              type="text"
              name="username"
              placeholder="Your Username"
              required
            />
            <textarea
              v-model="content"
              name="content"
              cols="30"
              rows="7"
              placeholder="Your Review"
              required
            ></textarea>
            <button type="submit" class="btn-primary">Add Review</button>
          </form>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Rating from "@/components/Rating.vue";
export default {
  components: {
    Rating,
  },
  props: { product: { type: Object, required: true } },
  data() {
    return {
      id: Number(this.$route.params.id),
      content: "",
      username: "",
      isFas: true,
      rating: 4,
    };
  },
  mounted() {
    this.$store.dispatch("fetchProductReviews", this.id);
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    reviews() {
      return this.$store.getters.reviews;
    },
  },
  watch: {
    "$store.getters.reviews": {
      handler() {
        let rate = this.reviews.reduce(
          (acc, cur) => {
            return { rating: cur.rating / this.reviews.length + acc.rating };
          },
          { rating: 0 }
        ).rating;
        this.$emit("avgRateChange", rate);
      },
    },
  },
  methods: {
    rateChange(rate) {
      this.rating = rate;
    },
    onSubmit() {
      if (this.username !== "" && this.content !== "") {
        let item = {
          productId: this.id,
          username: this.username,
          content: this.content,
          rating: this.rating,
        };
        this.$store.dispatch("addReview", item);
        this.username = "";
        this.content = "";
      }
    },
  },
  getRatingAvg() {
    let average_review = 0;
    this.reviews.map((review) => {
      average_review += review.rating / this.reviews.length;
    });
    this.$emit("avgRateChange", average_review);
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#testimonials {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  /* width: 100%; */
}
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: row;
  gap: 40px;
}
.testimonial-heading {
  letter-spacing: 1px;
  margin: 30px 0px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testimonial-heading span {
  font-size: 1.3rem;
  color: #252525;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.testimonial-box-container {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* flex-wrap: wrap; */
  /* flex-direction: column; */
  /* width: 100%; */
}
.testimonial-box {
  width: 500px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 20px;
  margin: 15px;
  cursor: pointer;
}
.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.profile {
  display: flex;
  align-items: center;
}
.name-user {
  display: flex;
  flex-direction: column;
}
.name-user strong {
  color: #3d3d3d;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}
.name-user span {
  color: #979797;
  font-size: 0.8rem;
}
.reviews {
  color: #f9d71c;
}
.rating {
  color: #f9d71c;
  margin-bottom: 10px;
}
.box-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.client-comment p {
  font-size: 0.9rem;
  color: #4b4b4b;
}
.testimonial-box:hover {
  transform: translateY(-10px);
  transition: all ease 0.3s;
}

@media (max-width: 1060px) {
  .testimonial-box {
    /* width: 45%; */
    padding: 10px;
  }
}
@media (max-width: 790px) {
  .testimonial-box {
    /* width: 100%; */
  }
  .testimonial-heading h1 {
    font-size: 1.4rem;
  }
}
@media (max-width: 340px) {
  .box-top {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .reviews {
    margin-top: 10px;
  }
}
::selection {
  color: #ffffff;
  background-color: #252525;
}
/* add review */
.contact__container {
  margin-left: 30px;
}

.contact__container h2 {
  margin-bottom: 15px;
}
form {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

input,
textarea {
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  resize: none;
  color: #333;
}
.btn-primary {
  padding: 0.6rem 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  background: #252525;
  cursor: pointer;
  color: white;
}
.btn-primary:hover {
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: none;
  color: #252525;
}
/* MEDIA QUERIES : MEDIUM DEVICES  */
@media screen and (max-width: 1078px) {
  .wrap {
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
}

/* MEDIA QUERIES : SMALL DEVICES  */
@media screen and (max-width: 600px) {
}
</style>
