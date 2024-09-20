<template>
  <main class="md:mt-18 mt-12">
    <div class="grid grid-cols-[max-content_auto] gap-16">
      <Toc :toc="toc" />
      <ContentDoc class="prose md:prose-lg lg:prose-xl" />
    </div>
  </main>
</template>

<script setup lang="ts">
const { page: blog, toc } = useContent()

checkContentNotFound(blog)
</script>
