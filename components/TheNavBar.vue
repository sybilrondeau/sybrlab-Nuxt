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
      <the-language-switcher />
    </div>
  </nav>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin.js';
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default {};
</script>

<style lang="scss" scoped>
.nav {
  width: 100vw;
  height: 6rem;
  position: sticky;
  top: 0;
  z-index: 800;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;
  background-color: var(--backg);
  border-bottom: var(--border);

  @include respond(tab) {
    height: 5rem;
  }

  &__logo {
    flex: 0 1 30%;
    padding: 2rem 0;
    margin-left: 6rem;

    @include respond(phone) {
      margin-left: 0;
    }

    .logoLab {
      width: 6rem;
      height: 4rem;

      @include respond(tab) {
        width: 5rem;
        height: 3rem;
      }
    }

    .logoLab:hover {
      fill: var(--primary);
    }
  }

  &__menu {
    flex: 0 1 70%;
    padding: 2rem 0;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    border-left: var(--border);

    @include respond(tab) {
      padding: 1.6rem 0;
    }

    @include respond(phone) {
      display: none;
    }

    .nav-link {
      color: var(--grey-dark);
      font-family: 'Exo', sans-serif;
      font-style: normal;
      font-weight: 600;
      //text-transform: uppercase;
      font-size: var(--extra-small);
      padding-left: 4rem;
    }
    .nav-link:hover {
      color: var(--primary);
    }
  }
}
</style>
