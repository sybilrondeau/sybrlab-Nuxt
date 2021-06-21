<template>
  <nav class="nav">
    <div class="nav__logo">
      <nuxt-link :to="{ name: 'index' }" aria-label="Logo SybR Lab">
        <icon-base
          class="logoLab"
          icon-name="logoLab"
          view-box="0 0 246.06 155.7"
          icon-svg="icon-lab"
        />
      </nuxt-link>
    </div>
    <div class="nav__menu">
      <nuxt-link
        :to="{ name: 'apropos' }"
        class="nav-link nav-about"
        >{{ $t('about.title') }}</nuxt-link
      >

      <nuxt-link
        :to="{ name: 'portfolio' }"
        class="nav-link nav-portfolio"
        >{{ $t('portfolio.title') }}</nuxt-link
      >

      <nuxt-link
        :to="{ name: 'contact' }"
        class="nav-link nav-contact"
        >{{ $t('contact.title') }}</nuxt-link
      >
    </div>
  </nav>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin.js';
import IconBase from './IconBase.vue';
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default {
  components: {
    IconBase,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100vw;
  height: 8rem;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0rem 4rem;
  background-color: var(--backg);

  &__logo {
    flex: 0 1 10%;
    padding: 2rem 0;

    .logoLab {
      width: 6rem;
      height: 4rem;

      @include respond(phone) {
        width: 4rem;
        height: 2rem;
      }
    }

    .logoLab:hover {
      fill: var(--primary);
    }
  }

  &__menu {
    flex: 0 1 90%;
    padding: 2.5rem 0;
    text-align: center;
    display: flex;
    justify-content: flex-end;

    .nav-link {
      color: var(--grey-dark);
      font-style: normal;
      font-weight: 600;
      text-transform: uppercase;
      font-size: var(--extra-small);
      padding-left: 4rem;

      &.active {
        color: var(--primary);
      }
    }
    .nav-link:hover {
      color: var(--primary);
    }
  }
}
</style>
