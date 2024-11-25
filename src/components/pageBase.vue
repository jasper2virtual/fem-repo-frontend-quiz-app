<template>
  <div class=" mx-auto flex flex-col min-h-screen p-4  
  bg-app-light-grey
   bg-app-pattern-mobile-light
  bg-no-repeat bg-cover 
  ">
    <header class="flex flex-row items-center ">
      <div v-if="showSubjectHeader" class="flex flex-row gap-4 items-center">
        <component :is="iconComponent" />
        <span>{{ title }}</span>
      </div>
      <div class="ml-auto">
        <ThemeController />
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
<script lang='ts' setup>
import { ref, watchEffect, shallowRef ,type Component} from 'vue'
import ThemeController from './_pageBase/themeController.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { useQuizzesData} from '@data/useData'
const { getIconComponent, getTitle } = useQuizzesData
const showSubjectHeader = ref(false)
const iconComponent = shallowRef<Component | null>(null)
const title = ref<string|undefined>('')

watchEffect(() => {
  const  subjectId  = route.params.subjectId as string
  showSubjectHeader.value = !!subjectId
  iconComponent.value = getIconComponent(subjectId)
  title.value = getTitle(subjectId)
})


</script>