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
          <icon-base view-box="0 0 100 100" icon-name="arrow"
            ><icon-arrow
          /></icon-base>
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
import IconBase from './IconBase.vue';
import IconArrow from './icons/IconArrow.vue';
import { ScrollTrigger } from '~/static/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    IconBase,
    IconArrow,
  },
  data() {
    return {
      portfolio: [
        {
          id: '01',
          title: 'Sybr Lab',
          description: `J’aime les sites <strong>sobres</strong>, épurés, fluides, qui
        laissent une belle place à la typographie et au
        <strong>design</strong>. <br />J'ai utilisé une échelle
        modulaire basée sur le nombre d'Or pour la typographie, en
        clin d'oeil à ma carrière de photographe. <br />Le site est un
        One-page simple réalisé d'abord sans framework avec un simple bundler Parcel, 
        puis pour sa V3 au sein du framework Vue.js et Nuxt.
        J'utilise la librairie Javascript Greensock pour certaines
        animations.`,
          image: 'sybrlab-650',
          margin: '0 25.89rem 0 0',
          creditMakersOne: 'Site sur-mesure',
          creditMakersTwo: 'Web Design : Sybil Rondeau',
          creditMakersThree: 'Illustrations : Loeiza Coccolini',
          creditTechOne: 'Vue.js',
          creditTechTwo: 'NuxT',
          creditTechThree: 'GSAP',
        },
        {
          id: '02',
          title: 'WSSA',
          description: `Un travail d’implémentation du Front-end pour une
                <strong>application</strong> qui recense les résultats des
                compétitions de de la World Slalom Skaters Association. Le
                palmarès est affiché par des tables gérées par le plugin
                Datatables en Javascript dans le framework
                <strong>Ruby on Rails</strong>.`,
          image: 'wssa-650',
          margin: '0 0 0 25.89rem',
          creditMakersOne: 'Application DrakkR - Nantes',
          creditMakersTwo: 'Web Design : Ambroise Nicolao',
          creditMakersThree: '',
          creditTechOne: 'Ruby on Rails',
          creditTechTwo: 'Datatables',
          creditTechThree: '',
        },
        {
          id: '03',
          title: 'PhotographR',
          description: `Cette application est le <strong>projet de fin de Wagon réalisé en dix jours</strong>
                avec deux autres élèves. Il s'agit d'un gestionnaire de tâches
                pour les photographes qui centralise également toutes les
                informations clients. Découvrez le sur <a class="body-link" href="https://youtu.be/E-15MxRZ4BU?t=82" 
                target="_blank" rel="noopener noreferrer">YouTube</a> présentée par la porteuse de projet Ophélie.`,
          image: 'photographr-650',
          margin: '0 25.89rem 0 0',
          creditMakersOne: 'Projet du Wagon',
          creditMakersTwo: 'Travail en équipe de 3',
          creditMakersThree: '',
          creditTechOne: 'Ruby on Rails',
          creditTechTwo: '',
          creditTechThree: '',
        },
      ],
    };
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
