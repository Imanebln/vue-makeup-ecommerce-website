<template>
  <div class="container">
    <span class="icon">
      <svg
        width="40"
        height="40"
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
    </span>
    <h1>Thank you!</h1>
    <div class="confirmation-text">
      A confirmation has been sent to your email.
    </div>
    <div class="confirmation-text">
      Since you're here, join our list for discounts!
    </div>
    <div class="discount">
      <input type="text" placeholder="Email Address" />
      <button type="submit">Yes, Sign Me Up!</button>
    </div>
    <div class="links">
      <p>Let's Be Friends!</p>
      <a href="#">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 100vh;
  widows: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container .icon {
}
.container h1 {
  font-family: "Charm";
  font-size: 60px;
  padding: 1rem 0;
}
.confirmation-text {
  font-size: 20px;
  font-weight: 600;
  padding: 0.2rem;
}
.discount {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 0;
}
.discount input {
  width: 60%;
  height: 50px;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #eee;
}
.discount button {
  width: 40%;
  height: 50px;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #eee;
  font-size: 12px;
  font-weight: 600;
  background: #333;
  color: #fff;
  cursor: pointer;
}
.discount button:hover {
  background: #fff;
  color: #333;
}
.links {
  margin: 3.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.links p {
  font-size: 18px;
  margin-right: 1rem;
}

.links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000;
  border: 1px solid #000;
  margin: 0 0.2rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.5s ease;
}
.links a:hover {
  background: #000;
  border-color: transparent;
  color: #fff;
}
/* @media only screen and (max-width: 400px) {

} */
</style>
