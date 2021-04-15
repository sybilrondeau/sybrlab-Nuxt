<template>
  <nav class="info">
    <div class="info__top">
      <nuxt-link
        :to="{ name: 'index' }"
        class="info__top--logo body-link"
        aria-label="Logo SybR Lab"
      >
        <icon-base
          class="logoLab"
          icon-name="logoLab"
          view-box="0 0 246.06 155.7"
          ><icon-lab
        /></icon-base>
      </nuxt-link>
      <div class="info__top--btn body-link" data-state="close">
        <icon-button @click="openNav" />
      </div>
    </div>
    <ul class="info__nav">
      <li>
        <a href="#section2" class="nav-link nav-about">À propos</a>
      </li>
      <li>
        <a href="#section3" class="nav-link nav-portfolio"
          >Portfolio</a
        >
      </li>
      <li>
        <a href="#section4" class="nav-link nav-skills"
          >Compétences</a
        >
      </li>
      <li>
        <a href="#section5" class="nav-link nav-contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IconButton from './icons/IconButton.vue';
import IconLab from './icons/IconLab.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    IconLab,
    IconButton,
  },
  methods: {
    openNav() {},
  },
};
</script>

<style lang="scss" scoped>
.info {
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 100;

  &__top {
    display: flex;
    justify-content: space-between;
    padding: 0rem 4rem;

    &--logo {
      z-index: 100;
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

    &--btn {
      z-index: 100;
      padding: 2rem 0;

      @include respond(phone) {
        right: 2rem;
      }
    }

    &--btn:hover svg {
      fill: var(--primary);
      cursor: pointer;
    }
  }

  &__nav {
    height: 8rem;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: -30rem;
    background-color: white;
    z-index: 50;

    @include respond(tabSmall) {
      flex-direction: column;
      justify-content: center;
      height: 28rem;
      width: 100%;
    }

    li {
      padding: 4rem 1.618rem;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1.4rem;

      @include respond(tabSmall) {
        padding: 1.618rem;
      }
    }

    .nav-link {
      color: var(--grey-dark);
    }

    .nav-link:hover {
      color: var(--primary);
    }
  }
}

// menu active class on items
.active {
  color: var(--primary) !important;
}

.openNav {
  animation: openNav 1s forwards;

  @include respond(tabSmall) {
    animation: openNavTab 1s forwards;
  }
}

.closeNav {
  animation: closeNav 1s forwards;

  @include respond(tabSmall) {
    animation: closeNavTab 1s forwards;
  }
}
</style>
