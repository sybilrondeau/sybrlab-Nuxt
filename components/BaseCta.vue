<template>
  <section class="cta">
    <div class="cta__main">
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
            <icon-base
              view-box="0 0 256 256"
              icon-name="codepen"
              icon-svg="icon-codepen"
            />
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
              icon-svg="icon-linkedin"
            />
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
              icon-svg="icon-instagram"
            />
          </a>
        </li>
      </ul>
    </div>
    <p class="cta__legal">
      Propriétaire du site Mme Sybil Rondeau 43G rue Georges Lafont
      44300 Nantes - Hébergeur : O2switch - Immatriculation au
      répertoire des métiers de Nantes 51273025000069 - TVA
      FR0A512730250
    </p>
  </section>
</template>

<script>
import IconBase from '@/components/IconBase.vue';

export default {
  components: {
    IconBase,
  },
};
</script>

<style lang="scss" scoped>
.cta {
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
    margin-top: 10%;
    margin-bottom: 20%;

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
      margin-bottom: 5rem;
    }

    li {
      padding: 0 4rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
