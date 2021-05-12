<template>
  <nav class="info">
    <div class="info__top">
      <nuxt-link
        :to="{ name: 'index' }"
        class="info__top--logo"
        aria-label="Logo SybR Lab"
      >
        <icon-base
          class="logoLab body-link"
          icon-name="logoLab"
          view-box="0 0 246.06 155.7"
          icon-svg="icon-lab"
        />
      </nuxt-link>
      <div class="info__top--btn body-link" @click="openNav">
        <the-nav-bar-button />
      </div>
    </div>
    <transition name="fade">
      <ul v-if="isOpen" class="info__nav">
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
    </transition>
  </nav>
</template>

<script>
import IconBase from './IconBase.vue';
import TheNavBarButton from './TheNavBarButton.vue';
import { gsap } from '~/dist/gsap.min.js';
import { ScrollTrigger } from '~/dist/ScrollTrigger.min.js';
import { MorphSVGPlugin } from '~/dist/MorphSVGPlugin.min.js';
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default {
  components: {
    IconBase,
    TheNavBarButton,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    const circle = MorphSVGPlugin.convertToPath('.circle');
    this.navTl = gsap
      .timeline()
      .to(circle, { morphSVG: '.close-btn' })
      .reverse();
  },
  methods: {
    openNav() {
      // toogle play and reverse on timeline
      this.navTl.reversed(!this.navTl.reversed());
      this.isOpen = !this.isOpen;

      // class active on menu items
      function activeMenu(trigger, end, targets) {
        ScrollTrigger.create({
          trigger,
          start: 'top bottom',
          end,
          toggleClass: { targets, className: 'active' },
        });
      }

      activeMenu('#section2', 'bottom 20%', '.nav-about');
      activeMenu('#section3', 'bottom 20%', '.nav-portfolio');
      activeMenu('#section4', 'bottom 20%', '.nav-skills');
      activeMenu('#section5', '200% 20%', '.nav-contact');
    },
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
    top: 0rem;
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

      &.active {
        color: var(--primary);
      }
    }

    .nav-link:hover {
      color: var(--primary);
    }
  }
}

// menu active class on items
/*
.active {
  color: var(--primary);
}
*/

.fade-enter,
.fade-leave-to {
  transform: translate3D(0, -10rem, 0);

  @include respond(phone) {
    transform: translate3D(0, -28rem, 0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 1s ease-out;
}
</style>
