<template>
  <button aria-expanded="false">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <path
        class="close-btn"
        d="M33,28.11c1.32.91,8.93,6,4.85,8.06-1.77.88-6.77-4.58-8.33-5.72-3.55-2.59-6-6.4-8.63-9.85A140.58,140.58,0,0,0,9.67,30c-1.5,1.44-5.62,8-8,6.24-4.13-3.1,14.55-17,16.75-18.68A73.35,73.35,0,0,0,8.87,8.67C7.08,7.19.08,4.61,2.29,1.82c2.38-3,8.21,3.08,9.89,4.5,1.87,1.57,3.71,3.19,5.53,4.83q1.34,1.2,2.55,2.52c2,2.18,2.25.66,4.26-.94S36.35,0,38.21,3.3,26.33,16.32,24,18.18C26.7,21.8,29.19,25.48,33,28.11Z"
      />
      <circle class="circle" cx="20" cy="20" r="20" />
    </svg>
  </button>
</template>

<script>
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin.js';
import { gsap } from 'gsap';
gsap.registerPlugin(MorphSVGPlugin);

export default {
  methods: {
    morphButton() {
      MorphSVGPlugin.convertToPath('.circle');
      const navTl = gsap.timeline({
        defaults: { duration: 1 },
        paused: true,
      });
      navTl.to('.circle', { morphSVG: '.close-btn' });
      navTl.to(
        '.circle',
        { attr: { fill: 'var(--primary' }, duration: 0.1 },
        '<',
      );
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
}
svg {
  width: 2rem;
  height: 4rem;

  @include respond(phone) {
    width: 1.5rem;
    height: 2rem;
  }

  .close-btn {
    visibility: hidden;
  }
}
</style>
