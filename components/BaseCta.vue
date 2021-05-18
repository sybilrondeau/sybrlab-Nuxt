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
          aria-label="+ 33. 629. 426. 276"
          >{{ $t('tel') }}</a
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
        <li>
          <the-language-switcher class="body-link" />
        </li>
      </ul>
    </div>
    <p class="cta__legal">
      {{ $t('legal') }}
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
    z-index: 500;

    .cta__title {
      text-align: center;
      font-size: var(--extra-big);
      margin: 0 0 2rem;

      @include respond(phone) {
        font-size: var(--big);
      }
    }

    #email {
      font-size: var(--big);

      @include respond(phone) {
        font-size: var(--normal);
      }
    }

    #tel {
      font-size: var(--normal);
    }
  }

  &__social {
    display: none;

    @include respond(phone) {
      display: flex;
      margin-bottom: 5rem;
    }

    li {
      padding: 0 3rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
