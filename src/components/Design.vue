<template>
<section class="seccion-diseno" ref="designSection">
<img src="../assets/images/backgrounds/background-design.jpg" class="background-img" />
<div class="lineas-decorativas">
    <!-- Línea 1 con gradiente y animación -->
    <svg class="linea line-1" viewBox="0 0 1000 130" preserveAspectRatio="none">
    <defs>
        <linearGradient id="gradiente-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#009ACE" />
        <stop offset="100%" stop-color="#5D7975" />
        </linearGradient>
    </defs>
    <path class="draw-line" d="M0 50 H350 L400 100 H1000" stroke="url(#gradiente-line)" stroke-width="3" fill="none" />
    </svg>

    <!-- Línea 2 con el mismo gradiente, posicionada más abajo -->
    <svg class="linea line-2" viewBox="0 0 1000 130" preserveAspectRatio="none">
    <path class="draw-line" d="M0 50 H400 L450 100 H800" stroke="url(#gradiente-line)" stroke-width="3" fill="none" />
    </svg>
</div>

<div class="contenido">
    <h2 class="title-blue">DISEÑO</h2>
    <p class="text">
    Nuestro equipo de ingenieros cuentan con la experiencia y conocimiento técnico para hacer cálculos detallados y diseños precisos que permiten a nuestros clientes tener una visión completa del proyecto desde sus etapas iniciales.
    </p>
    <div class="logos">
    <img class="image-logo" src="../assets/images/autodesk.png" alt="Logo 1" />
    <img class="image-logo" src="../assets/images/b-solidworks.png" alt="Logo 2" />
    </div>
</div>
</section>
</template>

<style scoped>
@import "../assets/styles/index.scss";

.seccion-diseno {
height: 700px;
position: relative;
background: white;
display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;
padding: 2rem;
}

.lineas-decorativas {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 200px;
z-index: 2;
pointer-events: none;
}

.linea {
    display: block;
    width: 100%;
    height: 100px;
}

/* Posición de la primera línea */
.line-1 {
top: 40px;
}

/* Segunda línea, ahora bajada un poco más (por ejemplo, top: 140px) */
.line-2 {
top: 20px;
}

.contenido {
position: relative;
z-index: 1;
margin-top: 150px;
text-align: center;
}


.logos {
display: flex;
justify-content: center;
align-items: center;
gap: 3rem;
margin-top: 2rem;
}

.logos img {
max-height: 120px;
max-width: 200px;
object-fit: contain;
}

/* Efecto Tron: animación de trazo para las líneas */
.draw-line {
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
animation: draw 2s forwards;
animation-delay: 0.5s;
}

.image-logo{
    transform: scale(1.5);
    transform-origin: center;
    margin-right: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3; /* menos visible */
  z-index: 0;
}

@keyframes draw {
to {
stroke-dashoffset: 0;
}
}
</style>
