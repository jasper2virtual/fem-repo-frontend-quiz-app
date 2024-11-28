<template>

  <div class="score">

    <div class="score__header">

      <span class=" text-app-heading-l-regular">Quiz completed</span>
      <span class=" text-app-heading-l-bold">You scored...</span>
    </div>
    <div class="score__display">
      <subject-banner :subject-id="subjectId" />
      <span class="score__score">{{ score }}</span>
      <span class="score__outOf">out of {{ outOf }}</span>
    </div>
    <router-link class="app-submit-btn" :to="{ name: 'startMenu' }">Play Again</router-link>
  </div>

</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SubjectBanner from '@src/components/SubjectBanner.vue'
const route = useRoute()
const subjectId = computed(() => route.params.subjectId as string)
const score = computed(() => Number(route.params.score))
const outOf = computed(() => route.params.outOf)


</script>

<style lang="scss" scoped>
.score {
  @apply text-app-dark-navy flex flex-col gap-4;
}

.score__header {
  @apply flex flex-col gap-4;
}

.score__display {
  @apply bg-app-pure-white rounded-md p-8 flex flex-col gap-8 items-center;
}

.score__score {
  @apply text-app-display;
}

.score__outOf {
  @apply text-app-body-m;
}
</style>