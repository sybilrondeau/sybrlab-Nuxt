<template>
  <div class="paragraph">
    <div class="paragraph__image">
      <slot></slot>
    </div>
    <div class="paragraph__content">
      <h2>{{ paragraph.title }}</h2>
      <p v-html="paragraph.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraph: {
      type: Object,
      default() {
        return { title: 'default' };
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
