<template>
  <main class="md:mt-18 mt-12 flex flex-col items-center gap-16 md:gap-24">
    <h1 class="wavy-text font-bold lg:text-4xl">All Projects</h1>

    <ContentList :query="contentListQuery">
      <template #default="{ list }">
        <ul
          class="grid gap-10 md:grid-cols-2 md:gap-14 xl:grid-cols-3 xl:gap-20"
        >
          <NuxtLink
            v-for="project in list"
            :key="project._path"
            :to="project._path"
            class="card max-w-96 bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          >
            <NuxtImg
              :src="project.image"
              :alt="project.imageAlt"
              class="h-48 md:h-56 w-full rounded-t-2xl object-cover"
            />
            <div class="card-body">
              <h3 class="card-title text-base md:text-xl">{{ project.title }}</h3>
              <p class="opacity-80 text-sm md:text-base">{{ project.description }}</p>
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
