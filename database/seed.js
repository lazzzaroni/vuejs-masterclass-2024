import { faker } from '@faker-js/faker'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const seedProjects = async (numberOfEntries = 1) => {
  const projects = []

  for (let i = 0; i < numberOfEntries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }

  await supabase.from('projects').insert(projects)
}

await seedProjects(10)
