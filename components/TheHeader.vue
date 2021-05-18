<template>
  <header id="section1" class="intro">
    <div class="portrait-svg">
      <base-portrait
        aria-label="Portrait dessin en une ligne de Sybil Rondeau"
      />
    </div>
    <h1>
      {{ $t('siteTitle1') }} Sybil Rondeau,<br /><span class="outline"
        >{{ $t('siteTitle2') }}<br />{{ $t('siteTitle3') }}</span
      >
    </h1>
  </header>
</template>

<script>
import BasePortrait from './BasePortrait.vue';

export default {
  components: {
    BasePortrait,
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
