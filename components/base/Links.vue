<template>
  <ul>
    <li v-for="link in links" :key="link.name">
      <NuxtLink
        class="transition-colors hover:text-primary"
        :to="link.to"
        @click="$emit('hideMenu')"
      >
        {{ link.name }}
      </NuxtLink>
    </li>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
defineEmits<{
  hideMenu: []
}>()

const links = [
  {
    name: 'Projects',
    to: '/project',
  },
  {
    name: 'About',
    to: '/about',
  },
]
</script>
