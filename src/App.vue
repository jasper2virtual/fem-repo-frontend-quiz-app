<template>
    <div>
        <PageBase>
            <RouterView />
        </PageBase>
    </div>
</template>
<script lang="ts" setup>
import { provide } from 'vue';
import PageBase from '@src/components/pageBase.vue'
import { useQuizzesData } from '@src/useData'
provide('useQuizzesData', useQuizzesData)
</script>