<style scoped>
nav {
  background: transparent;
  width: 100%;
  height: 25rem;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
}
nav [class*='menu'] {
  background-image: url(@/assets/img/pergaminoViejo.png);
  background-size: 100% 100%;
  height: 6rem;
  width: 16rem;
  margin: 0.6rem 10%;
  transform: translateX(-50%); /*quitar esta linea en responsive */
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  transition: 1s;
}
nav .menu-izq:hover {
  transform: translateX(-3.5rem);
}
nav .menu-dch:hover {
  transform: translateX(-12.5rem);
}
nav .menu-izq h2 {
  margin-left: 2rem;
  opacity: 0;
  transition: 1s;
}
nav .menu-dch h2 {
  word-break: break-word;
  margin-right: 2.5rem;
  opacity: 0;
  transition: 1s;
}
nav [class*='menu']:hover h2 {
  opacity: 1;
}
nav img {
  width: 5rem;
}
nav .menu-izq img {
  right: 1rem;
}
nav .menu-dch img {
  left: 1rem;
}
</style>

<template>
  <nav>
    <div class="menu-izq">
      <h2>PJ Sheet</h2>
      <img src="@/assets/img/ficha.png" alt="Character sheet" />
    </div>
    <div class="menu-izq">
      <h2>Talents</h2>
      <img src="@/assets/img/logo.png" alt="Talents icon" />
    </div>
    <div class="menu-izq">
      <h2>Loot Table</h2>
      <img src="@/assets/img/cofre.png" alt="Loot icon" />
    </div>
    <div class="menu-dch" :style="{ right: menu }">
      <img src="@/assets/img/mapa.png" alt="Map icon" />
      <h2>Map</h2>
    </div>
    <div class="menu-dch">
      <img src="@/assets/img/relojDeArena.png" alt="Hourglass icon" />
      <h2>Hour glass</h2>
    </div>
    <div class="menu-dch">
      <img src="@/assets/img/enciclopedia.png" alt="Encyclopedia icon" />
      <h2>Encyclo pedia</h2>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
