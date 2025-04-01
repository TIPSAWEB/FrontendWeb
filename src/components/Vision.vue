<template>
    <div class="vision">
    <div class="text">
        <h2>VISIÓN</h2>
        <p>
        Consolidarnos como una de las empresas líderes en integración de soluciones de ingeniería
        en el sector industrial, adecuando nuestros productos y servicios a los avances tecnológicos;
        y conservando nuestro compromiso con el cuidado del medio ambiente además de contar con un equipo
        humano altamente capacitado para ofrecer productos de bajo consumo energético, bajo mantenimiento y larga duración.
        </p>
    </div>
    <div class="shape"></div>
    </div>
</template>

<style scoped>
.vision {
    display: flex;
    align-items: center;
    background: #4c4c4c;
    color: white;
    height: 700px; /* Ajusta según lo necesites */
    width: 100%;
    padding: 2rem;
    overflow: hidden;
}

/* 📌 Sección de texto alineada a la izquierda */
.text {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 2rem;
}

/* 📌 Título con "Bebas Neue" */
h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #5f7975;
    margin-bottom: 1rem;
}

/* 📌 Párrafo justificado */
p {
    font-size: 1.2rem;
    text-align: justify;
    line-height: 1.5;
    max-width: 90%;
}

/* 📌 Forma inclinada del lado derecho */
.shape {
    background: #4c4c4c;
    width: 40%;
    height: 100%;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>
