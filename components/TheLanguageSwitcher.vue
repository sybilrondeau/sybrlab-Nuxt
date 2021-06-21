<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="locale in showLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      aria-label="language switcher"
      >{{ locale.code }}
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-switcher {
  font-family: 'Exo', sans-serif;
  font-size: var(--extra-small);
  //text-transform: uppercase;
  margin-left: 4rem;

  a {
    color: var(--grey-dark);
  }

  a:hover {
    color: var(--primary);
  }
}
</style>
