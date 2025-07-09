<template>
<input
type="text"
class="search-input"
placeholder="Buscar empleado..."
:value="modelValue"
@input="$emit('update:modelValue', $event.target.value)"
/>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped>
.search-input {
width: 100%;
padding: 0.5rem 1rem;
border: 1px solid #ccc;
border-radius: 8px;
margin-bottom: 1rem;
}
</style>
