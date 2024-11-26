<template>

  <div class="startMenu">
    <div class="startMenu__header">
      <span class="text-[calc(40rem/16)] font-light">Welcome to the</span>
      <span class="text-[calc(40rem/16)] font-medium">Frontend Quiz!</span>
      <span class="text-[calc(14rem/16)] italic">Pick a subject to get started.</span>
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
  @apply border-2 daisy-btn flex flex-row gap-4 justify-start bg-white p-4 h-auto shadow-md;
}

.startMenu__navItemIcon {
  @apply rounded-md;
}

.startMenu__navItem:hover {
  @apply border-2 border-app-purple bg-white;
}

.startMenu__navItem:hover>.startMenu__navItemIcon {
  @apply bg-app-purple *:fill-white;
}
</style>