<template>
<div class="layout">
    <AdminSidebar />
    <div class="main-panel">
    <AdminNavbar />
    <div class="content-area">
        <router-view />
    </div>
    </div>
</div>
</template>

<script setup>
import AdminNavbar from './AdminNavbar.vue'
import AdminSidebar from './AdminSidebar.vue'
</script>

<style scoped>
.layout {
display: flex;
height: 100vh;
}

.main-panel {
flex: 1;
display: flex;
flex-direction: column;
background-color: #f4f4f4;
}

.content-area {
flex: 1;
padding: 2rem;
background-color: #f0f0f0;
overflow-y: auto;
}
</style>
