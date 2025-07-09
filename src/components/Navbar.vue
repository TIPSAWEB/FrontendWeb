<template>
  <nav :class="['navbar', navbarClass, isMobileMenuOpen ? 'mobile-open' : '']">
    <div class="nav-content">
      <img v-if="scrolled || !isHome" src="../assets/images/isologo.png" alt="TIPSA" class="logo" />

      <!-- Menú desktop -->
      <ul class="nav-links" v-if="!isMobile">
        <li><router-link to="/" active-class="active">Inicio</router-link></li>
        <li><router-link to="/nosotros" active-class="active">Nosotros</router-link></li>
        <li><router-link to="/soluciones" active-class="active">Soluciones</router-link></li>
        <li><router-link to="/proyectos" active-class="active">Proyectos</router-link></li>
        <li><router-link to="/contacto" active-class="active">Contacto</router-link></li>
        <li><router-link to="/login">
          <img src="../assets/images/icons/login.png" alt="Login" class="icon" />
        </router-link></li>
      </ul>

      <!-- Menú hamburguesa móvil alineado a la derecha -->
      <div v-if="isMobile" class="mobile-header">
        <button class="burger" @click="toggleMobileMenu">☰</button>
      </div>
    </div>

    <!-- Menú móvil desplegable -->
    <ul class="mobile-menu" v-if="isMobile && isMobileMenuOpen">
      <!-- Botón de cierre "X" -->
      <li class="close-button">
        <button @click="closeMobileMenu">✕</button>
      </li>
      <li><router-link to="/" active-class="active" @click="closeMobileMenu">Inicio</router-link></li>
      <li><router-link to="/nosotros" active-class="active" @click="closeMobileMenu">Nosotros</router-link></li>
      <li><router-link to="/soluciones" active-class="active" @click="closeMobileMenu">Soluciones</router-link></li>
      <li><router-link to="/proyectos" active-class="active" @click="closeMobileMenu">Proyectos</router-link></li>
      <li><router-link to="/contacto" active-class="active" @click="closeMobileMenu">Contacto</router-link></li>
      <li><router-link to="/login" @click="closeMobileMenu">
        <img src="../assets/images/icons/login.png" alt="Login" class="icon" />
      </router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const scrolled = ref(false);
const route = useRoute();
const isHome = computed(() => route.path === '/');
const isMobileMenuOpen = ref(false);
const isMobile = ref(window.innerWidth < 768);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const navbarClass = computed(() => {
  if (isHome.value && !scrolled.value) return 'collapsed';
  return 'expanded';
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleScroll();
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(142, 142, 142, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.navbar.collapsed {
  width: 53.2vw;
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 3.5% 100%);
  padding: 1rem 2%;
}

.navbar.expanded {
  width: 100%;
  clip-path: none;
  padding: 1rem 5%;
}

.navbar.mobile-open {
  height: 100vh;
  background-color: rgba(27, 31, 35, 0.94);
  backdrop-filter: blur(8px);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
}

.logo {
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.nav-links {
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

/* Hamburguesa */
.burger {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding-right: 1rem;
}

.mobile-header {
  margin-left: auto;
}

/* Menú móvil */
.mobile-menu {
  display: none;
  flex-direction: column;
  list-style: none;
  padding: 2rem 1.5rem;
  background: rgba(27, 31, 35, 0.94);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  right: 0;
  width: 55%;
  height: 100vh;
  z-index: 5;
  text-align: center;
  animation: slideIn 0.3s ease forwards;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.4);
  overflow-y: auto;
}

.navbar.mobile-open .mobile-menu {
  display: flex;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

/* Cierre */
.close-button {
  display: flex;
  justify-content: flex-end;
}

.close-button button {
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: transform 0.2s ease;
}

.close-button button:hover {
  transform: scale(1.2);
}

.mobile-menu li {
  margin: 1.2rem 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.mobile-menu li a {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
}

.mobile-menu li a:hover {
  color: #00A5DD;
}

.mobile-menu li a.active {
  color: #00A5DD;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }

  .logo {
    width: 80px;
  }

  .navbar.collapsed {
    clip-path: none;
    width: 100%;
    padding: 1rem 2rem;
  }

  .mobile-header {
    margin-left: auto;
  }
}

/* Resoluciones grandes */
@media (min-width: 1440px) and (max-width: 1699px) {
  .navbar.collapsed {
    clip-path: polygon(7.5% 0, 100% 0, 100% 100%, 3.3% 100%);
  }
}

@media (min-width: 1700px) {
  .navbar.collapsed {
    clip-path: polygon(7.5% 0, 100% 0, 100% 100%, 3.8% 100%);
  }
}
</style>
