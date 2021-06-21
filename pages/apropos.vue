<template>
  <section class="about anim-text">
    <div class="paragraphs">
      <base-paragraph
        v-for="(paragraph, index) in $t('about.paragraphs')"
        :key="index"
        :paragraph="paragraph"
      >
        <icon-base
          view-box="0 0 521.78 450.53"
          :icon-svg="paragraph.svg"
          :icon-name="paragraph.title"
        />
      </base-paragraph>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.from('.draw-svg', {
      scrollTrigger: {
        trigger: '.about .paragraph__title',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      duration: 6,
      drawSVG: '50% 50%',
    });
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.paragraphs {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
