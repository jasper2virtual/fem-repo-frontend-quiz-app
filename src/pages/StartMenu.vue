<template>

  <div class="flex flex-col gap-6">
    <div class="flex flex-col">
      <span class="text-[calc(40rem/16)] font-light">Welcome to the</span>
      <span class="text-[calc(40rem/16)] font-medium">Frontend Quiz!</span>
      <span class="text-[calc(14rem/16)] italic">Pick a subject to get started.</span>
    </div>
    <div class="flex flex-col gap-4">

      <router-link v-for="menuData in menuDataList" :key="menuData.subjectId" :to="menuData.to" class="menu-btn">
        <component :is="icon" class="menu-icon" />
        <span>{{ menuData.title }}</span>
      </router-link>

    </div>
  </div>

</template>

<script setup>
import { defineAsyncComponent } from 'vue'
// import iconHtml from '/src/components/icon/icon-html.svg.vue'
// import iconCss from '/src/components/icon/icon-css.svg.vue'
// import iconJs from '/src/components/icon/icon-js.svg.vue'
// import iconAccessibility from '/src/components/icon/icon-accessibility.svg.vue'
import { useQuizzesData } from '/src/useData.js'
const { getAllSubjectId, getTitle, getIcon } = useQuizzesData
const allSubjectId = getAllSubjectId()
const menuDataList = allSubjectId.map(subjectId => (
  {
    subjectId,
    to: `/question/${subjectId}`,
    title: getTitle(subjectId),
    icon: defineAsyncComponent(() =>{
      const path=`/src/components/icon/${getIcon(subjectId)}.svg.vue`
      console.log(path)
      return import(path)
    })
  }
))

console.log(menuDataList)

</script>

<style lang="scss" scoped>
.menu-btn {
  @apply border-2 daisy-btn flex flex-row gap-4 justify-start bg-white p-4 h-auto shadow-md;

  &>.menu-icon {
    @apply rounded-md;
  }
}

.menu-btn:hover {
  @apply border-2 border-app-purple bg-white;

  &>.menu-icon {
    @apply bg-app-purple *:fill-white;
  }
}
</style>