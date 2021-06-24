<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    role="img"
  >
    <title lang="fr">{{ iconName }} icon</title>
    <component :is="iconSvg" />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    iconSvg: {
      type: String,
      required: true,
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
