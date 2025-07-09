<template>
<div class="modal-mask">
<div class="modal-container">
    <h3 class="modal-title">Confirmar eliminación</h3>
    <div class="modal-body">
    <p>¿Estás seguro de que deseas eliminar al usuario <strong>{{ empleado.nombre }}</strong>?</p>
    </div>
    <div class="modal-footer">
    <button @click="$emit('confirmar', empleado.id)">Sí, eliminar</button>
    <button @click="$emit('cerrar')">Cancelar</button>
    </div>
</div>
</div>
</template>

<script setup>
const props = defineProps({ empleado: Object })
const emit = defineEmits(['confirmar', 'cerrar'])
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
width: 380px;
max-width: 90%;
font-family: 'Inter', sans-serif;
}

.modal-title {
margin-bottom: 1rem;
font-weight: bold;
font-size: 20px;
color: #c0392b;
text-align: center;
}

.modal-body {
margin-bottom: 1rem;
text-align: center;
}

.modal-footer {
display: flex;
justify-content: space-around;
}

.modal-footer button {
background-color: #00A5DD;
color: white;
border: none;
padding: 0.4rem 1rem;
border-radius: 6px;
cursor: pointer;
min-width: 100px;
}

.modal-footer button:first-child {
background-color: #e74c3c;
}
</style>
