<template>
  <main class="md:mt-18 mt-12 flex flex-col gap-12">
    <div class="flex flex-col items-center gap-16">
      <h1 class="wavy-text font-bold lg:text-4xl">All Blogs</h1>
      <label
        class="input input-md input-bordered flex w-full items-center gap-2"
      >
        <input
          type="search"
          class="grow"
          placeholder="Search"
          ref="search-input"
          v-model.trim="searchTerm"
        />
        <kbd class="kbd kbd-sm bg-base-200">ctrl</kbd>
        <kbd class="kbd kbd-sm bg-base-200">K</kbd>
      </label>
    </div>

    <ContentQuery
      path="/blog"
      :where="{
        $or: [
          { title: { $icontains: searchTerm } },
          { description: { $icontains: searchTerm } },
          { date: { $icontains: searchTerm } },
          { tags: { $in: searchTerm.split(' ') } },
        ],
      }"
      :sort="{ date: -1 }"
    >
      <template #default="{ data }">
        <TransitionGroup name="list" tag="ul" class="flex flex-col gap-3">
          <BaseBlog v-for="blog in data" :key="blog._path" :blog="blog" />
        </TransitionGroup>
      </template>
      <template #empty>
        <BaseTRex message="No blogs found." />
      </template>
      <template #not-found>
        <BaseTRex message="No blogs found." />
      </template>
    </ContentQuery>
  </main>
</template>

<script setup lang="ts">
const title = 'Blogs'
const description =
  'I am regularly writing blogs about web development (frontend) and other topics.'

useSeoMeta({
  title,
  description,
})

definePageMeta({
  documentDriven: false,
})

const searchInput = useTemplateRef('search-input')

const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault()
    }
  },
})
const ctrlK = keys['Ctrl+K']

whenever(ctrlK, () => {
  searchInput.value?.focus()
})

const searchTerm = ref('')
</script>

<style lang="postcss">
.list-move,
.list-enter-active,
.list-leave-active {
  @apply transition-all duration-500;
}

.list-enter-from,
.list-leave-to {
  @apply translate-x-8 opacity-0;
}
.list-leave-active {
  @apply absolute;
}
</style>
