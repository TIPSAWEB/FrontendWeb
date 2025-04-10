<template>
<div class="grid-container">
<div
    v-for="(card, index) in cards"
    :key="index"
    :class="['card', card.rowClass, card.areaClass]"
>
    <div class="card-content">
    <div class="text">{{ card.text }}</div>
    <img v-if="card.image" :src="getImageUrl(card.image)" alt="Imagen" class="image" />
    </div>
</div>

<!-- Logo que ocupa columnas 3 y 4 en la última fila -->
<div class="logo-area">
    <img :src="getImageUrl('Logo.png')" alt="Logo" />
</div>
</div>
</template>

<script setup>
function getImageUrl(path) {
return new URL(`../assets/images/${path}`, import.meta.url).href
}

const cards = [
// Fila 1 (color: #718F97C9)
{
text: 'líneas de pintura para la industria en general',
image: 'Vision.jpg',
rowClass: 'row-1',
areaClass: 'area-1-1'
},
{
text: 'Automatización',
image: 'Vision.jpg',
rowClass: 'row-1',
areaClass: 'area-2-1'
},
{
text: 'Diseño 3D',
image: 'Vision.jpg',
rowClass: 'row-1',
areaClass: 'area-3-1'
},
{
text: 'Montaje',
image: 'Vision.jpg',
rowClass: 'row-1',
areaClass: 'area-4-1'
},

// Fila 2 (color: #A2ACABC9)
{
text: 'Supervisión',
image: 'Vision.jpg',
rowClass: 'row-2',
areaClass: 'area-1-2'
},
{
text: 'Simulación',
image: 'Vision.jpg',
rowClass: 'row-2',
areaClass: 'area-2-2'
},
{
text: 'Control de calidad',
image: 'Vision.jpg',
rowClass: 'row-2',
areaClass: 'area-3-2'
},
{
text: 'Mantenimiento',
image: 'Vision.jpg',
rowClass: 'row-2',
areaClass: 'area-4-2'
},

// Fila 3 (solo columna 1 y 2)
{
text: 'Capacitación',
image: 'Vision.jpg',
rowClass: 'row-3',
areaClass: 'area-1-3'
},
{
text: 'Asesoría',
image: 'Vision.jpg',
rowClass: 'row-3',
areaClass: 'area-2-3'
}
]
</script>

<style scoped>
.grid-container {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(3, 200px);
width: 100%;
}

/* Posicionamiento */
.area-1-1 { grid-column: 1; grid-row: 1; }
.area-2-1 { grid-column: 2; grid-row: 1; }
.area-3-1 { grid-column: 3; grid-row: 1; }
.area-4-1 { grid-column: 4; grid-row: 1; }

.area-1-2 { grid-column: 1; grid-row: 2; }
.area-2-2 { grid-column: 2; grid-row: 2; }
.area-3-2 { grid-column: 3; grid-row: 2; }
.area-4-2 { grid-column: 4; grid-row: 2; }

.area-1-3 { grid-column: 1; grid-row: 3; }
.area-2-3 { grid-column: 2; grid-row: 3; }

.card {
position: relative;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-family: "Inter", sans-serif;
font-size: 1.2rem;
font-weight: bold;
text-transform: uppercase;
transition: all 0.3s ease;
cursor: pointer;
}

.row-1 {
background-color: #718F97C9;
}
.row-2 {
background-color: #A2ACABC9;
}
.row-3 {
background-color: #009BCDC9;
}

.card-content {
position: relative;
width: 100%;
height: 100%;
}

.text {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
text-align: center;
z-index: 1;
transition: opacity 0.3s ease;
}

.image {
position: absolute;
top: 50%;
left: 50%;
width: 100%;
height: 100%;
object-fit: cover;
opacity: 0;
z-index: 0;
transition: opacity 0.3s ease, transform 0.3s ease;
transform: translate(-50%, -50%) scale(1.1);
}

.card:hover .text {
opacity: 0;
}

.card:hover .image {
opacity: 1;
transform: translate(-50%, -50%) scale(1);
}

/* Logo área */
.logo-area {
grid-column: 3 / 5;
grid-row: 3;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
}

.logo-area img {
max-height: 80%;
max-width: 100%;
object-fit: contain;
}
</style>
