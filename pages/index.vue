<template>
  <div>
    <the-header />
    <main>
      <section id="section2" class="about anim-text">
        <h2><span class="outline">À Propos</span></h2>
        <div class="paragraphes">
          <base-paragraph
            v-for="aboutParagraph in aboutParagraphs"
            :key="aboutParagraph.title"
            :paragraph="aboutParagraph"
          >
            <icon-base
              viewBox="0 0 521.78 450.53"
              :icon-svg="aboutParagraph.svg"
              :icon-name="aboutParagraph.title"
            />
          </base-paragraph>
        </div>
      </section>

      <section id="section3" class="portfolio-section">
        <h2><span class="outline">Portfolio</span></h2>
        <base-portfolio />
      </section>

      <section id="section4" class="competences-section">
        <h2><span class="outline">Compétences</span></h2>
        <base-competence />
      </section>

      <section id="section5" class="contact-section anim-text">
        <h2><span class="outline">Contact</span></h2>
        <div class="paragraphes">
          <base-paragraph
            v-for="aboutParagraph in contactParagraphs"
            :key="aboutParagraph.title"
            :paragraph="aboutParagraph"
          >
          </base-paragraph>
        </div>
      </section>

      <base-cta />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import BaseParagraph from '@/components/BaseParagraph.vue';
import BasePortfolio from '@/components/BasePortfolio.vue';
import BaseCompetence from '@/components/BaseCompetence.vue';
import BaseCta from '@/components/BaseCta.vue';
import IconBase from '@/components/IconBase.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from '~/static/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

const contactParagraphs = Object.freeze([
  {
    title: 'Missions Front-end',
    description: `Vous êtes une <strong>Entreprise</strong>, une <strong>Start-up</strong>,
    une <strong>Agence Web</strong> ou un(e) <strong>Développeur(euse)</strong> et vous avez besoin d’une
    développeuse Front-end ?<br />
    Je suis disponible pour des <strong>missions</strong> de
    courte ou longue durée, et à l'écoute des propositions de postes dans ce domaine.`,
  },
]);

const aboutParagraphs = Object.freeze([
  {
    title: 'Expertise',
    description: `Je suis spécialisée en développement
    <strong>Front-end</strong> avec une appétence
    pour <strong>l'animation</strong> et le <strong>Javascript</strong>, depuis ma
    certification au Wagon à Nantes en mars 2020.`,
    svg: 'icon-mesure',
  },
  {
    title: 'Expérience',
    description: `J'ai réalisé des sites WordPress pendant 2 ans.
    Cela m'a permis de m'intéresser aux notions de
      <strong>performances, accessibilité, sécurité et SEO</strong> :
    Un ensemble de bonnes pratiques à implémenter dès la construction d'un site, indispensable à
    sa longévité et une base solide à un référencement naturel de qualité.`,
    svg: 'icon-book',
  },
  {
    title: 'Parcours',
    description: `Je suis aussi SybR,
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
    tant que <b>manipulatrice en radiologie</b> médicale aux urgences
    (et de nuit !).`,
    svg: 'icon-camera',
  },
]);

export default {
  components: {
    TheHeader,
    BaseParagraph,
    BasePortfolio,
    BaseCompetence,
    BaseCta,
    IconBase,
  },
  created() {
    this.contactParagraphs = contactParagraphs;
    this.aboutParagraphs = aboutParagraphs;
  },
  mounted() {
    function animSections(sectionItems, trigger, stagger) {
      gsap.from(sectionItems, {
        scrollTrigger: {
          trigger,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: '4rem',
        opacity: 0,
        duration: 1,
        stagger,
      });
    }

    animSections('.about .paragraph', '.about .paragraph', 0.33);
    animSections(
      '.contact-section .paragraph',
      '.contact-section .paragraph',
      0.33,
    );

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

<style lang="scss" scoped>
.about {
  width: 100%;
}
.paragraphes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
