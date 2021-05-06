<template>
  <div class="competences">
    <icon-base
      v-for="competence in competences"
      :key="competence.name"
      class="competences__item"
      :icon-name="competence.name"
      :view-box="competence.viewBox"
    >
      <component :is="competence.svg"></component>
    </icon-base>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import IconBase from './IconBase.vue';
import IconHtml from './icons/IconHtml.vue';
import IconCss from './icons/IconCss.vue';
import IconSass from './icons/IconSass.vue';
import IconJs from './icons/IconJs.vue';
import IconRails from './icons/IconRails.vue';
import IconVue from './icons/IconVue.vue';
import IconNuxt from './icons/IconNuxt.vue';
import IconGsap from './icons/IconGsap.vue';
import { ScrollTrigger } from '~/static/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    IconBase,
    IconHtml,
    IconCss,
    IconSass,
    IconJs,
    IconRails,
    IconVue,
    IconNuxt,
    IconGsap,
  },
  data() {
    return {
      competences: [
        {
          name: 'HTML',
          viewBox: '0 0 256 361',
          svg: 'icon-html',
        },
        {
          name: 'CSS',
          viewBox: '0 0 256 361',
          svg: 'icon-css',
        },
        {
          name: 'Sass',
          viewBox: '0 0 256 192',
          svg: 'icon-sass',
        },
        {
          name: 'Javascript',
          viewBox: '0 0 256 256',
          svg: 'icon-js',
        },
        {
          name: 'Ruby on Rails',
          viewBox: '0 0 512 180',
          svg: 'icon-rails',
        },
        {
          name: 'Vue',
          viewBox: '0 0 256 221',
          svg: 'icon-vue',
        },
        {
          name: 'Nuxt',
          viewBox: '0 0 256 191',
          svg: 'icon-nuxt',
        },
        {
          name: 'Gsap',
          viewBox: '0 0 307.01 355.871',
          svg: 'icon-gsap',
        },
      ],
    };
  },
  mounted() {
    gsap.from('.competences__item', {
      scrollTrigger: {
        trigger: '.competences-section',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      y: '4rem',
      opacity: 0,
      duration: 1,
      stagger: { each: 0.4, grid: 'auto' },
    });
  },
};
</script>

<style lang="scss" scoped>
.competences {
  width: 100%;
  margin: 20rem auto 20rem;
  display: grid;
  grid-template-columns: repeat(4, 10rem);
  grid-template-rows: 1fr;
  grid-gap: 10rem;
  justify-content: center;
  align-items: center;
  justify-items: center;

  @include respond(tab) {
    grid-template-columns: repeat(3, 10rem);
    grid-gap: 6.4rem;
  }

  @include respond(phone) {
    grid-gap: 2rem;
    width: 100%;
  }

  svg {
    filter: grayscale(100%);

    @include respond(tab) {
      width: 8rem;
      height: 8rem;
    }
    @include respond(phone) {
      width: 6rem;
      height: 6rem;
    }
  }
}
</style>
