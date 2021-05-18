<template>
  <div>
    <the-header />
    <main>
      <section id="section2" class="about anim-text">
        <h2>
          <span class="outline">{{ $t('about.title') }}</span>
        </h2>
        <div class="paragraphes">
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

      <section id="section3" class="portfolio-section">
        <h2>
          <span class="outline">{{ $t('portfolio.title') }}</span>
        </h2>
        <base-portfolio />
      </section>

      <section id="section4" class="competences-section">
        <h2>
          <span class="outline">{{ $t('competence.title') }}</span>
        </h2>
        <base-competence />
      </section>

      <section id="section5" class="contact-section anim-text">
        <h2>
          <span class="outline">{{ $t('contact.title') }}</span>
        </h2>
        <div class="paragraphes">
          <base-paragraph
            v-for="(paragraph, index) in $t('contact.paragraphs')"
            :key="index"
            :paragraph="paragraph"
          ></base-paragraph>
        </div>
      </section>

      <base-cta />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import BaseParagraph from '@/components/BaseParagraph.vue';
import BasePortfolio from '@/components/BasePortfolio.vue';
import BaseCompetence from '@/components/BaseCompetence.vue';
import BaseCta from '@/components/BaseCta.vue';
import IconBase from '@/components/IconBase.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    TheHeader,
    BaseParagraph,
    BasePortfolio,
    BaseCompetence,
    BaseCta,
    IconBase,
  },
  mounted() {
    function animSections(sectionItems, trigger, stagger) {
      gsap.from(sectionItems, {
        scrollTrigger: {
          trigger,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: '4rem',
        opacity: 0,
        duration: 1,
        stagger,
      });
    }

    animSections('.about .paragraph', '.about .paragraph', 0.33);
    animSections(
      '.contact-section .paragraph',
      '.contact-section .paragraph',
      0.33,
    );

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
}
.paragraphes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
