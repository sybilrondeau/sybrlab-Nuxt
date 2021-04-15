<template>
  <header id="section1" class="intro">
    <div class="portrait-svg">
      <icon-portrait />
    </div>
    <h1>
      Je suis Sybil Rondeau,<br /><span class="outline"
        >Developpeuse Front-end et Javascript.</span
      >
    </h1>
  </header>
</template>

<script>
import IconPortrait from './icons/IconPortrait.vue';

export default {
  components: {
    IconPortrait,
  },
};
</script>

<style lang="scss" scoped>
.intro {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .portrait-svg {
    flex: 0 1 40rem;

    @include respond(phone) {
      flex: 0 1 35rem;
    }
  }

  h1 {
    text-align: center;
    flex: 0 1 75rem;
    padding: 0 2rem;
  }
}
</style>
