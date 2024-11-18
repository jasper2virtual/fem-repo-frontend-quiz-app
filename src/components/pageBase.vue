<template>
  <div class=" mx-auto flex flex-col min-h-screen p-4  
  bg-light-grey
  bg-pattern-mobile-light
  bg-no-repeat bg-cover 
  ">
    <header class="flex flex-row ">
      <div class="ml-auto">
        <ThemeController />
      </div>
    </header>
    <main>
       <slot />
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
import ThemeController from './pageBase/themeController.vue'; 
</script>