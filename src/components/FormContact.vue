<template>
<div class="form-contact">
    <div class="top-banner">
    <div class="banner">CONTACTO</div>
    </div>

    <div class="form-content">
    <div class="left">
        <img src="../assets/images/Logotipo.png" alt="TIPSA logo" class="logo" />
        <p class="intro">
        Contáctanos a través de nuestro formulario, envíanos un correo o llámanos. Te responderemos lo antes posible.
        </p>
        <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+52 123 456 7890</span>
        </div>
        <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>contacto@tipsa.com</span>
        </div>
    </div>

    <div class="right">
        <form @submit.prevent="submitForm">
        <label for="name">Nombre</label>
        <input id="name" type="text" v-model="form.name" />

        <label for="email">Correo electrónico</label>
        <input id="email" type="email" v-model="form.email" />

        <label for="message">Mensaje</label>
        <textarea id="message" rows="8" v-model="form.message"></textarea>

        <button type="submit">ENVIAR</button>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
    </div>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    form: {
        name: '',
        email: '',
        message: ''
    },
    successMessage: '',
    errorMessage: ''
    }
},
methods: {
    submitForm() {
    if (!this.form.name || !this.form.email || !this.form.message) {
        this.successMessage = ''
        this.errorMessage = 'Por favor completa todos los campos.'
        return
    }

    // Simula envío de datos
    console.log('Mensaje enviado:', this.form)

    this.successMessage = 'Tu mensaje ha sido enviado exitosamente.'
    this.errorMessage = ''

    this.form.name = ''
    this.form.email = ''
    this.form.message = ''
    }
}
}
</script>

<style scoped>
.form-contact {
width: 100%;
padding: 8rem 0;
background-color: #f5f5f5;
}

.top-banner {
display: flex;
justify-content: flex-start;
margin-bottom: 5rem;
}

.banner {
background: #8e8e8e;
color: white;
font-family: "Bebas Neue", sans-serif;
font-size: 3rem;
padding: 1.5rem 4rem;
clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
letter-spacing: 0.3em;
}

.form-content {
display: flex;
justify-content: space-between;
padding: 0 10%;
gap: 3rem;
}

.left {
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
text-align: justify;
}

.logo {
width: 120px;
margin-bottom: 1.5rem;
}

.intro {
margin-bottom: 2rem;
font-size: 1.1rem;
line-height: 1.6;
}

.contact-item {
display: flex;
align-items: center;
gap: 1rem;
font-size: 1rem;
margin-bottom: 1rem;
}

.contact-item i {
color: #009bcd;
}

.right {
width: 50%;
display: flex;
flex-direction: column;
gap: 1rem;
}

form {
display: flex;
flex-direction: column;
}

label {
margin-bottom: 0.3rem;
font-weight: bold;
}

input,
textarea {
padding: 0.8rem 1rem;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #eaeaea;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
font-family: inherit;
transition: border 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
outline: none;
border-color: #009bcd;
box-shadow: 0 0 5px rgba(0, 155, 205, 0.6);
}

textarea {
min-height: 250px;
}

button {
margin-top: 2rem;
padding: 1rem 2rem;
background: linear-gradient(to right, #aaa, #009bcd);
color: white;
border: none;
border-radius: 0;
cursor: pointer;
font-weight: bold;
width: 100%;
text-transform: uppercase;
clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
transition: all 0.2s ease;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
background: linear-gradient(to right, #999, #007aa5);
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

button:active {
transform: translateY(2px);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.success {
color: green;
margin-top: 1rem;
font-weight: bold;
text-align: center;
}

.error {
color: red;
margin-top: 1rem;
font-weight: bold;
text-align: center;
}

input,
textarea {
position: relative;
z-index: 1;
caret-color: #009bcd;
}

input:focus,
textarea:focus {
outline: none;
border-color: #009bcd;
box-shadow: 0 0 5px rgba(0, 155, 205, 0.6);
caret-color: #009bcd;
}

</style>
