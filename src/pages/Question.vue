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

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const subjectId=route.params.subjectId
console.log(subjectId)

</script>