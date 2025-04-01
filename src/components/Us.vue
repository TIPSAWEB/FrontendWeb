<template>
    <div class="us">
        <div class="banner">NOSOTROS</div>
        <div class="content">
            <h2>Comprometidos con la Innovación en Ingeniería y Automatización</h2>
            <div class="divider"></div>
            <p>
                TIPSA Transformaciones Industriales y Procesos, cuenta con más de 11 años de experiencia brindando soluciones de ingeniería,
                manufactura y automatización a los procesos de tratamiento de superficies. Nuestro socio fundador, a base de experiencia y
                conocimiento, ha llevado la compañía a consolidarse como una de las especializadas en su ramo.
            </p>
            <p>
                Nos distinguimos por siempre superar las expectativas de nuestros clientes en cualquier tipo de industria, principalmente
                la automotriz. Mantenemos desde nuestro inicio de operaciones un firme compromiso con la excelencia y proporcionamos equipos
                y servicios de alta calidad, agregando valor a las operaciones de nuestros clientes.
            </p>
        </div>
    </div>
</template>

<style scoped>
.us {
    position: relative;
    padding: 5rem 0;
    background-color: white;
    color: black;
    text-align: left;
    overflow: hidden;
    width: 100%;
}

/* 📌 Sección "Nosotros" en la esquina superior izquierda con borde inclinado */
.banner {
    position: absolute;
    top: 0;
    background: #8e8e8e;
    color: white;
    font-family: "Bebas Neue", sans-serif;
    font-size: 3rem;
    font-weight: 400;
    padding: 1.5rem 4rem;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
    width: 400px;
    height: 50px;
    letter-spacing: 0.3em;
}

.content {
    margin-top: 7rem;
    letter-spacing: 0.05em;
}

h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
}

.divider {
    width: 15%;
    height: 4px;
    background: linear-gradient(to right, #009ACE, #5D7975);
    margin: 1.5rem auto;
}

p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: justify;
    max-width: 900px;
    margin: 1rem auto;
    line-height: 2;
}
</style>
