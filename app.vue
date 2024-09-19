<template>
  <div
    class="container mx-auto grid min-h-screen grid-rows-[auto_1fr_auto] bg-base-100 px-4"
  >
    <header class="navbar sticky top-0 z-10 bg-base-100 py-4">
      <div class="navbar-start md:hidden">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
            <span class="i-[mdi--segment] size-8 rotate-180"></span>
          </div>

          <BaseLinks
            tabindex="0"
            class="menu dropdown-content menu-sm z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 font-semibold shadow-2xl"
            @hide-menu="hideMenu"
          >
            <li>
              <NuxtLink
                class="link link-secondary"
                target="_blank"
                :href="mailto"
              >
                Contact
              </NuxtLink>
            </li>
          </BaseLinks>
        </div>
      </div>

      <div class="md:navbar-start">
        <NuxtLink
          class="animate-wavy-slide text-3xl font-bold"
          data-text="abbas"
          to="/"
        >
          Abbas
        </NuxtLink>
      </div>

      <div class="hidden md:navbar-center md:inline-flex">
        <BaseLinks class="flex gap-6 font-semibold" />
      </div>

      <div class="navbar-end flex gap-8">
        <div
          v-if="$colorMode.unknown"
          class="skeleton h-8 w-8 dark:bg-neutral"
        ></div>
        <label v-else class="swap swap-rotate" for="colorMode">
          <!-- this hidden checkbox controls the state -->
          <input
            id="colorMode"
            type="checkbox"
            class="theme-controller"
            v-model="$colorMode.preference"
            :checked="$colorMode.preference === 'dark'"
            true-value="dark"
            false-value="light"
          />
          <span class="i-[mdi--white-balance-sunny] swap-on size-8"></span>
          <span class="i-[mdi--moon-and-stars] swap-off size-8"></span>
        </label>

        <NuxtLink
          class="btn btn-outline btn-secondary hidden md:inline-flex"
          target="_blank"
          :href="mailto"
        >
          Contact
        </NuxtLink>
      </div>
    </header>

    <NuxtPage class="mx-auto w-full max-w-screen-xl" />

    <LazyBaseFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Abbas Mohamed` : 'Abbas Mohamed'
  },
})

const mailto = shallowRef('mailto:abbasmohamedbas@gmailcom')

const hideMenu = () => {
  const elem = document.activeElement as HTMLElement
  elem?.blur()
}
</script>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  @apply transition duration-200;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 blur;
}

a.router-link-active:not(.animate-wavy-slide) {
  @apply text-primary underline transition-colors;
}
</style>
