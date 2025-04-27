<template>
    <section class="company-info">
        <div class="info-content">
            <h2 class="title-blue">1. CÁMARAS DE PREPARACIÓN DE AIRE PARA BASE Y CLEAR COAT</h2>
            <p class="subtitle">Cliente: <strong>Nissan Mexicana Aguascalientes 1</strong></p>
            <p class="text">
                Diseño, fabricación e instalación de dos cámaras de preparación, incluyendo equipos de bombeo de agua,
                zonas de humidificación, cálculo de ventiladores, ductos de suministro y garantizar calidad de aire para
                cabinas de pintura.
            </p>
            <button class="cta-button">Ver fotografías</button>
        </div>
        <div class="trapezoid"></div>
    </section>
</template>

<style scoped>
@import "../assets/styles/index.scss";

.company-info {
    display: flex;
    align-items: center;
    height: 700px;
    position: relative;
    width: 100%;
    overflow: hidden;
}

.info-content {
    width: 80%;
    height: 90%;
    padding: 40px;
    padding-right: 15%;
    z-index: 2;
    overflow: hidden;
    background: #E3E3E3;
    align-self: flex-end;
}

.subtitle {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    margin-left: 2rem;
    margin-bottom: 1rem;
}

.trapezoid {
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url('../assets/images/project-1.png');
  background-size: cover;
  background-position: center;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 2;
}

@media (max-width: 768px) {
    .company-info {
        flex-direction: column;
        height: auto;
    }

    .info-content {
        width: 100%;
        padding: 20px;
    }

    .trapezoid {
        width: 100%;
        height: 300px;
        clip-path: none;
    }
}
</style>
