<template>
  <label class="controller">
    <icon-sun />
    <input type="checkbox" true-value="dark" false-value="light" v-model="currentTheme"
      class="controller__checkbox daisy-toggle daisy-theme-controller" />
    <icon-moon />
  </label>
</template>


<script lang="ts" setup>
import { inject, type Ref, watchEffect } from 'vue'
import iconSun from '@src/components/icon/icon-sun.svg.vue'
import iconMoon from '@src/components/icon/icon-moon.svg.vue'
const { theme: currentTheme } = inject('theme') as { theme: Ref<string> }
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', currentTheme.value)
})



</script>

<style lang="scss" scoped>
.controller {
  @apply flex cursor-pointer gap-2 px-1;
}

.controller__checkbox {
  @apply text-app-pure-white [--tglbg:theme('colors.app-purple')];
}
</style>