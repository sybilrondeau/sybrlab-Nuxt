<template>
  <section class="cta">
    <div class="cta__main">
      <p class="cta__p">
        <a
          id="email"
          class="body-link"
          href="mailto:hello@sybrlab.com"
          rel="noopener noreferrer"
          target="_blank"
          >hello[at]sybrlab.com</a
        >
      </p>
      <p class="cta__p">
        <a
          id="tel"
          class="body-link"
          href="tel:+33629426276"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="+ 33. 629. 426. 276"
          >{{ $t('tel') }}</a
        >
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  height: 25rem;
  margin-bottom: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;

  &__main {
    .cta__title {
      text-align: center;
      font-size: var(--extra-big);
      margin: 0 0 2rem;

      @include respond(phone) {
        font-size: var(--big);
      }
    }

    #email {
      font-size: var(--big);

      @include respond(phone) {
        font-size: var(--normal);
      }
    }

    #tel {
      font-size: var(--normal);
    }
  }
}
</style>
