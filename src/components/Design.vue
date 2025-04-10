<template>
<section class="seccion-diseno" ref="designSection">
<div class="lineas-decorativas">
    <!-- Línea 1 con gradiente y animación -->
    <svg class="linea line-1" viewBox="0 0 1000 100" preserveAspectRatio="none">
    <defs>
        <linearGradient id="gradiente-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#009ACE" />
        <stop offset="100%" stop-color="#5D7975" />
        </linearGradient>
    </defs>
    <path class="draw-line" d="M0 50 H350 L450 100 H1000" stroke="url(#gradiente-line)" stroke-width="3" fill="none" />
    </svg>

    <!-- Línea 2 con el mismo gradiente, posicionada más abajo -->
    <svg class="linea line-2" viewBox="0 0 1000 100" preserveAspectRatio="none">
    <path class="draw-line" d="M0 50 H400 L500 75 H800" stroke="url(#gradiente-line)" stroke-width="3" fill="none" />
    </svg>
</div>

<div class="contenido">
    <h2 class="titulo">DISEÑO</h2>
    <p class="descripcion">
    Nuestro equipo de ingenieros cuentan con la experiencia y conocimiento técnico para hacer cálculos detallados y diseños precisos que permiten a nuestros clientes tener una visión completa del proyecto desde sus etapas iniciales.
    </p>
    <div class="logos">
    <img src="../assets/images/Logo1.png" alt="Logo 1" />
    <img src="../assets/images/Logo2.png" alt="Logo 2" />
    </div>
</div>
</section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const designSection = ref(null);

onMounted(() => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    const lines = designSection.value.querySelectorAll('.draw-line');
    if (entry.isIntersecting) {
    // Reinicia la animación para dibujar las líneas
    lines.forEach(line => {
        line.style.animation = 'none';
        void line.offsetWidth; // fuerza reflow
        line.style.animation = 'draw 2s forwards';
    });
    } else {
    // Cuando la sección ya no esté visible, reiniciamos a estado oculto.
    lines.forEach(line => {
        line.style.animation = 'none';
        line.style.strokeDashoffset = '1000';
    });
    }
});
}, { threshold: 0.1 });
if (designSection.value) observer.observe(designSection.value);
});
</script>

<style scoped>
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
width: 100%;
height: 200px;
z-index: 0;
}

.linea {
position: absolute;
width: 100%;
height: 100px;
}

/* Posición de la primera línea */
.line-1 {
top: 40px;
}

/* Segunda línea, ahora bajada un poco más (por ejemplo, top: 140px) */
.line-2 {
top: 140px;
}

.contenido {
position: relative;
z-index: 1;
margin-top: 150px;
text-align: center;
}

.titulo {
font-family: "Bebas Neue", sans-serif;
font-size: 50px;       /* Tamaño reducido */
font-weight: 400;      /* Peso 400 */
letter-spacing: 0.1em; /* Separación de letras */
color: #00A5DD;
text-align: left;
margin-left: 2rem;
margin-bottom: 1rem;
}

.descripcion {
max-width: 900px;
margin: 1.5rem auto;
font-family: "Inter", sans-serif;
font-size: 1.1rem;
text-align: justify;
color: #333;
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

@keyframes draw {
to {
stroke-dashoffset: 0;
}
}
</style>
