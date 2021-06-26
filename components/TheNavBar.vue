<template>
  <nav class="nav">
    <div class="nav__logo">
      <nuxt-link :to="{ name: 'index' }" aria-label="Logo SybR Lab">
        <base-icon
          class="logoLab"
          icon-name="logoLab"
          view-box="0 0 246.06 155.7"
          icon-svg="base-icon-static-lab"
        />
      </nuxt-link>
    </div>
    <base-nav-bar-menu class="nav__menu" />
    <the-nav-bar-hamburger class="nav__hamburger" />
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

  &__hamburger {
    display: none;

    @include respond(phone) {
      display: inline;
    }
  }

  &__logo {
    flex: 0 1 30%;
    padding: 2rem 0;

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
  }
}
</style>
