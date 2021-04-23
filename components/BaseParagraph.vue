<template>
  <div ref="ref" class="paragraph">
    <div class="paragraph__title">
      <h3>{{ paragraph.title }}</h3>
      <slot></slot>
    </div>
    <div class="paragraph__text">
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

<style lang="scss" scoped>
.paragraph {
  flex: 0 1 40rem;
  margin-bottom: 1rem;

  .paragraph__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 1.2rem;

    svg {
      width: 5rem;
      height: 5rem;
      fill: var(--backg);
      stroke: var(--grey-dark);
      stroke-width: 15;
    }
  }

  .paragraph__text {
    border-top: 2px solid var(--grey-dark);
    margin: 1rem 1rem 4rem;

    p {
      padding: 2rem 0;
    }
  }
}
</style>
