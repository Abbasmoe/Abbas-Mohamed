<template>
  <main class="md:mt-18 mt-12 flex flex-col gap-16">
    <nav class="flex flex-col gap-8">
      <h2 class="font-bold md:text-3xl lg:text-4xl">
        {{ blog.title }}
      </h2>

      <div class="grid items-center gap-2">
        <div class="flex items-center gap-3">
          <span class="text-xl">📅</span>
          <span class="font-semibold">{{ blog.date }}</span>
          <span class="text-xl">•</span>
          <span class="text-xl"> 🕒</span>
          <span class="font-semibold">{{ blog.timeToRead }} min read</span>
        </div>
        <div class="flex flex-wrap items-center gap-2 justify-end">
          <span
            v-for="tag in blog.tags"
            class="badge badge-primary badge-lg forced-color-adjust-auto"
            :key="tag"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </nav>

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
