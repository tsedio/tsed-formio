<script setup lang="ts">
// Home sections taken from the Ts.ED website: technologies, contributors, backers & sponsors, companies.
import MessageCircleHeart from "@tsed/vitepress-theme/atoms/svg/MessageCircleHeart.vue";
import GithubContributors from "@tsed/vitepress-theme/organisms/github-contributors/GithubContributors.vue";
import HomeContainer from "@tsed/vitepress-theme/organisms/home/HomeContainer.vue";
import HomePartners from "@tsed/vitepress-theme/organisms/home/HomePartners.vue";
import { useData, useRoute } from "vitepress";
import { computed } from "vue";

const route = useRoute();
const { frontmatter } = useData();
const technologies = computed(() => (frontmatter.value.frameworks || []) as { title: string; href: string; src: string }[]);
const isHome = computed(() => route.path === "/" || route.path === "" || route.path === "/index.html");
</script>

<template>
  <template v-if="isHome">
    <HomeContainer animate>
      <article class="flex flex-col sm:flex-row pt-10 sm:pt-20 gap-10">
        <div class="text-center sm:text-left flex items-center sm:max-w-[45%]">
          <h3 class="text-2xl sm:text-5xl">Built on top of <strong>Form.io</strong> and the libraries you already use</h3>
        </div>
        <ul class="home-tech">
          <li v-for="item in technologies" :key="item.title">
            <a :href="item.href" :target="item.href.startsWith('http') ? '_blank' : '_self'" rel="noreferrer">
              <span class="home-tech-logo"><img :src="item.src" :alt="item.title" loading="lazy" /></span>
              <span class="home-tech-title">{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </article>
    </HomeContainer>

    <HomeContainer animate>
      <div class="flex flex-col sm:flex-row pt-10 sm:pt-20 gap-10">
        <!-- Fewer contributors than on tsed.dev: bigger avatars, centered in the free space -->
        <div class="flex-1 flex items-center justify-center">
          <GithubContributors :width="72" :padding="3" />
        </div>

        <div class="flex items-center order-first sm:order-last sm:w-[300px] shrink-0">
          <div class="flex sm:block">
            <div class="text-2xl sm:text-5xl flex items-center pb-5">
              <div>Our awesome <strong>contributors</strong></div>
            </div>
            <div class="max-w-[100px] relative">
              <div class="animate-[ping_3s_infinite] absolute inline-flex h-full rounded-full bg-red-400 opacity-75 w-[100px]" />
              <MessageCircleHeart class="w-[100px] z-2 relative" />
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>

    <HomeContainer animate>
      <div class="home-support pt-10 sm:pt-20">
        <div class="text-2xl sm:text-5xl text-center pb-5">
          <strong>Backers</strong> &amp; sponsors
        </div>
        <p class="text-center">
          Ts.ED Formio is part of the Ts.ED open source project. Thank you to all our backers! 🙏
        </p>
        <a class="home-support-image" href="https://opencollective.com/tsed#backers" target="_blank" rel="noreferrer">
          <img src="https://opencollective.com/tsed/backers.svg?width=890" alt="Ts.ED backers on Open Collective" loading="lazy" />
        </a>
        <a class="home-support-image" href="https://opencollective.com/tsed#sponsors" target="_blank" rel="noreferrer">
          <img src="https://opencollective.com/tsed/sponsors.svg?width=890" alt="Ts.ED sponsors on Open Collective" loading="lazy" />
        </a>
        <div class="home-support-actions">
          <a class="home-support-button brand" href="https://opencollective.com/tsed#backer" target="_blank" rel="noreferrer">Become a backer</a>
          <a class="home-support-button" href="https://github.com/sponsors/Romakita" target="_blank" rel="noreferrer">Become a sponsor</a>
        </div>
      </div>
    </HomeContainer>

    <HomeContainer animate>
      <div class="text-2xl sm:text-5xl text-center pt-10 sm:pt-20 pb-10">
        They use <strong>Ts.ED</strong>
      </div>
    </HomeContainer>
    <HomePartners />
  </template>
</template>

<style scoped>
.home-tech {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 16px;
  flex: 1;
}

.home-tech a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  text-decoration: none;
}

.home-tech-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  padding: 14px;
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s;
}

.home-tech a:hover .home-tech-logo {
  transform: translateY(-3px);
}

.home-tech-logo img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
}

.home-support p {
  color: var(--vp-c-text-2);
}

.home-support-image {
  display: block;
  margin: 24px auto;
  max-width: 890px;
}

.home-support-image img {
  width: 100%;
}

.home-support-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.home-support-button {
  border: 1px solid var(--vp-button-alt-border);
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-button-alt-text);
  background: var(--vp-button-alt-bg);
}

.home-support-button.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background: var(--vp-button-brand-bg);
}
</style>
