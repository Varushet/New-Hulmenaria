<style scoped>
.inv > div {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
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
</style>

<template>
  <div class="inv">
    <div>
      <p v-bind="pjName" class="name">{{ Name }} Name</p>
      <p v-bind="pjRace">{{ Race }} Race</p>
      <p v-bind="pjLvl">Lvl{{ lvl }} 15</p>
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
    <Equip />
    <Inv />
    <Stadist />
  </div>
</template>

<script setup>
import Equip from '../components/pj_sheet/Equip.vue'
import Inv from '../components/pj_sheet/Inv.vue'
import Stadist from '@/components/pj_sheet/Stadist.vue'
</script>
