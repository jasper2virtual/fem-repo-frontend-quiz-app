<template>


  <!-- Quiz question start -->

  <!-- Question number of 10 -->

  <!-- A
  B
  C
  D

  Submit answer -->

  <!-- Quiz question end -->


</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const {subjectId}=route.params
const {getQuestions}=inject('useQuizzesData')
const questions=getQuestions(subjectId)

</script>