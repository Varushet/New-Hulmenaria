<style scoped>
section > div {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  cursor: pointer;
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
.stadist {
  transform: translateX(-25rem);
  transition: 0.5s;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>

<template>
  <main class="inv">
    <div v-if="isStadistOpen" class="overlay" @click="openStad"></div>
    <section @click="openStad">
      <div>
        <p class="name">{{ Name }}</p>
        <p>{{ Race }}</p>
        <p>Lvl{{ lvl }}</p>
      </div>
      <div>
        <img v-bind:src="dmg" alt="Damage" class="dmg" />
        <img v-bind:src="ini" alt="Initiative" class="ini" />
        <div class="arm">
          <img src="" alt="Armor" />
          <p v-bind="pjArmor">{{ armor }}</p>
        </div>
      </div>
      <div>
        <p v-bind="pjRes" class="res">{{ res }}</p>
        <select name="energy" id="energy">
          <option value="mistyc">Mistyc</option>
          <option value="inner">Inner</option>
          <option value="natural">Natural</option>
        </select>
        <p v-bind="pjEnergy">{{ energy }}</p>
      </div>
    </section>
    <Equip />
    <Inv />
    <Stadist class="stadist" :style="stadist" />
  </main>
</template>

<script setup>
import Equip from '../components/pj_sheet/Equip.vue'
import Inv from '../components/pj_sheet/Inv.vue'
import Stadist from '@/components/pj_sheet/Stadist.vue'

import { ref, computed } from 'vue'

const isStadistOpen = ref(false)

const stadist = computed(() => ({
  transform: `translateX(${isStadistOpen.value ? '0' : '-25rem'})`,
}))

const openStad = () => {
  isStadistOpen.value = !isStadistOpen.value
}
</script>
