<script setup lang="ts"></script>

<template>
  <aside
    class="bg-muted/40 fixed flex h-screen w-16 flex-col gap-2 border-r transition-[width] lg:w-52"
  >
    <div class="flex h-16 shrink-0 items-center justify-between gap-1 border-b px-2 lg:px-4">
      <button variant="outline" size="icon" class="h-8 w-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </button>

      <button variant="outline" size="icon" class="h-8 w-8">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </button>
    </div>

    <nav class="relative flex h-full flex-col justify-between gap-2">
      <div>
        <RouterLink
          to="/"
          class="hover:text-primary text-muted-foreground mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 transition-colors lg:justify-normal"
        >
          <iconify-icon icon="lucide:house"></iconify-icon>
          <span class="hidden text-nowrap lg:block">Dashboard</span>
        </RouterLink>
        <RouterLink
          to="/projects"
          class="hover:text-primary text-muted-foreground mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 transition-colors lg:justify-normal"
        >
          <iconify-icon icon="lucide:building-2"></iconify-icon>
          <span class="hidden text-nowrap lg:block">Projects</span>
        </RouterLink>
        <RouterLink
          to="/tasks"
          class="hover:text-primary text-muted-foreground mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 transition-colors lg:justify-normal"
        >
          <iconify-icon icon="lucide:badge-check"></iconify-icon>
          <span class="hidden text-nowrap lg:block">My Tasks</span>
        </RouterLink>
      </div>

      <div class="bg-background border-y py-3 text-center">
        <RouterLink
          to="/profile"
          class="hover:text-primary text-muted-foreground mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 transition-colors lg:justify-normal"
        >
          <iconify-icon icon="lucide:user"></iconify-icon>
          <span class="hidden text-nowrap lg:block">Profile</span>
        </RouterLink>
        <RouterLink
          to="/settings"
          class="hover:text-primary text-muted-foreground mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 transition-colors lg:justify-normal"
        >
          <iconify-icon icon="lucide:settings"></iconify-icon>
          <span class="hidden text-nowrap lg:block">Settings</span>
        </RouterLink>
        <RouterLink
          to="/signout"
          class="hover:text-primary text-muted-foreground mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 transition-colors lg:justify-normal"
        >
          <iconify-icon icon="lucide:log-out"></iconify-icon>
          <span class="hidden text-nowrap lg:block">Sign out</span>
        </RouterLink>
      </div>
    </nav>
  </aside>
</template>
