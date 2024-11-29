<template>
    <div class="banner">
        <component :is="icon" :class="[iconClass, 'banner__icon']" />
        <span :class="titleClass">{{ title }}</span>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    subjectId: string;
    iconClass?: string;
    titleClass?: string;
}>()

import { useQuizzesData } from '@data/useData'
import { computed } from 'vue';
const { getTitle, getIconComponent } = useQuizzesData
const title = computed(() => getTitle(props.subjectId))
const icon = computed(() => getIconComponent(props.subjectId))
</script>

<style lang="scss" scoped>
.banner {
    @apply flex flex-row gap-4 items-center font-medium text-app-heading-s;
}

.banner__icon {
    @apply rounded-md;
}
</style>