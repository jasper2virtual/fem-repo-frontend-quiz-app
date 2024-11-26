<template>
  <div class="page">
    <header class="page__header">
      <div v-if="showSubjectHeader" class="page__logo">
        <component :is="iconComponent" />
        <span>{{ title }}</span>
      </div>
      <div class="page__themeController">
        <ThemeController />
      </div>
    </header>
    <main class="page__main">
      <slot />
    </main>
    <footer class="page__footer"></footer>
  </div>
</template>
<script lang='ts' setup>
import { ref, watchEffect, shallowRef, type Component } from 'vue'
import ThemeController from './_pageBase/themeController.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { useQuizzesData } from '@data/useData'
const { getIconComponent, getTitle } = useQuizzesData
const showSubjectHeader = ref(false)
const iconComponent = shallowRef<Component | null>(null)
const title = ref<string | undefined>('')

watchEffect(() => {
  const subjectId = route.params.subjectId as string
  showSubjectHeader.value = !!subjectId
  iconComponent.value = getIconComponent(subjectId)
  title.value = getTitle(subjectId)
})


</script>


<style lang='scss' scoped>
.page {
  @apply mx-auto flex flex-col min-h-screen p-4 bg-app-light-grey bg-app-pattern-mobile-light bg-no-repeat bg-cover;
}

.page__header {
  @apply flex flex-row items-center;
}

.page__logo {
  @apply flex flex-row gap-4 items-center;
}

.page__themeController {
  @apply ml-auto;
}

.page__main {
  @apply my-8;
}
</style>