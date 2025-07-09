<template>
<div class="navbar">
    <p class="greeting">Hola, {{ adminName }} 👋</p>
    <img class="avatar" :src="adminAvatar" alt="Foto de perfil" />
</div>
</template>

<script setup>
defineProps(['adminName', 'adminAvatar'])
</script>

<style scoped>
.navbar {
background-color: white;
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
}

.greeting {
font-size: 18px;
font-weight: 500;
}

.avatar {
width: 45px;
height: 45px;
border-radius: 50%;
object-fit: cover;
}
</style>
