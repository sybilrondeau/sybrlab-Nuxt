<template>
  <div class="competences">
    <icon-base
      v-for="competence in competences"
      :key="competence.name"
      class="competences__item"
      :icon-name="competence.name"
      :view-box="competence.viewBox"
      :icon-svg="competence.svg"
    />
  </div>
</template>

<script>
import IconBase from './IconBase.vue';
import { gsap } from '~/static/gsap.min.js';
import { competences } from '~/assets/js/staticDataCompetence.js';
import { ScrollTrigger } from '~/static/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    IconBase,
  },
  created() {
    this.competences = competences;
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
