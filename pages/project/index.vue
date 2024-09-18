<template>
  <main class="md:mt-18 mt-12 flex flex-col items-center gap-24">
    <h1 class="wavy-text font-bold md:text-4xl">All Projects</h1>

    <ContentList :query="contentListQuery">
      <template #default="{ list }">
        <ul class="grid gap-10 md:grid-cols-3 md:gap-20">
          <NuxtLink
            v-for="project in list"
            :key="project._path"
            :to="project._path"
            class="w-96 card bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          >
            <NuxtImg
              :src="project.image"
              :alt="project.imageAlt"
              class="h-56 w-full rounded-t-2xl object-cover"
            />
            <div class="card-body">
              <h2 class="card-title">{{ project.title }}</h2>
              <p>{{ project.description }}</p>
              <div class="card-actions justify-end">
                <span
                  v-for="tag in project.tags"
                  class="badge badge-secondary"
                  :key="tag"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </ul>
      </template>
      <template #empty>
        <BaseTRex message="No projects found." />
      </template>
      <template #not-found>
        <BaseTRex message="No projects found." />
      </template>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const contentListQuery: QueryBuilderParams = {
  path: '/project',
  sort: [{ date: -1 }],
}
</script>
