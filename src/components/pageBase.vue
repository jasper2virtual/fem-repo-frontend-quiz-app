<template>
  <div :class="['page', pageBackgroundClass]">
    <header class="page__header">
      <subject-banner v-if="subjectId" :subject-id="subjectId" />
      <ThemeController class="page__themeController" />
    </header>
    <main class="page__main">
      <slot />
    </main>
    <footer class="page__footer"></footer>
  </div>
</template>
<script lang='ts' setup>
import { computed, inject } from 'vue'
import SubjectBanner from './SubjectBanner.vue'
import ThemeController from './_pageBase/themeController.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const subjectId = computed(() => route.params.subjectId)
const {isDark} = inject('theme')
const pageBackgroundClass = computed(() => {
  const suffix = isDark.value ? 'dark' : 'light'
  return `bg-app-pattern-mobile-${suffix}
  app-tablet:bg-app-pattern-tablet-${suffix}
  app-desktop:bg-app-pattern-desktop-${suffix}`
})
</script>


<style lang='scss' scoped>
.page {
  @apply mx-auto flex flex-col min-h-screen p-4 bg-base-200 bg-no-repeat bg-cover;
  @apply app-tablet:p-8;
  @apply app-desktop:p-16;

}

.page__header {
  @apply flex flex-row items-center;
}


.page__themeController {
  @apply ml-auto;
}

.page__main {
  @apply my-8;
  @apply app-tablet:my-12;
  @apply app-desktop:my-16;
}
</style>