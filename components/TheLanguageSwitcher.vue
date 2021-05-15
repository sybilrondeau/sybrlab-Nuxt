<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="locale in showLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      <span
        :class="
          'flag-icon flag-icon-squared flag-icon-' +
          locale.iso.slice(-2).toLowerCase()
        "
      ></span>
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
.flag-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
</style>
