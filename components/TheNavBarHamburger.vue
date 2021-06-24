<template>
  <div @click="togglePhoneMenu">
    <div ref="hamburgerIcon" class="hamburger__icon"></div>
    <transition name="slide">
      <div v-if="isOpen" class="hamburger__menu">
        <base-nav-bar-menu />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    togglePhoneMenu() {
      this.isOpen = !this.isOpen;
      this.$refs.hamburgerIcon.classList.toggle('closed');
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger__icon {
  & {
    position: relative;
    z-index: 900;
  }
  &,
  &:before,
  &:after {
    width: 2rem;
    height: 2px;
    background-color: var(--grey-dark);
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: transform 0.3s;
  }
  &:before {
    top: -8px;
  }
  &:after {
    top: 8px;
  }
  &.closed:before,
  &.closed:after {
    background-color: white;
  }
  &.closed:before {
    transform: rotate(22deg);
    transform-origin: left;
  }
  &.closed:after {
    transform: rotate(-22deg);
    transform-origin: left;
  }
}
.hamburger__menu {
  position: fixed;
  top: 0;
  transform: translate3D(-80%, 0, 0);
  width: 120vw;
  height: 100vh;
  background-color: var(--grey-dark);
}

.slide-enter,
.slide-leave-to {
  transform: translate3D(80%, 0, 0);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-out;
}
</style>
