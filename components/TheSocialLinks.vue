<template>
  <ul class="social-links">
    <li>
      <a
        class="body-link"
        href="https://github.com/sybilrondeau"
        alt="Github"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Github de Sybrlab"
      >
        <icon-base
          view-box="0 0 256 250"
          icon-name="github"
          icon-svg="icon-github"
        />
      </a>
    </li>
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
      <the-language-switcher class="body-link" />
    </li>
  </ul>
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
.social-links {
  width: 6rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  @include respond(phone) {
    height: 4rem;
    width: 100vw;
    background-color: white;
    flex-direction: row;
  }

  li {
    flex: 1 1 25%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    @include respond(phone) {
    }

    svg {
      width: 2rem;
      height: 2rem;
    }

    svg:hover {
      fill: var(--primary);
    }
  }
}
</style>
