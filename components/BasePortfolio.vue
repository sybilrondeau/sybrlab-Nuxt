<template>
  <div class="portfolio">
    <div
      v-for="portfolioItem in portfolio"
      :key="portfolioItem.id"
      ref="portfolioItems"
      class="portfolio__item"
      :style="{ margin: portfolioItem.margin }"
    >
      <img
        class="portfolio__item--image"
        :src="require(`~/assets/images/${portfolioItem.image}.jpg`)"
      />
      <div class="portfolio__item--title">
        <div class="title-arrow">
          <h3>{{ portfolioItem.title }}</h3>
          <icon-base
            view-box="0 0 100 100"
            icon-name="arrow"
            icon-svg="icon-arrow"
          />
        </div>
        <p>{{ portfolioItem.id }}.</p>
      </div>
      <div class="portfolio__item--credits">
        <div class="credits-makers">
          <ul>
            <li>{{ portfolioItem.creditMakersOne }}</li>
            <li>{{ portfolioItem.creditMakersTwo }}</li>
            <li>{{ portfolioItem.creditMakersThree }}</li>
          </ul>
        </div>
        <div class="credits-tech">
          <ul>
            <li>{{ portfolioItem.creditTechOne }}</li>
            <li>{{ portfolioItem.creditTechTwo }}</li>
            <li>{{ portfolioItem.creditTechThree }}</li>
          </ul>
        </div>
      </div>
      <div class="portfolio__item--description">
        <p><span v-html="portfolioItem.description"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import IconBase from './IconBase.vue';
import { portfolio } from '~/assets/js/staticDataPortfolio.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    IconBase,
  },
  created() {
    this.portfolio = portfolio;
  },
  mounted() {
    this.$refs.portfolioItems.forEach((portfolio) => {
      const portfolioElements = portfolio.querySelectorAll(
        '.portfolio__item--image, .portfolio__item--title, .portfolio__item--credits, .portfolio__item--description',
      );

      gsap.from(portfolioElements, {
        scrollTrigger: {
          trigger: portfolio,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: '4rem',
        opacity: 0,
        duration: 1,
        stagger: 0.25,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include respond(phone) {
    width: 100%;
  }

  &__item {
    max-width: 50rem;

    @include respond(tab) {
      margin: 0 0 10rem !important;
    }

    &--image {
      width: 100%;
      height: 30rem;
      object-fit: cover;
      border-radius: 0.5rem;
    }

    &--title {
      border-top: 2px solid var(--grey-dark);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0 2rem;
      padding-top: 1rem;

      .title-arrow {
        display: flex;
        align-items: center;
      }

      svg {
        width: 6rem;
        height: 4rem;
      }

      a {
        fill: var(--primary);
      }

      a:hover svg {
        animation: arrowScale 1s forwards;
      }
    }

    &--credits {
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;

      li {
        font-style: italic;
        color: var(--grey-dark);
        font-size: 1.4rem;
      }

      .credits-makers {
        padding-right: 1rem;
      }

      .credits-tech {
        text-align: right;
      }
    }
  }

  &__item:not(:last-child) {
    margin-bottom: 20rem !important;
  }
}
</style>
