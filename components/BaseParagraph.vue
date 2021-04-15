<template>
  <div class="paragraphes">
    <div class="paragraph">
      <div class="paragraph__title">
        <h3>Expertise</h3>
        <icon-mesure />
      </div>
      <div class="paragraph__text">
        <p>
          Je suis spécialisée en développement
          <strong>Front-end et Javascript</strong> avec une appétence
          pour <strong>l'animation</strong>. <br />Depuis ma
          certification au Wagon Nantes en mars 2020, je me forme au
          long cours activement dans ces domaines.
        </p>
      </div>
    </div>
    <div class="paragraph">
      <div class="paragraph__title">
        <h3>Bonnes Pratiques</h3>
        <icon-book />
      </div>
      <div class="paragraph__text">
        <p>
          Dans tous les sites que je développe, je porte une attention
          particulière aux notions de
          <strong>performance, accessibilité, sécurité, SEO</strong> :
          un ensemble de bonnes pratiques à implémenter dès la
          construction d'un site, indispensable à sa longévité et une
          base solide à un référencement naturel de qualité.
        </p>
      </div>
    </div>
    <div class="paragraph">
      <div class="paragraph__title">
        <h3>Équipe</h3>
        <icon-wheel />
      </div>
      <div class="paragraph__text">
        <p>
          Je travaille en <strong>collaboration</strong> avec des
          développeurs Back-end, web Designers, Directeurs Artistique,
          Graphistes, Rédacteurs, Photographes, Vidéastes...<br />
          Pour créer des <strong>sites</strong> internet ou des
          <strong>applications</strong> uniques.
        </p>
      </div>
    </div>
    <div class="paragraph">
      <div class="paragraph__title">
        <h3>Parcours</h3>
        <icon-camera />
      </div>
      <div class="paragraph__text">
        <p>
          Je suis aussi SybR,
          <strong
            ><a
              class="body-link"
              href="https://sybilrondeau.com"
              target="_blank"
              rel="noopener noreferrer"
              >photographe</a
            ></strong
          >
          documentaire de famille depuis plus de 10 ans.<br />
          Ce métier était ma première reconversion, après 12 ans en
          tant que manipulatrice en radiologie médicale aux urgences
          (et de nuit !).
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IconBook from './icons/IconBook.vue';
import IconCamera from './icons/IconCamera.vue';
import IconWheel from './icons/IconWheel.vue';
import IconMesure from './icons/IconMesure.vue';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    IconBook,
    IconCamera,
    IconWheel,
    IconMesure,
  },
  mounted() {
    gsap.from('.about .paragraph', {
      scrollTrigger: {
        trigger: '.about .paragraph',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: '4rem',
      opacity: 0,
      duration: 1,
      stagger: 0.33,
    });

    gsap.from('.draw-svg', {
      scrollTrigger: {
        trigger: '.about .paragraph__title',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      duration: 6,
      drawSVG: '50% 50%',
    });
  },
};
</script>

<style lang="scss" scoped></style>
