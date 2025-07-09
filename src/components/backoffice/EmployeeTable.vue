<template>
<div>
<table class="employee-table">
    <thead>
    <tr>
        <th>#</th>
        <th><input type="checkbox" v-model="selectAll" @change="toggleAll" /></th>
        <th>ID</th>
        <th>Foto</th>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Teléfono</th>
        <th>Área</th>
        <th>Cargo</th>
        <th>Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="(emp, i) in empleadosFiltrados"
        :key="emp.id"
    >
        <td>{{ i + 1 }}</td>
        <td><input type="checkbox" v-model="selectedIds" :value="emp.id" /></td>
        <td>{{ emp.id }}</td>
        <td><img :src="emp.foto" class="foto" /></td>
        <td>{{ emp.nombre }}</td>
        <td>{{ emp.correo }}</td>
        <td>{{ emp.telefono }}</td>
        <td>{{ emp.area }}</td>
        <td>{{ emp.cargo }}</td>
        <td>
        <i class="fas fa-trash-alt icon" @click="handleDelete(emp)" title="Eliminar"></i>
        <i class="fas fa-pencil-alt icon" @click="handleEdit(emp)" title="Editar"></i>
        <i class="fas fa-eye icon" @click="handleView(emp)" title="Ver"></i>
        </td>
    </tr>
    </tbody>
</table>
</div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
const props = defineProps(['filter'])
const emit = defineEmits(['delete', 'edit', 'view'])

const empleados = ref([])
const selectedIds = ref([])
const selectAll = ref(false)

const empleadosMock = [
{
id: 'E001',
nombre: 'Juan Pérez',
correo: 'juan@example.com',
telefono: '5512345678',
area: 'TI',
cargo: 'Desarrollador',
foto: 'https://i.pravatar.cc/40?img=1'
},
{
id: 'E002',
nombre: 'Ana Gómez',
correo: 'ana@example.com',
telefono: '5598765432',
area: 'Marketing',
cargo: 'Diseñadora',
foto: 'https://i.pravatar.cc/40?img=2'
}
]

onMounted(async () => {
empleados.value = empleadosMock
// empleados.value = await fetchEmpleados()
})

const empleadosFiltrados = computed(() => {
if (!props.filter) return empleados.value
const f = props.filter.toLowerCase()
return empleados.value.filter(emp =>
Object.values(emp).some(val =>
    String(val).toLowerCase().includes(f)
)
)
})

function toggleAll() {
if (selectAll.value) {
selectedIds.value = empleadosFiltrados.value.map(emp => emp.id)
} else {
selectedIds.value = []
}
}

watch(selectedIds, (val) => {
if (val.length === empleadosFiltrados.value.length) {
selectAll.value = true
} else {
selectAll.value = false
}
})

function handleDelete(emp) {
emit('delete', emp)
}

function handleEdit(emp) {
emit('edit', emp)
}

function handleView(emp) {
emit('view', emp)
}
</script>

<style scoped>
.employee-table {
width: 100%;
border-collapse: collapse;
border-radius: 8px;
overflow: hidden;
background-color: white;
}

.employee-table th,
.employee-table td {
padding: 0.75rem;
text-align: left;
border-bottom: 1px solid #ddd;
font-family: 'Inter', sans-serif;
}

.foto {
width: 35px;
height: 35px;
border-radius: 50%;
object-fit: cover;
}

.icon {
margin: 0 5px;
cursor: pointer;
color: #00A5DD;
}
</style>
