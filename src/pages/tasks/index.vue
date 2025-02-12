<script setup lang="ts">
import { columns } from '@/utils/tableColumns/tasksColumns'
import { tasksWithProjectsQuery } from '@/utils/supabaseQueries'
import type { TasksWithProjects } from '@/utils/supabaseQueries'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)

onMounted(async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)

  tasks.value = data
})
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
