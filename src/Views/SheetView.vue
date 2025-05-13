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
div img,
div p {
  text-shadow:
    0px 0px 10px black,
    0px 0px 10px black,
    0px 0px 10px black,
    0px 0px 10px black;
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
  cursor: pointer;
}
/*Manejo de la pestaña de stats */
.stadistSlide-enter-active,
.stadistSlide-leave-active {
  transition: transform 0.5s;
}
.stadistSlide-enter-from,
.stadistSlide-leave-to {
  transform: translateX(-25rem);
}

.atrSlide-enter-active,
.atrSlide-leave-active {
  transition: transform 0.5s;
}
.atrSlide-enter-from,
.atrSlide-leave-to {
  transform: translate(25rem);
}
</style>

<template>
  <main class="inv">
    <div class="overlay" v-if="isStadistOpen || isAtrOpen" @click="handleClose"></div>
    <section>
      <div @click="openStad">
        <p class="name">{{ namePJ }}</p>
        <p>{{ race }}</p>
        <p>Lvl {{ level }}</p>
      </div>
      <div @click="openAtr">
        <img v-bind:src="dmg" alt="Damage" class="dmg" />
        <img v-bind:src="ini" alt="Initiative" class="ini" />
        <div class="arm">
          <img src="" alt="Armor" />
          <p v-bind="pjArmor">{{ armor }}</p>
        </div>
      </div>
      <div @click="openAtr">
        <p>{{ deityName }}</p>
        <img src="" alt="Deity" />
        <p>Destiny {{ dp }}</p>
      </div>
    </section>
    <div class="energy">
      <p v-bind="pjRes" class="res">Res: {{ res }}</p>
      <select name="energy" id="energy">
        <option value="mistyc">Mistyc</option>
        <option value="inner">Inner</option>
        <option value="natural">Natural</option>
      </select>
      <p v-bind="pjEnergy">{{ energy }}</p>
    </div>
    <Equip />
    <Inv />
    <transition name="stadistSlide">
      <Stadist class="stadist" v-if="isStadistOpen" v-model:name="namePJ" v-model:race="race" />
    </transition>
    <transition name="atrSlide">
      <ATR
        class="atr"
        v-if="isAtrOpen"
        v-model:deityName="deityName"
        v-model:level="level"
        v-model:dp="dp"
      />
    </transition>
  </main>
</template>

<script setup>
import Equip from '../components/pj_sheet/Equip.vue'
import Inv from '../components/pj_sheet/Inv.vue'
import Stadist from '@/components/pj_sheet/Stadist.vue'
import ATR from '../components/pj_sheet/ATR.vue'

import { ref } from 'vue'

//Importar y cambiar el nombre
//Stadist
const namePJ = ref('Select a Name')
const race = ref('Select a Race')
const level = ref(1)
//ATR
const deityName = ref('Atheist')
const dp = ref(0)

// Abrir y cerrar el panel stadist
const isStadistOpen = ref(false)

const openStad = () => {
  isStadistOpen.value = !isStadistOpen.value
}

//abrir y cerrar atr panel
const isAtrOpen = ref(false)

const openAtr = () => {
  isAtrOpen.value = !isAtrOpen.value
}

//cerrar los paneles
const handleClose = () => {
  if (isStadistOpen.value) {
    isStadistOpen.value = false
  }
  if (isAtrOpen.value) {
    isAtrOpen.value = false
  }
}
</script>
