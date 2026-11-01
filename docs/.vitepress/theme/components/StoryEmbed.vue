<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onBeforeUnmount, ref } from "vue";

import { storybookIframeUrl, storybookUrl } from "../../storybook";

const props = withDefaults(
  defineProps<{
    /** Story id, e.g. `organisms-form-form--basic-usage-with-form`. */
    id: string;
    title?: string;
    /** Minimum height. The iframe grows to fit the story when Storybook is served from the same origin. */
    height?: string;
    /** The iframe scrolls past this height. */
    maxHeight?: number;
  }>(),
  { height: "400px", maxHeight: 1000 }
);

const { theme } = useData();
const src = computed(() => storybookIframeUrl(props.id, theme.value.storybookUrl));
const href = computed(() => storybookUrl(props.id, theme.value.storybookUrl));

const iframe = ref<HTMLIFrameElement>();
const contentHeight = ref(0);
let observer: ResizeObserver | undefined;

// Fit the iframe to the rendered story. Only possible on the same origin (the deployed site serves
// Storybook under /storybook/); cross-origin (e.g. STORYBOOK_URL=http://localhost:6006/) keeps `height`.
function onLoad() {
  observer?.disconnect();

  try {
    const doc = iframe.value?.contentDocument;
    const root = doc?.getElementById("storybook-root");

    if (!doc || !root) return;

    const measure = () => {
      const padding = parseFloat(getComputedStyle(doc.body).paddingTop) + parseFloat(getComputedStyle(doc.body).paddingBottom);
      contentHeight.value = Math.ceil(root.scrollHeight + (padding || 0));
    };

    observer = new ResizeObserver(measure);
    observer.observe(root);
    measure();
  } catch {
    // cross-origin
  }
}

onBeforeUnmount(() => observer?.disconnect());

const style = computed(() => ({
  height: contentHeight.value
    ? `${Math.min(Math.max(contentHeight.value, parseInt(props.height, 10) || 0), props.maxHeight)}px`
    : props.height
}));
</script>

<template>
  <figure class="story-embed">
    <iframe ref="iframe" :src="src" :title="title || id" :style="style" loading="lazy" @load="onLoad" />
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
