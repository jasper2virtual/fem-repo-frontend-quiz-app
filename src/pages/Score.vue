<template>

  <div class="score">

    <div class="score__header">

      <span class=" text-app-heading-l-regular">Quiz completed</span>
      <span class=" text-app-heading-l-bold">You scored...</span>
    </div>
    <div class="score__body">
    <div class="score__display">
      <subject-banner :subject-id="subjectId" />
      <span class="score__score">{{ score }}</span>
      <span class="score__outOf">out of {{ outOf }}</span>
    </div>
    <router-link class="app-submit-btn" :to="{ name: 'startMenu' }">Play Again</router-link>
  </div>
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
  @apply flex flex-col gap-4;
  @apply app-desktop:grid app-desktop:grid-cols-2 app-desktop:gap-x-24;
}

.score__header {
  @apply flex flex-col gap-4;
}

.score__body {
  @apply flex flex-col gap-4;
}

.score__display {
  @apply bg-base-100 rounded-md p-8 flex flex-col gap-8 items-center;
}

.score__score {
  @apply text-app-display;
}

.score__outOf {
  @apply text-app-body-m text-neutral-content;
}
</style>