<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr] bg-base-100">
    <div class="flex">
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
        <span class="i-[ic--outline-wb-sunny] swap-on size-8"></span>
        <span class="i-[ic--outline-dark-mode] swap-off size-8"></span>
      </label>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>
