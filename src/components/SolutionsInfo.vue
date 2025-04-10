<template>
<div class="solutions">
    <div class="top-banners">
    <div class="banner">SOLUCIONES</div>
    <div class="banner2">PROYECTOS LLAVE EN MANO</div>
    </div>
    <div class="content">
    <p>
        Ofrecemos soluciones especializadas para todo tipo de industria, mediante la coordinación de todas las etapas de un proyecto,
        desde el diseño e ingeniería, fabricación, instalación y puesta a punto.
    </p>
    </div>
    <div class="banner3">CONTAMOS CON LAS SIGUIENTES SOLUCIONES</div>
</div>
</template>

<style scoped>
.solutions {
position: relative;
background-color: white;
color: black;
text-align: left;
overflow: hidden;
width: 100%;
}

.top-banners {
display: flex;
justify-content: space-between;
align-items: flex-start;
margin-bottom: 7rem;
position: relative;
z-index: 1;
}

.banner {
background: #8e8e8e;
color: white;
font-family: "Bebas Neue", sans-serif;
font-size: 3rem;
font-weight: 400;
padding: 1.5rem 4rem;
clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
letter-spacing: 0.3em;
}

.banner2 {
color: #00A5DD;
font-family: "Bebas Neue", sans-serif;
font-size: 2.5rem;
font-weight: 400;
letter-spacing: 0.3em;
padding: 1.5rem 4rem;
}

.content {
letter-spacing: 0.05em;
}

p {
font-size: 1.2rem;
text-align: justify;
max-width: 900px;
margin: 4rem auto; /* Aquí le di espacio arriba y abajo */
line-height: 2;
}

/* Banner inferior */
.banner3 {
margin-top: 7rem;
background: #E3E3E3;
color: #00A5DD;
font-family: "Bebas Neue", sans-serif;
font-size: 2.2rem;
font-weight: 400;
letter-spacing: 0.3em;
padding: 1.5rem 4rem;
clip-path: polygon(8% 0%, 100% 0, 100% 100%, 0% 100%);
width: 100%;
text-align: center;
}
</style>
