<template>

  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4">
      <span class="text-[calc(40rem/16)] font-light">Welcome to the</span>
      <span class="text-[calc(40rem/16)] font-medium">Frontend Quiz!</span>
      <span class="text-[calc(14rem/16)] italic">Pick a subject to get started.</span>
    </div>
    <div class="flex flex-col gap-4">
      <router-link to="/questions/html" class="menu-btn">
        <img src="/src/assets/images/icon-html.svg" class="bg-[#fff1e9] menu-icon" alt="HTML icon" />
        <span>HTML</span></router-link>
      <router-link to="/questions/css" class="menu-btn">
        <img src="/src/assets/images/icon-css.svg" class="bg-[#E0FDEF] menu-icon" alt="CSS icon" />
        <span>CSS</span></router-link>
      <router-link to="/questions/javascript" class="menu-btn">
        <img src="/src/assets/images/icon-js.svg" class="bg-[#EBF0FF] menu-icon" alt="JavaScript icon" />
        <span>JavaScript</span></router-link>
      <router-link to="/questions/accessibility" class="menu-btn">
        <img src="/src/assets/images/icon-accessibility.svg" class="bg-[#F6E7FF] menu-icon" alt="Accessibility icon" />
        <span>Accessibility</span></router-link>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.menu-btn {
  @apply daisy-btn flex flex-row gap-4 justify-start bg-white p-4 h-auto;

  &>.menu-icon {
    @apply rounded-md;
  }
}
</style>