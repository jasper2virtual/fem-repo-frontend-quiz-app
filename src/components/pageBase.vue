<template>
  <div class=" mx-auto flex flex-col min-h-screen p-4  
  bg-app-light-grey
   bg-app-pattern-mobile-light
  bg-no-repeat bg-cover 
  ">
    <header class="flex flex-row ">
      <div v-if="showSubjectHeader">
        <iconComponent />
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
import { inject,computed } from 'vue';
import ThemeController from './_pageBase/themeController.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const subjectId=computed(()=>route.params.subjectId)
const { getIconComponent, getTitle } = inject('useQuizzesData');
const showSubjectHeader = subjectId ? true : false;
const iconComponent = getIconComponent(subjectId);
const title = getTitle(subjectId);

</script>