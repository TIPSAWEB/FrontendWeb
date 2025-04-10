<template>
  <section class="company-info">
    <div class="info-content">
      <h2 class="title">TRANSFORMACIONES INDUSTRIALES Y PROCESOS S.A. DE C.V.</h2>
      <div class="divider"></div>
      <p class="description">
        Empresa dedicada a dar soluciones de ingeniería, manufactura y automatización a los procesos de tratamiento de superficies.
      </p>
      <button class="cta-button">Conócenos!</button>
    </div>
    <div class="trapezoid"></div>
  </section>
</template>

<style scoped>
.company-info {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 100vh;
  position: relative;
  margin: 10% 0;
  width: 100%;
  overflow: hidden;
}

.info-content {
  background: #ffffff;
  padding: 5% 5%;
  border: 5px solid transparent;
  max-width: 70%;
  text-align: justify;
  z-index: 1;
  position: relative;
  border-image: linear-gradient(to left, #5D7975F5, #009ACEEB);
  border-image-slice: 1;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  color: #333;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-right: 60%;
}

.divider {
  width: 30%;
  height: 3px;
  background: #009ACEEB;
  margin-bottom: 10px;
}

.description {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  margin-right: 50%;
  letter-spacing: 2px;
  line-height: 1.5;
  text-align: justify;
}

.cta-button {
  background: linear-gradient(to right, #5D7975F5, #009ACEEB);
  color: white;
  padding: .7rem 5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
}

.cta-button:hover {
  background: linear-gradient(to right, #4a6260, #0078ac);
}

.trapezoid {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url('../assets/images/CompanyInfo.jpg');
  background-size: cover;
  background-position: center;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 2;
}

@media (max-width: 768px) {
  .info-content {
    padding: 5% 3%;
    max-width: 95%;
    margin: 0 auto;
  }

  .trapezoid {
    width: 60%;
  }
}

</style>
