<template>
<div class="login-view">
<LoginForm />
</div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
components: {
LoginForm
}
}
</script>

<style scoped>
.login-view {
font-family: 'Inter', sans-serif;
color: white;
}
</style>
