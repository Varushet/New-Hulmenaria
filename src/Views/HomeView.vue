<style scoped>
.roadmapClass {
  position: absolute;
  background-color: aqua;
}
</style>

<template>
  <div>
    <NavComponent></NavComponent>
    <RoadmapComponent ref="roadmapRef" :class="{ roadmapClass: roadmapControl }"></RoadmapComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavComponent from '../components/NavComponent.vue'
import RoadmapComponent from '../components/RoadmapComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const roadmapRef = ref(null)
const roadmapControl = ref(false)

onMounted(() => {})
const roadmapUp = () => {
  roadmapRef.value?.roadmapOpen()

  roadmapControl.value = !roadmapControl.value
}
</script>
