<template>
  <div>
    <TheHeader />
    <main>
      <section id="section2" class="about anim-text">
        <h2><span class="outline">À Propos</span></h2>
        <base-paragraph />
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
        <base-contact />
      </section>
      <section class="cta">
        <div class="cta__main">
          <h2 class="cta__title">Un projet ?</h2>
          <p class="cta__p">
            <a
              id="email"
              class="body-link"
              href="mailto:hello@sybrlab.com"
              rel="noopener noreferrer"
              target="_blank"
              >hello[at]sybrlab.com</a
            >
          </p>
          <p class="cta__p">
            <a
              id="tel"
              class="body-link"
              href="tel:+33629426276"
              rel="noopener noreferrer"
              target="_blank"
              >06 29 42 62 76</a
            >
          </p>
        </div>
        <div>
          <ul class="cta__social">
            <li>
              <a
                class="body-link"
                href="https://codepen.io/sybilrondeau"
                alt="Codepen"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Codepen de Sybrlab"
              >
                <icon-base view-box="0 0 256 256" icon-name="codepen"
                  ><icon-codepen
                /></icon-base>
              </a>
            </li>
            <li>
              <a
                class="body-link"
                href="https://www.linkedin.com/in/sybil-rondeau-6ba54312a/"
                alt="Linkedin"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Linkekin de Sybil Rondeau"
              >
                <icon-base
                  view-box="0 0 22.258 22.258"
                  icon-name="linkedin"
                  ><icon-linkedin
                /></icon-base>
              </a>
            </li>
            <li>
              <a
                class="body-link"
                href="https://www.instagram.com/sybil_rondeau"
                alt="Instagram"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram de Sybil Rondeau"
              >
                <icon-base
                  view-box="0 0 256 256"
                  icon-name="instagram"
                  ><icon-instagram
                /></icon-base>
              </a>
            </li>
          </ul>
        </div>
        <p class="cta__legal">
          Propriétaire du site Mme Sybil Rondeau 43G rue Georges
          Lafont 44300 Nantes - Hébergeur : O2switch - Immatriculation
          au répertoire des métiers de Nantes 51273025000069 - TVA
          FR0A512730250
        </p>
      </section>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import BaseParagraph from '@/components/BaseParagraph.vue';
import BasePortfolio from '@/components/BasePortfolio.vue';
import BaseCompetence from '@/components/BaseCompetence.vue';
import BaseContact from '@/components/BaseContact.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconCodepen from '@/components/icons/IconCodepen.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';

export default {
  components: {
    TheHeader,
    BaseParagraph,
    BasePortfolio,
    BaseCompetence,
    BaseContact,
    IconCodepen,
    IconInstagram,
    IconLinkedin,
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
}
.cta {
  height: 100vh;
  text-align: center;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  position: relative;

  &__legal {
    text-align: center;
    align-self: end;
    width: 70%;
    font-size: 1.2rem;

    @include respond(phone) {
      width: 90%;
    }
  }

  &__main {
    margin-top: 20%;

    .cta__title {
      text-align: center;
      font-size: 6.854rem;
      margin: 0 0 2rem;

      @include respond(phone) {
        font-size: 4.236rem;
      }
    }

    #email {
      font-size: 4.236rem;

      @include respond(phone) {
        font-size: 2.618rem;
      }
    }

    #tel {
      font-size: 2.618rem;
    }
  }

  &__social {
    display: none;

    @include respond(phone) {
      display: flex;
    }

    li {
      padding: 0 4rem;
    }

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
