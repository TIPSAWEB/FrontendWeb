<template>
<div class="values-container">
    <h2 class="title">VALORES</h2>
    <div class="values">
    <div class="content">
        <div class="left">
        <h3>{{ currentValue.title }}</h3>
        <div class="divider"></div>
        <p>{{ currentValue.description }}</p>
        <span class="arrow" @click="nextValue">&gt;</span>
        </div>
        <div class="right" :style="backgroundStyle"></div>
    </div>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    values: [],
    currentIndex: 0
    }
},
computed: {
    currentValue() {
    return this.values[this.currentIndex] || {}
    },
    backgroundStyle() {
    if (!this.currentValue.image) return {}
    const url = new URL(`../assets/images/${this.currentValue.image}`, import.meta.url).href
    return {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    }
},
async created() {
    const module = await import('../data/values.json')
    this.values = module.default
},
methods: {
    nextValue() {
    this.currentIndex = (this.currentIndex + 1) % this.values.length
    }
}
}
</script>

<style scoped>
.values-container {
width: 100%;
padding: 2rem 0;
background: url("../assets/images/BgValues.png") no-repeat center center;
background-size: cover;
}

.title {
font-family: "Bebas Neue", sans-serif;
font-size: 4rem;
font-weight: 400;
color: #5f7975;
letter-spacing: 6px;
margin: 5rem 0 0 8%;
}

.values {
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 70%;
margin: 0 auto;
border-radius: 8px;
}

.content {
display: flex;
height: 70%;
}

.left {
background: #009bcd;
width: 50%;
padding: 2rem 10rem 2rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
clip-path: polygon(0 0, 80% 0, 100% 100%, 0 100%);
margin-left: 5%;
}

h3 {
font-size: 2.2rem; /* Un poco más grande */
font-weight: 500;
color: white;
margin-bottom: 1rem;
letter-spacing: 4px; /* Espacio entre letras */
}

.divider {
width: 300px;
height: 5px;
background: white;
margin-bottom: 1rem;
}

p {
font-size: 1.2rem;
color: white;
line-height: 1.5;
}

.arrow {
font-size: 3rem;
color: white;
margin-top: 2rem;
cursor: pointer;
user-select: none;
align-self: center;
}

.right {
width: 40%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
margin-left: -10%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}

.right img {
max-width: 100%;
max-height: 100%;
object-fit: cover;
}
</style>
