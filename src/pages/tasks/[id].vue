<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute('/tasks/[id]')
</script>

<template>
  <div>
    <h1>Task {{ route.params?.id }}</h1>
  </div>
</template>
