<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Columna 1: Logo -->
      <div class="footer-column logo-column">
        <img src="../assets/images/Logo.png" alt="TIPSA" class="footer-logo" />
      </div>

      <!-- Columna 2: Contenido -->
      <div class="footer-column content-column">
        <h3 class="footer-title">Contenido</h3>
        <ul class="footer-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Soluciones</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

      <!-- Columna 3: Contacto (ahora más ancha) -->
      <div class="footer-column contact-column">
        <h3 class="footer-title">Contacto</h3>
        <ul class="footer-contact">
          <li>
            <img src="../assets/images/icons/dirección.png" alt="Ubicación" class="icon" />
            <span>
              Calle Luis Alberto M. Ruiz #503 <br />
              Colonia Peñuelas 20340 Aguascalientes, Ags. <br />
              R.F.C. TTI140101KM1
            </span>
          </li>
          <li>
            <img src="../assets/images/icons/teléfonos.png" alt="Teléfono" class="icon" />
            <span>
              449 929 3814 <br />
              449 929 3834
            </span>
          </li>
          <li>
            <img src="../assets/images/icons/email.png" alt="Correo" class="icon" />
            <span>info@tipsatransformaciones.com</span>
          </li>
        </ul>
      </div>

      <!-- Columna 4: Redes Sociales -->
      <div class="footer-column">
        <h3 class="footer-title">Redes Sociales</h3>
        <div class="footer-socials">
          <a href="https://www.facebook.com" target="_blank">
            <img src="../assets/images/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img src="../assets/images/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank">
            <img src="../assets/images/icons/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #00A5DD;
  color: white;
  padding: 3rem 5%;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

/* Ajustamos las columnas */
.footer-column {
  flex: 1;
  min-width: 200px;
  margin-bottom: 1.5rem;
}

/* Expandimos la columna de contacto */
.contact-column {
  flex: 2; /* Ocupa más espacio que las demás */
}

/* Ajuste del logo */
.logo-column {
  display: flex;
  align-items: center;
}

.footer-logo {
  width: 180px; /* Más grande */
}

/* Títulos */
.footer-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

/* Links en Contenido */
.footer-links {
  padding: 0;
}

.footer-links li {
  list-style: none;
  margin-bottom: 8px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 0.7;
}

/* Contacto mejor alineado */
.footer-contact {
  padding: 0;
}

.footer-contact li {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.footer-contact .icon {
  width: 22px; /* Ligeramente más grande */
}

/* Redes Sociales */
.footer-socials a {
  margin-right: 15px;
}

.footer-socials img {
  width: 30px;
  transition: transform 0.3s;
}

.footer-socials img:hover {
  transform: scale(1.1);
}
</style>
