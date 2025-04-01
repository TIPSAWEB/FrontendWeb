<template>
  <nav class="navbar">
    <div class="nav-content">
      <img src="../assets/images/isologo.png" alt="TIPSA" class="logo" />
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

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #555;
  padding: 10px 15px;
  z-index: 3;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
  width: 95%;
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
  bottom: 0;
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
}
</style>
