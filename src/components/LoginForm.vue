<template>
<div class="login-container">
    <div class="left-side">
    <div class="overlay">
        <h2 class="section-title">SOLUCIONES</h2>
        <p class="section-text">
        En TIPSA, transformamos desafíos en soluciones, impulsando la industria con innovación, experiencia y calidad.
        </p>
    </div>
    <div class="decorative-line-complex"></div>
    <img src="../assets/images/Login.png" alt="Login visual" class="side-image" />
    </div>

    <div class="right-side">
        <router-link to="/">
            <img src="../assets/images/Logotipo.png" alt="TIPSA Logo" class="logo" />
        </router-link>
    <form class="form" @submit.prevent="submitLogin">
        <h2>LOGIN</h2>

        <div class="input-group">
        <input type="text" v-model="form.username" placeholder="USUARIO" />
        <i class="fas fa-user"></i>
        </div>

        <div class="input-group">
        <input type="password" v-model="form.password" placeholder="CONTRASEÑA" />
        <i class="fas fa-lock"></i>
        </div>

        <button type="submit">INICIAR SESIÓN</button>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </form>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    form: {
        username: '',
        password: ''
    },
    errorMessage: '',
    successMessage: ''
    }
},
methods: {
    submitLogin() {
    if (!this.form.username || !this.form.password) {
        this.errorMessage = 'Por favor ingresa tus credenciales.';
        this.successMessage = '';
        return;
    }

    // Simulación de acceso correcto
    if (this.form.username === 'admin' && this.form.password === 'admin123') {
        this.successMessage = 'Inicio de sesión exitoso (simulado).';
        this.errorMessage = '';

        this.form.username = '';
        this.form.password = '';
    } else {
        this.successMessage = '';
        this.errorMessage = 'Credenciales inválidas.';
    }
    }
}
}
</script>

<style scoped>
.login-container {
display: flex;
height: 100vh;
background-color: #f5f5f5;
}

/* LADO IZQUIERDO */

.decorative-line-complex {
position: absolute;
top: 5%;
left: 0;
width: 100%;
height: 10%; /* más delgada */
background: linear-gradient(to right, #8e8e8e, #009bcd);
clip-path: polygon(
10% 0%,    /* inicio arriba izquierda */
35% 0%,    /* línea horizontal hasta el primer quiebre */
35% 30%,   /* bajamos un poco */
65% 30%,   /* cruzamos horizontalmente al otro lado */
65% 60%,   /* bajamos otro poco */
35% 60%,   /* regresamos horizontalmente */
35% 100%,  /* bajamos hasta base del trazo */
10% 100%   /* regresamos al inicio */
);
z-index: 3;
opacity: 0.9;
}

.left-side {
width: 45%;
position: relative;
clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
overflow: hidden;
background: #ccc;
}

.side-image {
width: 100%;
height: 100%;
object-fit: cover;
}

.overlay {
position: absolute;
z-index: 2;
bottom: 10%;
left: 8%;
right: 8%;
color: white;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.section-title {
font-family: 'Inter', sans-serif;
font-size: 3rem;
font-weight: 700;
margin-bottom: 1rem;
color: white;
width: 100%;
text-align: center;
}

.section-text {
font-family: 'Be Vietnam Pro', sans-serif;
font-size: 1rem;
line-height: 1.6;
max-width: 80%;
color: white;
text-align: justify;
padding-right: 15%;
padding-left: 15%;
}

/* LADO DERECHO */
.right-side {
width: 55%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 4rem;
}

.logo {
width: 130px;
margin-bottom: 2rem;
}

form.form {
width: 100%;
max-width: 400px;
display: flex;
flex-direction: column;
gap: 2rem;
}

h2 {
font-family: 'Kufam', sans-serif;
font-size: 2.5rem;
color: #132b3f;
text-align: center;
margin-bottom: 1rem;
}

.input-group {
position: relative;
border-bottom: 2px solid #132b3f;
}

.input-group input {
width: 100%;
border: none;
outline: none;
padding: 0.8rem 2rem 0.8rem 0;
background: transparent;
font-size: 1rem;
color: #132b3f;
caret-color: #009bcd;
}

.input-group i {
position: absolute;
right: 0;
top: 50%;
transform: translateY(-50%);
color: #009bcd;
}

/* Botón */
button {
margin-top: 1rem;
padding: 1rem;
background: linear-gradient(to right, #aaa, #009bcd);
color: white;
border: none;
font-weight: bold;
text-transform: uppercase;
clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
width: 50%;
align-self: center;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease;
cursor: pointer;
}

button:hover {
background: linear-gradient(to right, #999, #007aa5);
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

button:active {
transform: translateY(2px);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Mensajes */
.error {
color: red;
text-align: center;
}

.success {
color: green;
text-align: center;
}
</style>
