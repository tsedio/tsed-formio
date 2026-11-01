<script setup lang="ts">
// Hero illustration: a rendered form with a component being dragged from the builder.
// Inline SVG so colors follow the VitePress theme (light/dark).
</script>

<template>
  <div class="hero-form">
    <svg viewBox="0 0 380 340" role="img" aria-label="A Form.io form rendered with @tsed/react-formio" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="hf-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.18" />
        </filter>
      </defs>

      <!-- Form card -->
      <g filter="url(#hf-shadow)">
        <rect x="70" y="20" width="290" height="300" rx="14" class="card" />
      </g>
      <rect x="70" y="20" width="290" height="36" rx="14" class="card-header" />
      <rect x="70" y="42" width="290" height="14" class="card-header" />
      <circle cx="90" cy="38" r="4.5" class="dot dot-1" />
      <circle cx="105" cy="38" r="4.5" class="dot dot-2" />
      <circle cx="120" cy="38" r="4.5" class="dot dot-3" />
      <text x="215" y="42" text-anchor="middle" class="title">Contact form</text>

      <!-- Text field (focused) -->
      <text x="92" y="82" class="label">Full name</text>
      <rect x="92" y="88" width="246" height="30" rx="6" class="input focused" />
      <text x="104" y="108" class="value">Jane Doe</text>
      <rect x="160" y="96" width="1.5" height="15" class="caret" />

      <!-- Email -->
      <text x="92" y="138" class="label">Email</text>
      <rect x="92" y="144" width="246" height="30" rx="6" class="input" />
      <text x="104" y="164" class="placeholder">jane@example.com</text>

      <!-- Select -->
      <text x="92" y="194" class="label">Topic</text>
      <rect x="92" y="200" width="246" height="30" rx="6" class="input" />
      <text x="104" y="220" class="value">Support</text>
      <path d="M318 211 l5 5 l5 -5" class="chevron" />

      <!-- Checkbox -->
      <rect x="92" y="244" width="16" height="16" rx="4" class="checkbox" />
      <path d="M96 252 l3 3 l6 -7" class="check" />
      <text x="116" y="257" class="text">I agree to the terms</text>

      <!-- Submit -->
      <rect x="92" y="276" width="96" height="30" rx="6" class="button" />
      <text x="140" y="296" text-anchor="middle" class="button-text">Submit</text>

      <!-- Drop zone + dragged component (builder) -->
      <rect x="200" y="276" width="138" height="30" rx="6" class="dropzone" />
      <g transform="translate(222 64) rotate(-6 70 250)">
      <g class="drag">
        <g filter="url(#hf-shadow)">
          <rect x="6" y="226" width="128" height="38" rx="8" class="chip" />
        </g>
        <rect x="16" y="236" width="18" height="18" rx="4" class="chip-icon" />
        <text x="25" y="249" text-anchor="middle" class="chip-icon-text">T</text>
        <text x="42" y="250" class="chip-text">Text Field</text>
        <path d="M118 238 v14 M114 242 h8" class="chip-grip" />
      </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.hero-form {
  /* Centered in VitePress' .image-container, like the default hero image */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 115%;
  max-width: 440px;
  transform: translate(-50%, -50%);
}

.hero-form svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.card {
  fill: var(--vp-c-bg);
  stroke: var(--vp-c-divider);
}

.card-header {
  fill: var(--vp-c-bg-soft);
}

.dot-1 {
  fill: #f87171;
}

.dot-2 {
  fill: #fbbf24;
}

.dot-3 {
  fill: #34d399;
}

.title {
  font-size: 12px;
  font-weight: 600;
  fill: var(--vp-c-text-2);
}

.label {
  font-size: 11px;
  font-weight: 600;
  fill: var(--vp-c-text-1);
}

.input {
  fill: var(--vp-c-bg);
  stroke: var(--vp-c-divider);
  stroke-width: 1.2;
}

.input.focused {
  stroke: var(--vp-c-brand-1);
  stroke-width: 2;
}

.value,
.text {
  font-size: 12px;
  fill: var(--vp-c-text-1);
}

.placeholder {
  font-size: 12px;
  fill: var(--vp-c-text-3);
}

.caret {
  fill: var(--vp-c-brand-1);
  animation: blink 1.1s steps(1) infinite;
}

.chevron,
.chip-grip {
  fill: none;
  stroke: var(--vp-c-text-3);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.checkbox {
  fill: var(--vp-c-brand-1);
}

.check {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.button {
  fill: var(--vp-c-brand-1);
}

.button-text {
  font-size: 12px;
  font-weight: 600;
  fill: #fff;
}

.dropzone {
  fill: var(--vp-c-brand-soft);
  stroke: var(--vp-c-brand-1);
  stroke-width: 1.4;
  stroke-dasharray: 5 4;
}

.chip {
  fill: var(--vp-c-bg);
  stroke: var(--vp-c-brand-1);
  stroke-width: 1.4;
}

.chip-icon {
  fill: var(--vp-c-brand-1);
}

.chip-icon-text {
  font-size: 12px;
  font-weight: 700;
  fill: #fff;
}

.chip-text {
  font-size: 12px;
  font-weight: 600;
  fill: var(--vp-c-text-1);
}

.drag {
  animation: float 3.2s ease-in-out infinite;
}

text {
  font-family: var(--vp-font-family-base);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes float {
  50% {
    transform: translate(4px, -6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .caret,
  .drag {
    animation: none;
  }
}
</style>
