<style scoped>
nav {
  width: 100%;
  height: 25rem;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem 6rem;
  overflow: hidden;
}
nav [class*='menu'] {
  background-image: url(@/assets/img/pergaminoViejo.png);
  background-size: 100% 100%;
  height: 6rem;
  width: 16rem;
  translate: -40%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  transition: 1s;
}
nav .menu-izq:hover {
  transform: translateX(6rem) !important;
}
nav .menu-dch:hover {
  transform: translateX(-6rem) !important;
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
nav .menu-dch img {
  margin-left: 0.5rem;
}
nav .menu-izq img {
  margin-right: 0.5rem;
}
@media screen and (min-width: 400px) {
  nav [class*='menu'] {
    translate: 0%;
  }
}
</style>

<template>
  <nav>
    <div class="menu-izq" :style="menuIzq">
      <RouterLink to="/Sheet"><h2>PJ Sheet</h2></RouterLink>
      <img src="@/assets/img/ficha.png" alt="Character sheet" />
    </div>
    <div class="menu-izq" :style="menuIzq">
      <h2>Talents</h2>
      <img src="@/assets/img/logo.png" alt="Talents icon" />
    </div>
    <div class="menu-izq" :style="menuIzq">
      <h2>Loot Table</h2>
      <img src="@/assets/img/cofre.png" alt="Loot icon" />
    </div>
    <div class="menu-dch" :style="menuDch">
      <img src="@/assets/img/mapa.png" alt="Map icon" />
      <h2>Map</h2>
    </div>
    <div class="menu-dch" :style="menuDch">
      <img src="@/assets/img/relojDeArena.png" alt="Hourglass icon" />
      <h2>Hour glass</h2>
    </div>
    <div class="menu-dch" :style="menuDch">
      <img src="@/assets/img/enciclopedia.png" alt="Encyclopedia icon" />
      <h2>Encyclo pedia</h2>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  isRoadmapOpen: {
    type: Boolean,
    required: true,
  },
})

const menuIzq = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(-60%)' : '',
}))
const menuDch = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(60%)' : '',
}))
</script>
