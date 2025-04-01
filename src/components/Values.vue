<template>
    <div class="values">
    <h2 class="title">VALORES</h2>
    <div class="content">
        <div class="left">
        <h3>Trabajo en equipo</h3>
        <div class="divider"></div>
        <p>
            Fomentamos en nuestra compañía un ambiente de armonía y compañerismo para lograr los objetivos establecidos.
        </p>
        <span class="arrow">&gt;</span>
        </div>
        <div class="right"></div>
    </div>
    </div>
</template>

<style scoped>
.values {
    background: url("../assets/images/BgValues.png") no-repeat center center;
    background-size: cover;
    padding: 3rem;
    height: 700px; /* Ajusta según lo necesites */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow: hidden;
}

/* 📌 Título alineado a la izquierda */
.title {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #5f7975;
    margin-bottom: 1rem;
}

/* 📌 Contenedor de los valores */
.content {
    display: flex;
    height: 70%;
}

/* 📌 Sección izquierda (Trabajo en equipo) */
.left {
    background: #009bcd;
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* 📌 Título en la sección izquierda */
h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
}

/* 📌 Línea separadora */
.divider {
    width: 80px;
    height: 5px;
    background: white;
    margin-bottom: 1rem;
}

/* 📌 Párrafo */
p {
    font-size: 1.2rem;
    color: white;
    line-height: 1.5;
}

/* 📌 Flecha grande */
.arrow {
    font-size: 3rem;
    color: white;
    margin-top: 1rem;
}

/* 📌 Sección derecha vacía con fondo */
.right {
    background: #4c4c4c;
    width: 50%;
}
</style>
