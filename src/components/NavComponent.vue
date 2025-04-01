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
  background-image: url(/src/assets/img/parchmentOld.png);
  background-size: 100% 100%;
  height: 6rem;
  width: 16rem;
  translate: -40%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  transition: 1s;
  position: relative;
}
nav [class*='menu']::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  pointer-events: none; /* Evita que el pseudo-elemento interfiera con clics */
}
/* nav .menu-left {
  box-shadow: -0.5rem -0.5rem rem -1rem rgb(26, 26, 26) inset;
  border-radius: 0.2rem;
} */
nav .menu-left:hover {
  transform: translateX(6rem) !important;
}
nav .menu-right:hover {
  transform: translateX(-6rem) !important;
}
nav .menu-left h2 {
  margin-left: 2rem;
  opacity: 0;
  transition: 1s;
}
nav .menu-right h2 {
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
nav .menu-right img {
  margin-left: 0.5rem;
}
nav .menu-left img {
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
    <RouterLink to="/Sheet" class="menu-left" :style="menuleft">
      <h2>PJ Sheet</h2>
      <img src="@/assets/img/sheet.png" alt="Character sheet" />
    </RouterLink>
    <div class="menu-left" :style="menuleft">
      <h2>Talents</h2>
      <img src="@/assets/img/logo.png" alt="Talents icon" />
    </div>
    <div class="menu-left" :style="menuleft">
      <h2>Loot Table</h2>
      <img src="@/assets/img/chest.png" alt="Loot icon" />
    </div>
    <div class="menu-right" :style="menuright">
      <img src="@/assets/img/map.png" alt="Map icon" />
      <h2>Map</h2>
    </div>
    <div class="menu-right" :style="menuright">
      <img src="@/assets/img/hourglass.png" alt="Hourglass icon" />
      <h2>Hour glass</h2>
    </div>
    <div class="menu-right" :style="menuright">
      <img src="@/assets/img/encyclop.png" alt="Encyclopedia icon" />
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

const menuleft = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(-60%)' : '',
}))
const menuright = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(60%)' : '',
}))
</script>
