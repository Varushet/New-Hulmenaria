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
div p,
select {
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
.energy select {
  background: transparent;
  border: solid rgba(245, 222, 179, 0.4) 2px;
  border-radius: 25%;
  color: wheat;
  font-size: 1.5rem;
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
.stadistSlide-enter-active,
.stadistSlide-leave-active {
  transition: 0.5s;
}
.stadistSlide-enter-from,
.stadistSlide-leave-to {
  transform: translateX(-25rem);
}

.atrSlide-enter-active,
.atrSlide-leave-active {
  transition: 0.5s;
}
.atrSlide-enter-from,
.atrSlide-leave-to {
  transform: translate(25rem);
}
</style>

<template>
  <form class="inv">
    <div class="overlay" v-if="isStadistOpen || isAtrOpen" @click="handleClose"></div>
    <section>
      <div @click="openStad">
        <p class="name">{{ namePJ }}</p>
        <p>{{ race }}</p>
        <p>Lvl {{ store.sheetData.atr.level }}</p>
      </div>
      <div @click="openAtr">
        <img :src="dmg" alt="Damage" class="dmg" />
        <img :src="ini" alt="Initiative" class="ini" />
        <div class="arm">
          <img src="" alt="Armor" />
          <p>{{ armor }}</p>
        </div>
      </div>
      <div @click="openAtr">
        <p>{{ store.sheetData.atr.deityName }}</p>
        <img src="" alt="Deity" />
        <p>Destiny {{ store.sheetData.atr.dp }}</p>
      </div>
    </section>
    <div class="energy">
      <p class="res">Res: {{ res }}</p>
      <select v-model="selectedEnergy">
        <option value="mistyc">Mistyc</option>
        <option value="inner">Inner</option>
        <option value="natural">Natural</option>
      </select>
      <p>{{ energy }}</p>
    </div>
    <Equip />
    <Inv />
    <transition name="stadistSlide">
      <Stadist 
        v-if="isStadistOpen" 
        v-model:name="namePJ" 
        v-model:race="race" 
      />
    </transition>
    <ATR v-if="isAtrOpen" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useSheetDataStore } from '@/stores/sheetDataStore'
import Equip from '../components/pj_sheet/Equip.vue'
import Inv from '../components/pj_sheet/Inv.vue'
import Stadist from '@/components/pj_sheet/Stadist.vue'
import ATR from '../components/pj_sheet/ATR.vue'

const store = useSheetDataStore()

const namePJ = ref('Select a Name')
const race = ref('Select a Race')
const armor = ref(0)
const res = ref(0)
const energy = ref(0)
const selectedEnergy = ref('mistyc')
const dmg = ref('')
const ini = ref('')

const isStadistOpen = ref(false)
const isAtrOpen = ref(false)

const openStad = () => {
  isStadistOpen.value = !isStadistOpen.value
}

const openAtr = () => {
  isAtrOpen.value = !isAtrOpen.value
}

const handleClose = () => {
  isStadistOpen.value = false
  isAtrOpen.value = false
}
</script>