<template>
  <div @mousemove="customCursor">
    <div
      ref="cursor"
      :class="[{ 'link-grow': isHover }, cursorClass]"
      :style="{
        top: top,
        left: left,
      }"
      target="target"
    ></div>
    <the-navBar />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheNavBar,
    TheFooter,
  },
  data() {
    return {
      top: 0,
      left: 0,
      isHover: false,
      cursorClass: 'cursor',
      target: ['a', 'nuxt-link', 'body-link'],
    };
  },
  methods: {
    customCursor(e) {
      this.top = e.pageY + 'px';
      this.left = e.pageX + 'px';

      if (
        this.target.includes(e.target.className) ||
        this.target.includes(e.target.tagName)
      ) {
        this.isHover = true;
      } else {
        this.isHover = false;
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
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

@keyframes arrowScale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
    transform-origin: left;
  }
}
</style>
