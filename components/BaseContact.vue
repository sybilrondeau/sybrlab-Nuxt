<template>
  <div class="paragraphes">
    <div class="paragraph">
      <div class="paragraph__title">
        <h3>Missions Front-end et JS</h3>
      </div>
      <div class="paragraph__text">
        <p>
          Vous êtes <strong>Agence</strong> Web ou
          <strong>Développeur</strong> et vous avez besoin d’une
          développeuse Front-end et/ou Javascript freelance ?<br />
          Je suis disponible pour des <strong>missions</strong> de
          courte ou longue durée.
        </p>
      </div>
    </div>
    <div class="paragraph">
      <div class="paragraph__title">
        <h3>Création de site</h3>
      </div>
      <div class="paragraph__text">
        <p>
          Vous êtes <strong>entrepreneur</strong> et avez besoin d’un
          site ou d'une application ?<br />
          Je travaille avec une équipe de freelance pour répondre à
          tous vos besoins.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.from('.contact-section .paragraph', {
      scrollTrigger: {
        trigger: '.contact-section .paragraph',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: '4rem',
      opacity: 0,
      duration: 1,
      stagger: 0.33,
    });
  },
};
</script>

<style lang="scss" scoped></style>
