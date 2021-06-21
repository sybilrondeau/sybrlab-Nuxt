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
        <p>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__portrait {
    flex: 0 1 50%;
    display: flex;
    justify-content: flex-end;

    @include respond(phone) {
      flex: 0 1 100%;
    }
  }

  &__contenu {
    flex: 0 1 50%;

    @include respond(phone) {
      flex: 0 1 100%;
    }

    p {
      max-width: 40rem;
    }
    .competences {
      width: 100%;
      margin: 5rem 0;
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
}
</style>
