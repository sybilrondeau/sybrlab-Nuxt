<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    role="img"
  >
    <title :id="iconName" lang="fr">{{ iconName }} icon</title>
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 100,
    },
    height: {
      type: [Number, String],
      default: 100,
    },
    viewBox: {
      type: String,
      default: '0 0 256 361',
    },
  },
};
</script>
