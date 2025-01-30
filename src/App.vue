<script setup lang="ts"></script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <form class="w-full max-w-96">
      <input type="text" placeholder="Search..." class="w-full pl-8 bg-background" />
    </form>
    <div class="size-8 rounded-full bg-white"></div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
