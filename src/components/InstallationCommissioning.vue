<template>
    <div class="section">
        <img src="../assets/images/backgrounds/background-installation.jpg" class="background-img" />
        <div class="shape-line">
            <svg class="linea" viewBox="0 0 1000 130" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradiente-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="50%" stop-color="#009ACE" />
                        <stop offset="50%" stop-color="#5D7975" />
                    </linearGradient>
                </defs>
                <path d="M0 100 H300 L370 0 H1000" stroke="url(#gradiente-line)" stroke-width="3" fill="none" />
            </svg>
        </div> <!-- Línea decorativa -->
        <div class="shape"></div>
        <div class>
            <h2 class="title-blue">INSTALACIÓN Y PUESTA A PUNTO</h2>
            <p class="text">
                En TIPSA contamos con personal técnico especializado en el la instalación de equipos industriales
            </p>
        </div>
    </div>
</template>
<script>
</script>

<style scoped>
@import "../assets/styles/index.scss";

.section {
  position: relative;
  height: 700px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 700px;
  width: 100%;
  overflow: hidden;
  flex-direction: row-reverse;
  background-color: white;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  z-index: 0;
}



.shape {
    background-image: url('../assets/images/installation.png');
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 100%;
    clip-path: polygon(0 0, 90% 0%, 100% 100%, 0% 100%);
    overflow: hidden;
    transform: scaleX(-1);
}

.shape-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 2;
  pointer-events: none;
}

.linea {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
