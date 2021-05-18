<template>
  <footer class="footer">
    <ul class="footer__links">
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
            class="body-link"
            view-box="0 0 256 256"
            icon-name="instagram"
            icon-svg="icon-instagram"
          />
        </a>
      </li>
      <li>
        <the-language-switcher
          class="body-link"
          aria-label="language switcher"
        />
      </li>
    </ul>
  </footer>
</template>

<script>
import IconBase from './IconBase.vue';
import TheLanguageSwitcher from './TheLanguageSwitcher.vue';

export default {
  components: {
    IconBase,
    TheLanguageSwitcher,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 100;

  &__links li {
    z-index: 100;
    padding: 0rem 4rem 2rem;

    @include respond(phone) {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-bottom: 4rem;
    }

    svg:hover {
      fill: var(--primary);
    }
  }
}
</style>
