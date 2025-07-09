<template>
<div class="sidebar">
    <h2 class="admin-title">Admin</h2>
    <ul class="menu">
    <li :class="{ activo: rutaActiva === 'dashboard' }" @click="ir('admin-dashboard')">
        <i class="fas fa-home"></i> Panel Principal
    </li>
    <li @click="mostrarConfig = true">
        <i class="fas fa-cog"></i> Configuración
    </li>
    <li @click="cerrarSesion">
        <i class="fas fa-sign-out-alt"></i> Salir
    </li>
    </ul>
    <div class="logo-tipssa">
    <img src="/src/assets/images/Logo.png" alt="Logo TIPSA" />
    </div>

    <div v-if="mostrarConfig" class="config-modal">
    <div class="config-content">
        <h3>Editar perfil</h3>
        <input v-model="perfil.nombre" placeholder="Nuevo nombre" />
        <input v-model="perfil.password" type="password" placeholder="Nueva contraseña" />
        <input type="file" accept="image/*" @change="subirFoto" />
        <div class="botones">
        <button @click="guardarCambios">Guardar</button>
        <button @click="mostrarConfig = false">Cerrar</button>
        </div>
    </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const rutaActiva = route.name
const mostrarConfig = ref(false)
const perfil = ref({ nombre: '', password: '', foto: '' })

function ir(nombreRuta) {
router.push({ name: nombreRuta })
}

function cerrarSesion() {
localStorage.removeItem('token')
router.push('/')
}

function subirFoto(e) {
const file = e.target.files[0]
if (!file) return
const reader = new FileReader()
reader.onload = () => {
    perfil.value.foto = reader.result
}
reader.readAsDataURL(file)
}

function guardarCambios() {
console.log('Cambios guardados:', perfil.value)
mostrarConfig.value = false
}
</script>

<style scoped>
.sidebar {
width: 220px;
background-color: #658585;
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
font-family: 'Inter', sans-serif;
}

.admin-title {
font-size: 24px;
font-weight: 700;
font-family: 'Product Sans', sans-serif;
color: white;
margin-bottom: 1.5rem;
}

.menu {
list-style: none;
padding: 0;
}

.menu li {
margin: 1rem 0;
cursor: pointer;
font-weight: normal;
color: white;
transition: color 0.3s;
display: flex;
align-items: center;
font-family: 'Inter', sans-serif;
}

.menu li i {
margin-right: 0.6rem;
width: 20px;
text-align: center;
}

.menu li.activo,
.menu li:hover {
color: #8C9EA3;
}

.logo-tipssa img {
width: 100%;
margin-top: 2rem;
}

.config-modal {
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

.config-content {
background: white;
padding: 2rem;
border-radius: 10px;
width: 350px;
max-width: 90%;
font-family: 'Inter', sans-serif;
display: flex;
flex-direction: column;
gap: 0.75rem;
}

.config-content input {
padding: 0.5rem;
border-radius: 6px;
border: 1px solid #ccc;
font-size: 14px;
}

.botones {
display: flex;
justify-content: space-between;
margin-top: 1rem;
}

.botones button {
background-color: #00A5DD;
color: white;
border: none;
padding: 0.4rem 1rem;
border-radius: 6px;
cursor: pointer;
}

.botones button:last-child {
background-color: #999;
}
</style>
