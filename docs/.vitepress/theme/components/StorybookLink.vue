<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";

import { storybookUrl } from "../../storybook";

const props = defineProps<{
  /** Storybook path (`/docs/...`, `/story/...`) or story id. Empty for the Storybook home. */
  to?: string;
}>();

const { theme } = useData();
const href = computed(() => storybookUrl(props.to, theme.value.storybookUrl));
</script>

<template>
  <a :href="href" target="_self" class="storybook-link"><slot>Open in Storybook</slot></a>
</template>
