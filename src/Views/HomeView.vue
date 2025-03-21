<style scoped>
.roadmap {
  height: 40rem;
  background-color: aliceblue;
  margin: 5rem;
}
</style>

<template>
  <div>
    <NavComponent></NavComponent>
    <RoadmapComponent class="roadmap" @click="toggle"></RoadmapComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue'
import RoadmapComponent from '../components/RoadmapComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const toggle = () => {}
</script>
