<template>
<div class="modal-mask">
<div class="modal-container">
    <h3 class="modal-title">Agregar nuevo empleado</h3>
    <form @submit.prevent="submitForm">
    <div class="form-group">
        <label>Nombre:</label>
        <input v-model="form.nombre" type="text" required />
    </div>
    <div class="form-group">
        <label>Correo:</label>
        <input v-model="form.correo" type="email" required />
    </div>
    <div class="form-group">
        <label>Teléfono:</label>
        <input v-model="form.telefono" type="text" required />
    </div>
    <div class="form-group">
        <label>Área:</label>
        <input v-model="form.area" type="text" required />
    </div>
    <div class="form-group">
        <label>Cargo:</label>
        <input v-model="form.cargo" type="text" required />
    </div>
    <div class="form-group">
        <label>Foto:</label>
        <input type="file" accept="image/*" @change="procesarImagen" />
    </div>
    <div v-if="form.foto" class="preview">
        <img :src="form.foto" alt="Preview" />
    </div>
    <div class="modal-footer">
        <button type="submit">Guardar</button>
        <button type="button" @click="$emit('cerrar')">Cancelar</button>
    </div>
    </form>
</div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['cerrar', 'crear'])

const form = reactive({
nombre: '',
correo: '',
telefono: '',
area: '',
cargo: '',
foto: ''
})

function submitForm() {
emit('crear', { ...form })
}

function procesarImagen(event) {
const archivo = event.target.files[0]
if (!archivo) return
const reader = new FileReader()
reader.onload = () => {
form.foto = reader.result // base64 completo con encabezado
}
reader.readAsDataURL(archivo)
}
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

.form-group {
margin-bottom: 1rem;
}

input[type="text"],
input[type="email"] {
width: 100%;
padding: 0.4rem 0.6rem;
border-radius: 6px;
border: 1px solid #ccc;
font-size: 14px;
}

.modal-footer {
display: flex;
justify-content: space-between;
margin-top: 1rem;
}

.modal-footer button {
background-color: #00A5DD;
color: white;
border: none;
padding: 0.4rem 1rem;
border-radius: 6px;
cursor: pointer;
}

.modal-footer button:last-child {
background-color: #999;
}

.preview img {
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;
margin-top: 0.5rem;
}
</style>
