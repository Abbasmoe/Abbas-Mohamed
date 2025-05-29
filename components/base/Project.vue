<template>
  <li class="flex items-center gap-4 p-4">
    <NuxtLink
      class="i-[mdi--arrow-top-right] size-8 transition-colors hover:text-primary"
      :to="project._path"
    ></NuxtLink>
    <div class="flex flex-col">
      <NuxtLink
        class="text-base font-bold transition-colors hover:text-primary md:text-xl lg:text-2xl"
        :to="project._path"
      >
        {{ project.title }}
      </NuxtLink>
      <p class="text-sm opacity-80 md:text-base max-w-2xl">{{ project.description }}</p>
      <div class="mt-2 flex flex-wrap items-center gap-2">
        <span class="badge badge-secondary">
          {{ project.date }}
        </span>
        <span
          v-for="tag in project.tags"
          class="badge badge-neutral forced-color-adjust-auto"
          :key="tag"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts" generic="T extends ParsedContent">
import type { ParsedContent } from '@nuxt/content'

interface Props {
  project: T
}

defineProps<Props>()
</script>
