<template>
  <div class="projects">
      <img src="../assets/images/backgrounds/background-installation.jpg" class="background-img" />
      <div class="top-banners">
      <div class="banner">PROYECTOS</div>
      </div>
        <h2 class="title-blue">Explora nuestro trabajo</h2>
      <p class="text">
        En TIPSA retamos  constantemente el estatus quo, y vemos cada proyecto,
        como la oportunidad de generar valor para cada uno de nuestros clientes.
      </p>
  </div>
  </template>
  
  <style scoped>
  @import "../assets/styles/index.scss";

  .projects {
  position: relative;
  background-color: white;
  color: black;
  text-align: left;
  overflow: hidden;
  width: 100%;
  opacity: 90%;
  padding-bottom: 10%;
  }
  
  .top-banners {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 7rem;
  position: relative;
  z-index: 1;
  }
  
  .banner {
  opacity: 80%;
  background: #8e8e8e;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  padding: 1.5rem 4rem;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  letter-spacing: 0.3em;
  }


  
  .background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
    z-index: 0;
  }
  </style>
  