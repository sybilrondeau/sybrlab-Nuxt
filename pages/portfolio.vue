<template>
  <section class="portfolio-section">
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
            <div class="title-arrow">
              <h2>{{ portfolioItem.title }}</h2>
            </div>
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
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
export default {};
</script>

<style lang="scss" scoped>
.portfolio-section {
  margin: 5rem auto;

  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__item {
      border: var(--border);
      flex: 0 1 40rem;
      margin: 2rem;

      @include respond(phone) {
        margin: 2rem 0;
      }

      &--image {
        width: 100%;
        height: 30rem;
        object-fit: cover;
        border-radius: 0.5rem;
      }

      &--contenu {
        padding: 2rem;

        p {
          font-size: var(--extra-small);
        }

        .item-title {
          //border-top: 2px solid var(--grey-dark);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          //padding-top: 1rem;

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
