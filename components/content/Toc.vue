<template>
  <aside class="hidden lg:block">
    <div class="sticky top-28 max-w-sm">
      <div class="mb-4 flex items-center gap-2">
        <span class="i-[mdi--bookmark-multiple-outline] size-5"></span>
        <h3 class="font-semibold">Table of Contents</h3>
      </div>
      <template v-if="toc && toc.links">
        <TocLinks :links="toc.links" />
      </template>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Toc } from '@nuxt/content'

defineProps<{
  toc: Toc
}>()
</script>
