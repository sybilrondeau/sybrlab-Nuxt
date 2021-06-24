<template>
  <div>
    <nuxt-link :to="{ name: 'apropos' }" class="nav-link">{{
      $t('about.title')
    }}</nuxt-link>

    <nuxt-link :to="{ name: 'portfolio' }" class="nav-link">{{
      $t('portfolio.title')
    }}</nuxt-link>

    <nuxt-link :to="{ name: 'contact' }" class="nav-link">{{
      $t('contact.title')
    }}</nuxt-link>
    <the-language-switcher />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav-link {
  color: var(--grey-dark);
  font-family: 'Exo', sans-serif;
  font-weight: 600;
  font-size: var(--extra-small);
  padding-left: 4rem;
  transition: transform 0.2s;

  @include respond(phone) {
    color: white;
    display: block;
    width: 50%;
    margin: 10rem auto;
    font-size: var(--big);
  }
}
.nav-link:hover {
  color: var(--primary);

  @include respond(phone) {
    color: var(--grey-light);
    transform: skew(-20deg);
  }
}
.nuxt-link-active {
  color: var(--primary);
  transform: skew(-20deg);

  @include respond(phone) {
    color: var(--grey-light);
  }
}
</style>
