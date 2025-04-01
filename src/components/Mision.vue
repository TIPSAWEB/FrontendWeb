<template>
    <div class="mision">
    <div class="shape"></div>
    <div class="text">
        <h2>MISIÓN</h2>
        <p>
        Contribuir a la solución de las necesidades del proceso productivo de nuestros clientes; mediante servicios de ingeniería,
        manufactura y automatización, conservando como prioridad la calidad del producto ajustada a los parámetros ecológicos y
        haciendo reconocimiento del talento humano que nos distingue.
        </p>
    </div>
    </div>
</template>

<style scoped>
.mision {
    display: flex;
    align-items: center;
    height: 700px;
    width: 100%;
}

.shape {
    background: #4c4c4c;
    width: 50%;
    height: 100%;
    clip-path: polygon(0 0, 90% 0%, 100% 100%, 0% 100%);
}

.text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
}

h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: #5f7975;
    text-align: start;
    width: 80%;
    letter-spacing: 0.2em;
    margin-bottom: -3%;
}

p {
    font-size: 1.2rem;
    text-align: justify;
    max-width: 80%;
    line-height: 1.5;
}
</style>
