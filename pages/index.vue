<template>
  <div>
    <the-header />
    <main>
      <section id="section2" class="about anim-text">
        <h2><span class="outline">À Propos</span></h2>
        <div class="paragraphes">
          <base-paragraph
            v-for="aboutParagraph in aboutParagraphs"
            :key="aboutParagraph.title"
            :paragraph="aboutParagraph"
          >
            <icon-base
              view-box="0 0 521.78 450.53"
              :icon-svg="aboutParagraph.svg"
              :icon-name="aboutParagraph.title"
            />
          </base-paragraph>
        </div>
      </section>

      <section id="section3" class="portfolio-section">
        <h2><span class="outline">Portfolio</span></h2>
        <base-portfolio />
      </section>

      <section id="section4" class="competences-section">
        <h2><span class="outline">Compétences</span></h2>
        <base-competence />
      </section>

      <section id="section5" class="contact-section anim-text">
        <h2><span class="outline">Contact</span></h2>
        <div class="paragraphes">
          <base-paragraph
            v-for="aboutParagraph in contactParagraphs"
            :key="aboutParagraph.title"
            :paragraph="aboutParagraph"
          >
          </base-paragraph>
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
import * as myParagraphs from '../assets/js/staticDataParagraphs.js';
import { ScrollTrigger } from '~/static/ScrollTrigger.min.js';
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
  created() {
    this.contactParagraphs = myParagraphs.contactParagraphs;
    this.aboutParagraphs = myParagraphs.aboutParagraphs;
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
