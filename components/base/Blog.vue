<template>
  <li class="flex items-center gap-4 p-4">
    <NuxtLink
      class="i-[mdi--arrow-top-right] size-8 transition-colors hover:text-primary"
      :to="blog._path"
    ></NuxtLink>
    <div class="flex flex-col">
      <NuxtLink
        class="text-xl md:text-2xl font-bold transition-colors hover:text-primary"
        :to="blog._path"
      >
        {{ blog.title }}
      </NuxtLink>
      <p class="opacity-80">{{ blog.description }}</p>
      <div class="mt-2 flex items-center gap-2 flex-wrap">
        <span class="badge badge-secondary">
          {{ blog.date }}
        </span>
        <span
          v-for="tag in blog.tags"
          class="badge badge-neutral"
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
  blog: T
}

defineProps<Props>()
</script>
