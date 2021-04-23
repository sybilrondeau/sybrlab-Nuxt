<template>
  <div>
    <TheHeader />
    <main>
      <section id="section2" class="about anim-text">
        <h2><span class="outline">À Propos</span></h2>
        <div class="paragraphes">
          <base-paragraph
            v-for="aboutParagraph in aboutParagraphs"
            :key="aboutParagraph.title"
            :paragraph="aboutParagraph"
          >
            <component :is="aboutParagraph.svg"></component>
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

      <BaseCta />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import BaseParagraph from '@/components/BaseParagraph.vue';
import BasePortfolio from '@/components/BasePortfolio.vue';
import BaseCompetence from '@/components/BaseCompetence.vue';
import BaseCta from '@/components/BaseCta.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconCodepen from '@/components/icons/IconCodepen.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconBook from '@/components/icons/IconBook.vue';
import IconCamera from '@/components/icons/IconCamera.vue';
import IconWheel from '@/components/icons/IconWheel.vue';
import IconMesure from '@/components/icons/IconMesure.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    TheHeader,
    BaseParagraph,
    BasePortfolio,
    BaseCompetence,
    BaseCta,
    IconCodepen,
    IconInstagram,
    IconLinkedin,
    IconBook,
    IconCamera,
    IconWheel,
    IconMesure,
  },
  data() {
    return {
      aboutParagraphs: [
        {
          title: 'Expertise',
          description: `Je suis spécialisée en développement
          <strong>Front-end et Javascript</strong> avec une appétence
          pour <strong>l'animation</strong>. <br />Depuis ma
          certification au Wagon Nantes en mars 2020, je me forme au
          long cours activement dans ces domaines.`,
          svg: 'icon-mesure',
        },
        {
          title: 'Bonnes Pratiques',
          description: `Dans tous les sites que je développe, je porte une attention
          particulière aux notions de
          <strong>performance, accessibilité, sécurité, SEO</strong> :
          un ensemble de bonnes pratiques à implémenter dès la
          construction d'un site, indispensable à sa longévité et une
          base solide à un référencement naturel de qualité.`,
          svg: 'icon-book',
        },
        {
          title: 'Équipe',
          description: `Je travaille en <strong>collaboration</strong> avec des
          développeurs Back-end, web Designers, Directeurs Artistique,
          Graphistes, Rédacteurs, Photographes, Vidéastes...<br />
          Pour créer des <strong>sites</strong> internet ou des
          <strong>applications</strong> uniques.`,
          svg: 'icon-wheel',
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
          tant que manipulatrice en radiologie médicale aux urgences
          (et de nuit !).`,
          svg: 'icon-camera',
        },
      ],
      contactParagraphs: [
        {
          title: 'Missions Front-end et JS',
          description: `Vous êtes <strong>Agence</strong> Web ou
          <strong>Développeur</strong> et vous avez besoin d’une
          développeuse Front-end et/ou Javascript freelance ?<br />
          Je suis disponible pour des <strong>missions</strong> de
          courte ou longue durée.`,
        },
        {
          title: 'Création de site',
          description: `Vous êtes <strong>entrepreneur</strong> et avez besoin d’un
          site ou d'une application ?<br />
          Je travaille avec une équipe de freelance pour répondre à
          tous vos besoins.`,
        },
      ],
    };
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
