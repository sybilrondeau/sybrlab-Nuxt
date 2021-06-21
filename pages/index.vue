<template>
  <div>
    <header class="intro">
      <div class="intro__portrait">
        <base-portrait
          aria-label="Portrait dessin en une ligne de Sybil Rondeau"
        />
      </div>
      <div class="intro__contenu">
        <h1>Bonjour,</h1>
        <p class="intro__contenu--p">
          <strong
            >Je suis Sybil Rondeau, Développeuse Front-end.</strong
          >
        </p>
        <p>
          Passionnée, déterminée, je suis autodidacte avant de passer
          la certification du Wagon Nantes en mars 2020. Je me forme
          activement depuis, notamment sur les frameworks Vue.js et
          Nuxt.js.
        </p>
        <div class="competences">
          <icon-base icon-svg="icon-sass" />
          <icon-base icon-svg="icon-vue" />
          <icon-base icon-svg="icon-nuxt" />
          <icon-base icon-svg="icon-gsap" />
        </div>
      </div>
    </header>
  </div>
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
.intro {
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &__portrait {
    flex: 0 1 50%;
    display: flex;
    justify-content: flex-end;
  }

  &__contenu {
    flex: 0 1 50%;

    &--p {
      margin-top: 2rem;
    }

    p {
      width: 40rem;
    }
  }
  .competences {
    width: 100%;
    height: 10rem;
    margin-top: 5rem;
    display: flex;
    justify-content: flex-start;

    svg {
      filter: grayscale(100%);
      width: 6rem;
      height: 6rem;
      margin-right: 1rem;
    }
  }
}
</style>
