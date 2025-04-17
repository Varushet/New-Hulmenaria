<template>
  <main class="inv">
    <div v-if="isStadistOpen" class="overlay" @click="openStad"></div>
    <section @click="openStad">
      <div class="stats-container">
        <p class="name">{{ namePJ }}</p>
        <p>{{ race }}</p>
        <p>Lvl {{ level }}</p>
      </div>
      <div class="stats-icons">
        <img :src="dmg" alt="Damage" class="dmg" />
        <img :src="ini" alt="Initiative" class="ini" />
        <div class="arm">
          <img src="" alt="Armor" />
          <p>{{ armor }}</p>
        </div>
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
    <transition name="slide">
      <Stadist
        v-if="isStadistOpen"
        class="stadist"
        v-model:name="namePJ"
        v-model:race="race"
        v-model:level="level"
      />
    </transition>
  </main>
</template>

<script setup>
import Equip from '../components/pj_sheet/Equip.vue';
import Inv from '../components/pj_sheet/Inv.vue';
import Stadist from '@/components/pj_sheet/Stadist.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isStadistOpen = ref(false);
const selectedEnergy = ref('mistyc');

const namePJ = ref('Select a Name');
const race = ref('Select a Race');
const level = ref(1);

const openStad = () => {
  isStadistOpen.value = !isStadistOpen.value;
};

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    isStadistOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.stats-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  cursor: pointer;
  color: wheat;
}

.stats-icons img {
  height: 2rem;
}

.name {
  font-size: 3rem;
  width: 100%;
  text-align: center;
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-25rem);
}
</style>