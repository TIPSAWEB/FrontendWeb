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
  align-content: center;
  background: white;
  height: 100vh;
  position: relative;
  margin-bottom: 5%;
  margin-top: 5%;
  width: 100%;
}

.info-content {
  background: #ffffff;
  padding-right: 55%;
  padding-left: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  border: 5px solid transparent;
  max-width: 80%;
  text-align: left;
  z-index: 1;
  position: relative;
  border-image: linear-gradient(to left, #5D7975F5, #009ACEEB);
  border-image-slice: 1;
  margin-left: 5%;
}

.title {
  font-size: 2.5rem;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  color: #333;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.divider {
  width: 30%;
  height: 3px;
  background: #009ACEEB;
  margin-bottom: 10px;
}

.description {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1.5rem;
  margin-right: 20%;
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
  width: 45%;
  height: 100%;
  background-color: #8E8E8E;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 2;
}
</style>
