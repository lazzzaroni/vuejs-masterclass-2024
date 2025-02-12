<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'
import { projectsQuery } from '@/utils/supabaseQueries'
import type { Projects } from '@/utils/supabaseQueries'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

onMounted(async () => {
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  projects.value = data
})
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
