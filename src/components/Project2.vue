<template>
    <div class="projects">
        <img class="background-img-dark" src="../assets/images/project-2.png" alt="" />
        <div class="overlay"></div>

        <div class="content">
            <h2 class="title-white">2. CABINA para aplicación de adhesivo</h2>
            <p class="subtitle">Cliente: <strong>Faurecia SLP</strong></p>
            <p class="text-white">
                Diseño, fabricación e instalación de una cabina de aplicación de adhesivo,
                incluyendo sistemas de inyección y extracción de aire.
            </p>
            <div class="button-wrapper">
            <button class="cta-button">Ver fotografías</button>
        </div>
        </div>
    </div>
</template>

<style scoped>
@import "../assets/styles/index.scss";

.projects {
    position: relative;
    background-color: white;
    color: black;
    text-align: left;
    overflow: hidden;
    width: 100%;
    opacity: 90%;
    padding-bottom: 10%;
}



.title-white {
    font-family: "Bebas Neue", sans-serif;
    font-size: 50px;
    /* Tamaño reducido */
    font-weight: 400;
    /* Peso 400 */
    letter-spacing: 0.1em;
    /* Separación de letras */
    text-align: start;
    margin-left: 5rem;
    margin-bottom: 1rem;

}

.subtitle {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 15px;
    margin-left: 5rem;
    letter-spacing: 0.13em;
    margin-bottom: 1rem;
}

.text-white {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.4rem;
    text-align: start;
    line-height: 1.5;
    margin-left: 5rem;
    margin-bottom: 1rem;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.background-container {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.background-img-dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: 0;
}

.overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7); /*opacidad */
    z-index: 1;
}

.content {
    position: relative;
    z-index: 2;
    color: white;
    align-items: center;
    align-self: center;
    padding: 10%;
}
</style>