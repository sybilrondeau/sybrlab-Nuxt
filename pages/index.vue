<template>
  <header class="intro">
    <div class="intro__content-01">
      <div class="intro-portrait">
        <base-image-portrait
          aria-label="Portrait dessin en une ligne de Sybil Rondeau"
        />
      </div>
      <div class="intro-titles">
        <span id="hello">{{ $t('intro.title') }},</span>
        <h1 id="site-title">{{ $t('intro.subtitle') }}</h1>
      </div>
    </div>
    <div ref="contentItems" class="intro__content-02">
      <p class="fade-up">
        {{ $t('intro.paragraph2') }}
      </p>
      <p class="fade-up">{{ $t('intro.paragraph3') }}</p>

      <p class="fade-up" v-html="$t('intro.paragraph4')"></p>
      <div class="competences fade-up">
        <base-icon icon-svg="base-icon-static-sass" />
        <base-icon icon-svg="base-icon-static-vue" />
        <base-icon icon-svg="base-icon-static-nuxt" />
        <base-icon icon-svg="base-icon-static-gsap" />
      </div>
    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    gsap.from('.fade-up', {
      y: '4rem',
      opacity: 0,
      duration: 1,
      stagger: 0.25,
    });
  },
};
</script>

<style lang="scss" scoped>
.intro {
  margin: 2rem auto 10rem;

  &__content-01 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .intro-portrait {
      flex: 0 1 50%;
      display: flex;
      justify-content: flex-end;
    }

    .intro-titles {
      flex: 0 1 50%;

      @include respond(tab) {
        flex: 0 1 100%;
      }

      #hello {
        font-family: 'Exo', sans-serif;
        font-weight: 900;
        font-variation-settings: 'wght' 900;
        font-size: var(--extra-big);
        margin-bottom: 2rem;

        @include respond(phone) {
          font-size: var(--big);
        }
      }
      #site-title {
        font-family: 'Exo', sans-serif;
        font-weight: 600;
        font-variation-settings: 'wght' 600;
        font-size: var(--normal);
      }
    }
  }
  &__content-02 {
    max-width: 100rem;
    margin: 0 auto;
    columns: 2 40rem;
    column-gap: 2rem;

    .competences {
      width: 100%;
      margin: 5rem auto;
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
