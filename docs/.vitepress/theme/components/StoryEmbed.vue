<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";

import { storybookIframeUrl, storybookUrl } from "../../storybook";

const props = withDefaults(
  defineProps<{
    /** Story id, e.g. `organisms-form-form--basic-usage-with-form`. */
    id: string;
    title?: string;
    height?: string;
  }>(),
  { height: "400px" }
);

const { theme } = useData();
const src = computed(() => storybookIframeUrl(props.id, theme.value.storybookUrl));
const href = computed(() => storybookUrl(props.id, theme.value.storybookUrl));
</script>

<template>
  <figure class="story-embed">
    <iframe :src="src" :title="title || id" :style="{ height }" loading="lazy" />
    <figcaption>
      <span>{{ title || "Live example" }}</span>
      <a :href="href" target="_self">Open in Storybook ↗</a>
    </figcaption>
  </figure>
</template>

<style scoped>
.story-embed {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.story-embed iframe {
  display: block;
  width: 100%;
  border: 0;
  background: #fff;
}

.story-embed figcaption {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  font-size: 13px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
</style>
