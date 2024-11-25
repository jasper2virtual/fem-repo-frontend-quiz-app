<template>

  <div class="flex flex-col gap-6">
    <div class="flex flex-col">
      <span class="text-[calc(40rem/16)] font-light">Welcome to the</span>
      <span class="text-[calc(40rem/16)] font-medium">Frontend Quiz!</span>
      <span class="text-[calc(14rem/16)] italic">Pick a subject to get started.</span>
    </div>
    <div class="flex flex-col gap-4">
      <router-link v-for="menuData in menuDataList" :key="menuData.subjectId" :to="menuData.to" class="menu-btn">
        <component :is="menuData.icon" class="menu-icon" />
        <span>{{ menuData.title }}</span>
      </router-link>
    </div>
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