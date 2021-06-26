<template>
  <section class="portfolio-section">
    <div class="title-container">
      <h1>Portfolio</h1>
      <base-image-book />
    </div>
    <p>
      {{ $t('portfolio.paragraph1') }}<br /><span
        v-html="$t('portfolio.paragraph2')"
      ></span>
    </p>
    <div class="portfolio">
      <div
        v-for="(portfolioItem, index) in $t(
          'portfolio.portfolioItems',
        )"
        :key="index"
        ref="portfolioItems"
        class="portfolio__item"
      >
        <img
          class="portfolio__item--image"
          :alt="portfolioItem.alt"
          :src="require(`~/assets/images/${portfolioItem.image}.jpg`)"
        />
        <div class="portfolio__item--contenu">
          <div class="item-title">
            <h2>{{ portfolioItem.title }}</h2>
            <p>{{ portfolioItem.id }}.</p>
          </div>
          <div class="item-credits">
            <div class="credits-makers">
              <ul>
                <li
                  v-for="creditMaker in portfolioItem.creditMakers"
                  :key="creditMaker"
                >
                  {{ creditMaker }}
                </li>
              </ul>
            </div>
            <div class="credits-tech">
              <ul>
                <li
                  v-for="creditTech in portfolioItem.creditTechs"
                  :key="creditTech"
                >
                  {{ creditTech }}
                </li>
              </ul>
            </div>
          </div>
          <div class="item-description">
            <p>
              <span v-html="portfolioItem.description"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    gsap.from('.portfolio__item', {
      y: '4rem',
      opacity: 0,
      duration: 1,
      stagger: { each: 0.4, grid: [1, 3] },
    });
  },
};
</script>

<style lang="scss" scoped>
.portfolio-section {
  margin: 5rem 0 10rem;

  .title-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    svg {
      width: 8rem;
      margin-left: 2rem;
      margin-top: 1rem;
    }
  }
  p {
    max-width: 60rem;
    margin: 0 auto;
  }

  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5rem;

    &__item {
      border: var(--border);
      flex: 0 0 40rem;
      margin: 2rem 2rem 0 0;

      @include respond(phone) {
        margin: 2rem 0;
      }

      &--image {
        width: 100%;
        height: 30rem;
        object-fit: cover;
      }

      &--contenu {
        padding: 2rem;

        p {
          font-size: var(--extra-small);
        }

        .item-title {
          display: flex;
          justify-content: space-between;
          align-items: first baseline;
          margin-bottom: 2rem;

          p {
            margin: 0;
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

        .item-credits {
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;

          li {
            font-style: italic;
            color: var(--grey-dark);
            font-size: 1.2rem;
          }

          .credits-makers {
            padding-right: 1rem;
          }

          .credits-tech {
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
