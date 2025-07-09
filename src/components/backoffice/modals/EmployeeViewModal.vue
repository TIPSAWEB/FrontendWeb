<template>
<div class="modal-mask">
<div class="modal-container">
    <h3 class="modal-title">Detalles del empleado</h3>
    <div class="modal-body">
    <img :src="empleado.foto" class="foto" />
    <ul>
        <li><strong>ID:</strong> {{ empleado.id }}</li>
        <li><strong>Nombre:</strong> {{ empleado.nombre }}</li>
        <li><strong>Correo:</strong> {{ empleado.correo }}</li>
        <li><strong>Teléfono:</strong> {{ empleado.telefono }}</li>
        <li><strong>Área:</strong> {{ empleado.area }}</li>
        <li><strong>Cargo:</strong> {{ empleado.cargo }}</li>
    </ul>
    </div>
    <div class="modal-footer">
    <button @click="$emit('cerrar')">Cerrar</button>
    </div>
</div>
</div>
</template>

<script setup>
const props = defineProps({ empleado: Object })
</script>

<style scoped>
.modal-mask {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
}

.modal-container {
background: white;
padding: 2rem;
border-radius: 10px;
width: 400px;
max-width: 90%;
font-family: 'Inter', sans-serif;
}

.modal-title {
margin-bottom: 1rem;
font-weight: bold;
font-size: 20px;
color: #333;
text-align: center;
}

.modal-body {
margin-bottom: 1rem;
}

.foto {
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;
display: block;
margin: 0 auto 1rem auto;
}

ul {
list-style: none;
padding: 0;
font-size: 15px;
}

li {
margin-bottom: 0.4rem;
}

.modal-footer {
text-align: center;
}

.modal-footer button {
background-color: #00A5DD;
color: white;
border: none;
padding: 0.4rem 1rem;
border-radius: 6px;
cursor: pointer;
}
</style>
