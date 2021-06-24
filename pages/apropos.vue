<template>
  <section class="about anim-text">
    <div class="about__item">
      <div class="about__item--image">
        <base-image-book />
      </div>
      <div class="about__item--content">
        <h2>{{ $t('about.paragraphs.paragraph1.title') }}</h2>
        <p v-html="$t('about.paragraphs.paragraph1.description')"></p>
      </div>
    </div>
    <div class="about__item">
      <div class="about__item--image">
        <base-image-camera />
      </div>
      <div class="about__item--content">
        <h2>{{ $t('about.paragraphs.paragraph2.title') }}</h2>
        <p v-html="$t('about.paragraphs.paragraph2.description')"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin: 5rem 0;

    &--image {
      flex: 0 1 100%;
      display: flex;
      justify-content: center;

      svg {
        width: 8rem;
        height: 8rem;
      }
    }

    &--content {
      flex: 0 1 100%;

      h2 {
        margin: 2rem 0;
      }

      p {
        max-width: 60rem;
      }
    }
  }
}
</style>
