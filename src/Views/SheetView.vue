<style scoped>
section > div {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
  cursor: pointer;
  color: wheat;
}
div p {
  font-size: 1.5rem;
}
div img {
  height: 2rem;
}
.name {
  width: 100%;
  font-size: 3rem;
}
.energy {
  display: flex;
  justify-content: space-evenly;
  color: wheat;
}
.energy p {
  background-color: rgba(0, 0, 0, 0.527);
  padding: 0 1rem;
  border-radius: 25%;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12%;
  z-index: 1;
}
/*Manejo de la pestaña de stats */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-25rem);
}
</style>

<template>
  <main class="inv">
    <div v-if="isStadistOpen" class="overlay" @click="openStad"></div>
    <section @click="openStad">
      <div>
        <p class="name">{{ namePJ }}</p>
        <p>{{ race }}</p>
        <p>Lvl {{ level }}</p>
      </div>
      <div>
        <img v-bind:src="dmg" alt="Damage" class="dmg" />
        <img v-bind:src="ini" alt="Initiative" class="ini" />
        <div class="arm">
          <img src="" alt="Armor" />
          <p v-bind="pjArmor">{{ armor }}</p>
        </div>
      </div>
    </section>
    <div class="energy">
      <p v-bind="pjRes" class="res">Res: {{ res }}</p>
      <select name="energy" id="energy">
        <option value="mistyc">Mistyc</option>
        <option value="inner">Inner</option>
        <option value="natural">Natural</option>
      </select>
      <p v-bind="pjEnergy">{{ energy }}asdasds</p>
    </div>
    <Equip />
    <Inv />
    <transition name="slide">
      <Stadist
        v-if="isStadistOpen"
        class="stadist"
        v-model:name="namePJ"
        v-model:race="race"
        v-model:level="level"
      />
    </transition>
    <ATR />
  </main>
</template>

<script setup>
import Equip from '../components/pj_sheet/Equip.vue'
import Inv from '../components/pj_sheet/Inv.vue'
import Stadist from '@/components/pj_sheet/Stadist.vue'
import ATR from '../components/pj_sheet/ATR.vue'

import { ref } from 'vue'

// Abrir y cerrar el panel stadist
const isStadistOpen = ref(false)

const openStad = () => {
  isStadistOpen.value = !isStadistOpen.value
}

//Importar y cambiar el nombre
const namePJ = ref('Select a Name')
const race = ref('Select a Race')
const level = ref(1)
</script>
