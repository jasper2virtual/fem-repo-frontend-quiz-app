<template>

  <div class="startMenu">
    <div class="startMenu__header">
      <span class=" text-app-heading-l-regular font-light">Welcome to the</span>
      <span class=" text-app-heading-l-bold font-medium">Frontend Quiz!</span>
      <span class=" text-app-body-s italic">Pick a subject to get started.</span>
    </div>
    <nav class="startMenu__nav">
      <router-link v-for="menuData in menuDataList" :key="menuData.subjectId" :to="menuData.to"
        class="startMenu__navItem">
        <component :is="menuData.icon" class="startMenu__navItemIcon" />
        <span>{{ menuData.title }}</span>
      </router-link>
    </nav>
  </div>

</template>

<script lang="ts" setup>
import { useQuizzesData } from '@data/useData'
const { getAllSubjectId, getTitle, getIconComponent } = useQuizzesData

const allSubjectId = getAllSubjectId()
const menuDataList = allSubjectId.map((subjectId) => {
  return {
    subjectId,
    to: `/question/${subjectId}`,
    title: getTitle(subjectId),
    icon: getIconComponent(subjectId)
  }
})

</script>

<style lang="scss" scoped>
.startMenu {
  @apply flex flex-col gap-6;
}

.startMenu__header {
  @apply flex flex-col;
}

.startMenu__nav {
  @apply flex flex-col gap-4;
}

.startMenu__navItem {
  @apply border-2 daisy-btn flex flex-row gap-4 justify-start bg-white p-4 h-auto shadow-md text-app-heading-s;
}

.startMenu__navItemIcon {
  @apply rounded-md font-medium;
}

.startMenu__navItem:hover {
  @apply border-2 border-app-purple bg-white;
}

.startMenu__navItem:hover>.startMenu__navItemIcon {
  @apply bg-app-purple *:fill-white;
}
</style>