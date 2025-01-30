<script setup lang="ts">
import TopNavbar from '@/components/Layout/TopNavbar.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <div class="ml-16 flex flex-col transition-[margin] lg:ml-52">
    <TopNavbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
