<template>
  <div class="container">
    <span class="icon">
      <svg
        fill="#000000"
        height="80px"
        width="80px"
        version="1.1"
        id="Filled_Icons"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        enable-background="new 0 0 24 24"
        xml:space="preserve"
      >
        <g id="Status-Error-Filled">
          <path
            d="M12,0C5.37,0,0,5.37,0,12s5.37,12,12,12s12-5.37,12-12S18.63,0,12,0z M18.38,16.62l-1.77,1.77L12,13.77l-4.62,4.62
		l-1.77-1.77L10.23,12L5.62,7.38l1.77-1.77L12,10.23l4.62-4.62l1.77,1.77L13.77,12L18.38,16.62z"
          />
        </g>
      </svg>
    </span>
    <h1>Not Found!</h1>
    <div class="confirmation-text">Back To Home Page</div>

    <div class="discount">
      <router-link to="/"><button>Take Me To Home Page!</button></router-link>
    </div>
    <div class="links">
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
  padding: 1rem 3rem;
}

.discount button {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  padding: 1rem 1rem;
  border: 1px solid #eee;
  font-size: 15px;
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
</style>
