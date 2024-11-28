<template>

  <div class="startMenu">
    <div class="startMenu__header">
      <span class=" text-app-heading-l-regular ">Welcome to the</span>
      <span class=" text-app-heading-l-bold  mt-2">Frontend Quiz!</span>
      <span class=" text-app-body-s text-app-grey-navy mt-4">Pick a subject to get started.</span>
    </div>
    <nav class="startMenu__nav">
      <router-link v-for="menuData in menuDataList" :key="menuData.subjectId" :to="menuData.to">
        <subject-banner class="startMenu__navItem" :subject-id="menuData.subjectId"
          icon-class="startMenu__navItemIcon" />
      </router-link>
    </nav>
  </div>

</template>

<script lang="ts" setup>
import { useQuizzesData } from '@data/useData'
import SubjectBanner from '@src/components/SubjectBanner.vue'
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
  @apply flex flex-col gap-6 text-app-dark-navy;
  @apply app-desktop:grid app-desktop:grid-cols-2 app-desktop:gap-x-16;
}

.startMenu__header {
  @apply flex flex-col;
}

.startMenu__nav {
  @apply flex flex-col gap-4;
}

.startMenu__navItem {
  @apply border-2 rounded-md bg-app-pure-white p-4 shadow-md;
  @apply min-h-16;
  @apply app-tablet:min-h-20;
  @apply app-desktop:min-h-24;
}


.startMenu__navItem:hover {
  @apply border-2 border-app-purple bg-app-pure-white;
}

.startMenu__navItem:hover :deep(.startMenu__navItemIcon) {
  @apply bg-app-purple *:fill-app-pure-white;
}
</style>