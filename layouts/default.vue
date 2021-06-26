<template>
  <div @mousemove="moveCustomCursor">
    <div
      ref="cursor"
      :class="[{ 'link-grow': isHover }, cursorClass]"
      :style="{
        top: top,
        left: left,
      }"
      target="target"
    ></div>
    <div class="layout-container">
      <the-nav-bar />
      <div class="main">
        <Nuxt />
      </div>
      <the-footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 0,
      left: 0,
      isHover: false,
      cursorClass: 'cursor',
      targets: ['body-link'],
    };
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
  methods: {
    moveCustomCursor(e) {
      this.top = e.pageY + 'px';
      this.left = e.pageX + 'px';

      this.isHover = !!e.composedPath().find((el) => {
        if (el.classList) {
          return (
            this.targets.includes(el.tagName) ||
            this.targets.find((t) => el.classList.contains(t))
          );
        }
        return false;
      });
    },
  },
};
</script>

<style lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main {
    width: 100%;
    height: 100%;
    padding: 0 2rem;
  }
  .cursor {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: white;
    border: 1px solid white;
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: -20;
    opacity: 1;
    transition: transform 0.2s, background-color 0.2s;

    @media (any-pointer: none) {
      display: none;
    }
  }
  .link-grow {
    transform: scale(6) translate(-10%, -10%);
    animation: blob 3s linear infinite alternate;
  }
}

@keyframes blob {
  0% {
    border-radius: 50%;
  }
  50% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }
  100% {
    border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%;
  }
}
</style>
