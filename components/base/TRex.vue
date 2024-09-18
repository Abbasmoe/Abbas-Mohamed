<template>
  <div class="flex items-center gap-4">
    <span class="i-[mdi--tyrannosaurus-rex] size-12"></span>
    <p class="text-xl font-semibold">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string
}

defineProps<Props>()
</script>
