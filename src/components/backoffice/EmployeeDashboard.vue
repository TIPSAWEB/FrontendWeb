<template>
<div class="dashboard">
<div class="header">
    <h2 class="titulo-tabla">Tabla de empleados</h2>
    <button class="add-user" @click="mostrarModalAgregar = true">
    + Agregar usuario
    </button>
</div>
<SearchInput v-model="searchTerm" class="buscador" />
<EmployeeTable
    :filter="searchTerm"
    @edit="abrirModalEditar"
    @view="abrirModalVer"
    @delete="abrirModalEliminar"
/>

<!-- Aquí van los modales -->

<EmployeeCreateModal
    v-if="mostrarModalAgregar"
    @cerrar="mostrarModalAgregar = false"
    @crear="agregarEmpleado"
/>

<EmployeeEditModal
    v-if="empleadoEditando"
    :empleado="empleadoEditando"
    @cerrar="empleadoEditando = null"
    @guardar="guardarEdicion"
/>

<EmployeeViewModal
    v-if="empleadoViendo"
    :empleado="empleadoViendo"
    @cerrar="empleadoViendo = null"
/>

<DeleteConfirmModal
    v-if="empleadoAEliminar"
    :empleado="empleadoAEliminar"
    @cerrar="empleadoAEliminar = null"
    @confirmar="eliminarEmpleado"
/>

</div>
</template>

<script setup>
import { ref } from 'vue'
import SearchInput from './SearchInput.vue'
import EmployeeTable from './EmployeeTable.vue'
import EmployeeViewModal from './modals/EmployeeViewModal.vue'
import EmployeeEditModal from './modals/EmployeeEditModal.vue'
import DeleteConfirmModal from './modals/DeleteConfirmModal.vue'
import EmployeeCreateModal from './modals/EmployeeCreateModal.vue'

const searchTerm = ref('')
const mostrarModalAgregar = ref(false)
const empleadoEditando = ref(null)
const empleadoViendo = ref(null)
const empleadoAEliminar = ref(null)

function abrirModalEditar(empleado) {
empleadoEditando.value = empleado
}

function guardarEdicion(empleadoActualizado) {
    console.log('Empleado actualizado:', empleadoActualizado)
    // Reemplazar o sincronizar con la tabla y el backend después
    empleadoEditando.value = null
}

function abrirModalVer(empleado) {
empleadoViendo.value = empleado
}

function abrirModalEliminar(empleado) {
empleadoAEliminar.value = empleado
}

function eliminarEmpleado(id) {
    console.log('Eliminar empleado con ID:', id)
    empleadoAEliminar.value = null
    // Aquí DELETE real al backend
}

function agregarEmpleado(nuevoEmpleado) {
    console.log('Empleado nuevo:', nuevoEmpleado)
    mostrarModalAgregar.value = false
    // Aquí lo agregas a empleados o haces POST al backend
}

</script>

<style scoped>
.dashboard {
background-color: white;
padding: 2rem;
border-radius: 10px;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
font-family: 'Inter', sans-serif;
}

.header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;
}

.titulo-tabla {
font-family: 'Kufam', sans-serif;
font-size: 32px;
font-weight: 700;
color: black;
}

.add-user {
background-color: #00A5DD;
color: white;
border: none;
padding: 0.5rem 1rem;
border-radius: 6px;
cursor: pointer;
}

.buscador {
width: 25%;
margin-bottom: 1rem;
}
</style>
