<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
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
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  font-size: 2rem;
}
</style>
