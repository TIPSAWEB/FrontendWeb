<template>
  <nav :class="['navbar', scrolled ? 'expanded' : 'collapsed']">
    <div class="nav-content">
      <!-- Solo se muestra el logo cuando el usuario ha hecho scroll -->
      <template v-if="scrolled">
        <img src="../assets/images/isologo.png" alt="TIPSA" class="logo" />
      </template>
      <ul>
        <li>
          <router-link to="/" active-class="active">Inicio</router-link>
        </li>
        <li>
          <router-link to="/nosotros" active-class="active">Nosotros</router-link>
        </li>
        <li>
          <router-link to="/soluciones" active-class="active">Soluciones</router-link>
        </li>
        <li>
          <router-link to="/proyectos" active-class="active">Proyectos</router-link>
        </li>
        <li>
          <router-link to="/contacto" active-class="active">Contacto</router-link>
        </li>
        <li>
          <router-link to="/login">
            <img src="../assets/images/icons/login.png" alt="Login" class="icon" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(142, 142, 142, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* soporte para Safari */
  z-index: 3;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.navbar.collapsed {
  width: 55vw;
  clip-path: polygon(8.7% 0, 100% 0, 100% 100%, 3% 100%);
  padding: 1rem 2%;
}

.navbar.expanded {
  width: 100%;
  clip-path: none;
  padding: 1rem 5%;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
}

.navbar ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  font-weight: 700;
}

.navbar li {
  position: relative;
  padding: 0rem 1rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.navbar li a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
  position: relative;
  padding-bottom: 5px;
}

.navbar li a:hover {
  color: white;
}

.navbar li a::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.navbar li a:hover::after {
  width: 100%;
}

.navbar li a.active {
  font-weight: bold;
  color: #009ACE;
  border-bottom: 2px solid #009ACE;
}

.icon {
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  bottom: 5px;
}

.icon:hover {
  transform: scale(1.1);
}

.logo {
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}

@media (min-width: 1440px) {
  .navbar.collapsed {
    clip-path: polygon(6% 0, 100% 0, 100% 100%, 2.5% 100%);
  }
}
</style>
