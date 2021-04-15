<template>
  <div class="competences">
    <icon-base class="competences__item" icon-name="html"
      ><icon-html
    /></icon-base>
    <icon-base class="competences__item" icon-name="css"
      ><icon-css
    /></icon-base>
    <icon-base
      class="competences__item"
      view-box="0 0 256 192"
      icon-name="sass"
      ><icon-sass
    /></icon-base>
    <icon-base
      class="competences__item"
      view-box="0 0 256 256"
      icon-name="js"
      ><icon-js
    /></icon-base>
    <icon-base
      class="competences__item"
      view-box="0 0 512 180"
      icon-name="rails"
      ><icon-rails
    /></icon-base>
    <icon-base
      class="competences__item"
      view-box="0 0 256 221"
      icon-name="vue"
      ><icon-vue
    /></icon-base>
    <icon-base
      class="competences__item"
      view-box="0 0 256 191"
      icon-name="nuxt"
      ><icon-nuxt
    /></icon-base>
    <icon-base
      class="competences__item"
      view-box="0 0 307.01 355.871"
      icon-name="gsap"
      ><icon-gsap
    /></icon-base>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IconBase from './IconBase.vue';
import IconHtml from './icons/IconHtml.vue';
import IconCss from './icons/IconCss.vue';
import IconSass from './icons/IconSass.vue';
import IconJs from './icons/IconJs.vue';
import IconRails from './icons/IconRails.vue';
import IconVue from './icons/IconVue.vue';
import IconNuxt from './icons/IconNuxt.vue';
import IconGsap from './icons/IconGsap.vue';
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
  mounted() {
    gsap.from('.competences__item', {
      scrollTrigger: {
        trigger: '.competences-section',
        start: 'top 80%',
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
