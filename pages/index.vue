<template>
  <main class="mt-16 md:mt-24">
    <div
      class="flex flex-col items-center justify-between gap-16 md:flex-row-reverse"
    >
      <div class="relative z-0">
        <NuxtImg
          src="/my-image.webp"
          alt="my-image"
          class="h-full w-full max-w-64 md:max-w-sm"
        />
        <div
          class="absolute left-0 top-0 -z-1 h-full w-full -rotate-12 rounded-3xl bg-base-300"
        ></div>
      </div>

      <div class="grow">
        <h4 class="md:text-xl py-2 font-semibold">Hi 👋, I'm</h4>
        <h1 class="text-4xl md:text-5xl font-bold">Abbas Mohamed</h1>
        <p class="max-w-2xl py-6 text-pretty">
          Front-End Developer based in Germany. I'm excited to share my recent
          work and the valuable lessons I've learned along the way.
        </p>
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink
              to="https://www.linkedin.com/in/abbas-mohamed-ahmed-a8345826b/"
              target="_blank"
              external
              class="i-[mdi--linkedin] size-8"
            ></NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://github.com/Abbasmoe"
              target="_blank"
              external
              class="i-[mdi--github] size-8"
            ></NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <section class="mt-16 flex flex-col gap-6 md:mt-28">
      <h2 class="md:text-3xl wavy-text font-bold">Recently Blogs</h2>

      <ContentList :query="contentListQuery">
        <template #default="{ list }">
          <ul class="flex flex-col gap-3">
            <BaseBlog v-for="blog in list" :key="blog._path" :blog="blog" />
          </ul>
        </template>
        <template #empty>
          <BaseTRex message="No blogs found." />
        </template>
        <template #not-found>
          <BaseTRex message="No blogs found." />
        </template>
      </ContentList>

      <div class="flex">
        <NuxtLink class="group flex items-center gap-2" to="/blog">
          <span
            class="text-lg md:text-xl font-semibold text-primary transition-colors group-hover:text-base-content"
          >
            All Blogs
          </span>
          <span
            class="i-[mdi--chevron-double-right] size-8 bg-primary transition-colors group-hover:bg-base-content"
          ></span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const contentListQuery: QueryBuilderParams = {
  path: '/blog',
  limit: 8,
  sort: [{ date: -1 }],
}
</script>
