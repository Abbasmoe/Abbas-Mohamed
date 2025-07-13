<template>
  <main class="md:mt-18 mt-12 flex flex-col items-center gap-16 md:gap-24">
    <h1 class="wavy-text font-bold lg:text-4xl">About me</h1>

    <div class="flex flex-col gap-16 md:gap-20">
      <div class="flex w-full max-w-4xl flex-col gap-2">
        <span
          class="i-[mdi--code-tags] size-8 animate-pulse bg-secondary"
        ></span>
        <div class="mockup-window border border-base-300 dark:border-gray-600">
          <div class="border-t border-base-300 px-6 py-4 dark:border-gray-600">
            <h3 class="text-base font-semibold md:text-xl">Hi, I'm Abbas</h3>
            <p class="mt-1 text-pretty text-sm md:text-base">
              Experienced <strong>Software developer 👨‍💻</strong> with proven
              expertise in designing user-friendly and appealing web features as
              well as performance optimization of applications. Well versed in
              modern JavaScript frameworks &amp; PHP with a strong ability to
              actively support the entire software development cycle. Known for
              high-quality code solutions and a keen eye for appealing design,
              as well as for effective collaboration with cross-functional
              teams. I am dedicated to lifelong learning and personal growth. 💪
            </p>

            <div class="divider"></div>

            <div class="mt-4 flex flex-col gap-2">
              <strong class="text-lg">Resume Links 📑</strong>

              <ol
                class="flex list-inside list-disc flex-col gap-1.5 text-slate-900 dark:text-slate-200"
              >
                <li v-for="link in resumeLinks" :key="link.text">
                  <nuxt-link class="link" target="_blank" :to="link.link">
                    {{ link.text }}
                  </nuxt-link>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <span
          class="i-[mdi--code] size-8 animate-pulse self-end bg-secondary"
        ></span>
      </div>
      <div class="flex w-full max-w-4xl flex-col gap-8">
        <h2 class="font-semibold">Tech Stack 🤹‍♂️</h2>
        <div class="flex flex-col gap-12 md:gap-14">
          <p class="text-pretty text-sm md:text-base">
            My go-to tech stack includes the following frameworks and libraries.
            While I've also had experience with <strong>GraphQL</strong>,
            <strong>Daisyui</strong>, <strong>Strapi</strong>,
            <strong>React js</strong>, <strong>Symfony</strong>
            &amp; Co., these are the tools I'm most comfortable and proficient
            with continuous eager to explore new tools and learn new techniques.
          </p>
          <ul class="flex flex-wrap items-center justify-center gap-12">
            <li class="flex flex-col items-center gap-2">
              <SvgTypeScript class="size-12" />
              <p class="text-sm">TypeScript</p>
            </li>
            <li class="flex flex-col items-center gap-2">
              <SvgTailwindcss class="size-12" />
              <p class="text-sm">Tailwind CSS</p>
            </li>
            <li class="flex flex-col items-center gap-2">
              <SvgNuxt class="size-12" />
              <p class="text-sm">Nuxt.js</p>
            </li>
            <li class="flex flex-col items-center gap-2">
              <SvgVue class="size-12" />
              <p class="text-sm">Vue.js</p>
            </li>
            <li class="flex flex-col items-center gap-2">
              <SvgPHP class="size-12" />
              <p class="text-sm">PHP</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full max-w-4xl flex-col gap-12 md:gap-14">
        <h2 class="font-semibold">Languages I speak 🗣</h2>
        <ul class="flex flex-wrap items-center justify-center gap-16">
          <li class="flex flex-col items-center gap-2">
            <SvgSudan class="size-12" />
            <p class="text-sm">Arabic</p>
          </li>
          <li class="flex flex-col items-center gap-2">
            <SvgGermany class="size-12" />
            <p class="text-sm">German</p>
          </li>
          <li class="flex flex-col items-center gap-2">
            <SvgUSA class="size-12" />
            <p class="text-sm">English</p>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const title = 'About me'
const description = 'Find out more about me as a person'

useSeoMeta({
  title,
  description,
})

definePageMeta({
  documentDriven: false,
})

const resumeLinks = [
  {
    text: 'Auf Deutsch',
    link: 'https://mega.nz/file/kEUl0aia#Jnz8Ary7MXid83vRub8y_ElUWp6E4FUikyoDpj52cJ8',
  },
  {
    text: 'In English',
    link: 'https://mega.nz/file/8QdzjIqb#e5p-HBK1eb3KW6DGVkOhf9-_tTohRo5f7jFbiefOF8o',
  },
]
</script>
