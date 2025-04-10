<template>
    <div class="vision">
    <div class="overlay"></div>
    <div class="text">
        <h2>VISIÓN</h2>
        <p>
        Consolidarnos como una de las empresas líderes en integración de soluciones de ingeniería
        en el sector industrial, adecuando nuestros productos y servicios a los avances tecnológicos;
        y conservando nuestro compromiso con el cuidado del medio ambiente además de contar con un equipo
        humano altamente capacitado para ofrecer productos de bajo consumo energético, bajo mantenimiento y larga duración.
        </p>
    </div>
    </div>
</template>

<style scoped>
.vision {
    position: relative;
    display: flex;
    align-items: center;
    background-image: url('../assets/images/Vision.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    height: 700px;
    width: 100%;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    pointer-events: none;
}


.text {
    position: relative;
    z-index: 2;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 2rem;
}

h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 4rem;
    font-weight: 400;
    color: #5f7975;
    text-align: start;
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
}

p {
    font-size: 1.4rem;
    text-align: justify;
    line-height: 1.5;
    max-width: 90%;
}

</style>
