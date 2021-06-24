<template>
  <div>
    <header class="intro">
      <div class="intro__portrait">
        <base-image-portrait
          aria-label="Portrait dessin en une ligne de Sybil Rondeau"
        />
      </div>
      <div class="intro__contenu">
        <h1>{{ $t('intro.paragraph1') }},</h1>
        <p>
          <strong>{{ $t('intro.paragraph2') }}</strong>
        </p>
        <p>
          {{ $t('intro.paragraph3') }}
        </p>
        <div class="competences">
          <base-icon icon-svg="base-icon-static-sass" />
          <base-icon icon-svg="base-icon-static-vue" />
          <base-icon icon-svg="base-icon-static-nuxt" />
          <base-icon icon-svg="base-icon-static-gsap" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 90vh;

  &__portrait {
    flex: 0 1 50%;
    display: flex;
    justify-content: flex-end;

    // @include respond(phone) {
    //   flex: 0 1 100%;
    // }
  }

  &__contenu {
    flex: 0 1 50%;

    @include respond(tab) {
      flex: 0 1 100%;
    }

    p,
    h1 {
      max-width: 40rem;

      @include respond(tab) {
        margin: 0 auto;
      }
    }
    .competences {
      width: 100%;
      margin: 5rem auto;
      display: flex;
      justify-content: flex-start;

      @include respond(tab) {
        justify-content: center;
      }

      svg {
        filter: grayscale(100%);
        width: 6rem;
        height: 6rem;
        margin-right: 1rem;
      }
    }
  }
}
</style>
