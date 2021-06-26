<template>
  <footer>
    <ul class="social-links">
      <li>
        <a
          href="https://github.com/sybilrondeau"
          alt="Github"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Github de Sybrlab"
        >
          <base-icon
            view-box="0 0 256 250"
            icon-name="github"
            icon-svg="base-icon-static-github"
          />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/sybilrondeau"
          alt="Codepen"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Codepen de Sybrlab"
        >
          <base-icon
            view-box="0 0 256 256"
            icon-name="codepen"
            icon-svg="base-icon-static-codepen"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sybil-rondeau-6ba54312a/"
          alt="Linkedin"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Linkekin de Sybil Rondeau"
        >
          <base-icon
            view-box="0 0 22.258 22.258"
            icon-name="linkedin"
            icon-svg="base-icon-static-linkedin"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/sybil_rondeau"
          alt="Instagram"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Instagram de Sybil Rondeau"
        >
          <base-icon
            view-box="0 0 256 256"
            icon-name="instagram"
            icon-svg="base-icon-static-instagram"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  align-items: center;
  background-color: var(--backg);
  height: 5rem;
  width: 100vw;
  border-right: none;
  border-top: var(--border);

  @include respond(phone) {
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 900;
  }

  li {
    flex: 1 1 25%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

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
