<template>
  <nav class="navbar">
    <ul>
      <li>Inicio</li>
      <li>Nosotros</li>
      <li>Soluciones</li>
      <li>Proyectos</li>
      <li>Contacto</li>
      <li>
        <img src="../assets/images/icons/login.png" alt="Login" class="icon" />
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  width: 55%;
  background-color: #555; /* Más oscuro */
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: flex-start;
  z-index: 3;
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
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.navbar li:hover {
  transform: scale(1.1);
  color: white;
}

.navbar li::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.navbar li:hover::after {
  width: 100%;
}

.icon {
  font-size: 16px;
  cursor: pointer;
  color: white;
  transition: transform 0.3s ease;
  position: relative;
  bottom: 5px;
}

.icon:hover {
  transform: scale(1.1); /* Efecto hover también en el ícono */
}

</style>
