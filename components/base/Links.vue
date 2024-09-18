<template>
  <ul>
    <li>
      <NuxtLink
        class="transition-colors hover:text-primary"
        to="/blog"
        @click="$emit('hideMenu')"
      >
        Blog
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        class="transition-colors hover:text-primary"
        to="/project"
        @click="$emit('hideMenu')"
      >
        Projects
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        class="transition-colors hover:text-primary"
        to="/about"
        @click="$emit('hideMenu')"
      >
        About
      </NuxtLink>
    </li>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
defineEmits<{
  hideMenu: []
}>()
</script>
