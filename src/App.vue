<script setup lang="ts"></script>

<template>
  <nav class="bg-muted/40 flex h-16 items-center justify-between border-b px-6">
    <form class="w-full max-w-96">
      <input type="text" placeholder="Search..." class="bg-background w-full pl-8" />
    </form>
    <div class="size-8 rounded-full bg-white"></div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
