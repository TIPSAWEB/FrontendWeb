<template>
  <section class="hero">
    <div class="trapezoid" ref="trapezoid">
      <div class="hero-content">
        <div class="welcome-box">
          <p class="welcome">Bienvenido a</p>
          <img src="../assets/images/Isologo.png" alt="TIPSA" class="logo" />
        </div>
        <h1 class="slogan">
          CALIDAD <br />
          INNOVACIÓN <br />
          PRECISIÓN
        </h1>
        <div class="social-icons desktop">
          <a href="https://www.facebook.com" target="_blank" class="social-icon" aria-label="Facebook">
            <img src="../assets/images/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" class="social-icon" aria-label="LinkedIn">
            <img src="../assets/images/icons/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" class="social-icon" aria-label="WhatsApp">
            <img src="../assets/images/icons/whatsapp.png" alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>

    <video autoplay loop muted class="background-video" ref="backgroundVideo">
      <source src="../assets/videos/TIPSA60.mp4" type="video/mp4" />
    </video>

    <!-- Trapezoide inferior SOLO para móvil -->
    <div class="social-trapezoid mobile">
      <div class="social-icons">
        <a href="https://www.facebook.com" target="_blank" class="social-icon" aria-label="Facebook">
          <img src="../assets/images/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="social-icon" aria-label="LinkedIn">
          <img src="../assets/images/icons/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" class="social-icon" aria-label="WhatsApp">
          <img src="../assets/images/icons/whatsapp.png" alt="whatsapp" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const trapezoid = ref(null);
const backgroundVideo = ref(null);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const triggerPoint = 200;
  const isMobile = window.innerWidth < 768;

  if (!isMobile && trapezoid.value) {
    trapezoid.value.style.transform = `translateX(${-scrollY}px)`;
    trapezoid.value.style.opacity = Math.max(1 - scrollY / triggerPoint, 0);
  }

  if (!isMobile && backgroundVideo.value) {
    backgroundVideo.value.style.transform = `scale(${Math.max(1 - scrollY / 1500, 0.8)})`;
    backgroundVideo.value.style.opacity = Math.max(1 - scrollY / 600, 0);
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.trapezoid {
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100%;
  background-color: #00A5DD99;
  clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  z-index: 3;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.hero-content {
  align-items: center;
  justify-content: flex-start;
}

.welcome-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -60px;
  margin-top: 50px;
}

.welcome {
  background: white;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 25px;
  display: inline-block;
  text-align: center;
  margin-right: -20px;
  margin-top: 40px;
}

.logo {
  width: 200px;
}

.slogan {
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-size: 5rem;
  line-height: 1;
  letter-spacing: 0.02em;
  margin-bottom: 150px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.social-icon img {
  width: 30px;
  height: 30px;
}

@media (max-width: 768px) {

  .social-trapezoid.mobile {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 75%;
    height: 80px;
    background-color: #00A5DD99;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    justify-content: center;
    align-items: center;
    z-index: 4;
  }

  .trapezoid {
    height: 80vh;
    width: 70%;
    clip-path: polygon(0 0, 100% 0, 25% 100%, 0 100%);
    padding: 2rem 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute !important;
  }

  .hero-content {
    margin-top: 15px;
  }

  .welcome-box {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .logo {
    width: 110px;
  }

  .slogan {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  .background-video {
    object-fit: cover;
    position: absolute !important;
  }

  .social-icons.desktop {
    display: none;
  }
}
</style>
