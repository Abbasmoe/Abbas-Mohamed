<template>
  <ul class="flex flex-col gap-1 font-light">
    <li v-for="link in links" :key="link.text">
      <a class="transition-colors hover:text-primary" :href="`#${link.id}`"
      :class="{'text-primary': $route.fullPath.includes(`#${link.id}`)}"
      >
        {{ link.text }}
      </a>
      <TocLinks class="ml-4" v-if="link.children?.length" :links="link.children" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TocLink } from '@nuxt/content'

defineProps<{
  links: TocLink[]
}>()
</script>
