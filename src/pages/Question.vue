<template>

<div class="flex flex-col">
  <span></span>
  <p>{{ curQuestion?.question }}</p>
  <progress class="daisy-progress" value="" max="100"></progress>
  <ul></ul>
    <li v-for="option in curQuestion?.options" :key="option">
      <button>{{ option }}</button>
    </li>
</div>

</template>

<script lang="ts" setup>
import { computed,ref } from 'vue'
import { useRoute } from 'vue-router'
import { useQuizzesData } from '@data/useData'
const route = useRoute()
const subjectId=route.params.subjectId as string
const {getQuestions}=useQuizzesData
const questions=getQuestions(subjectId)
const curIndex=ref(0)
const curQuestion=computed(()=>questions?.[curIndex.value])
</script>