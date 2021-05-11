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
    <component :is="iconSvg" />
  </svg>
</template>

<script>
import IconHtml from './icons/IconHtml.vue';
import IconCss from './icons/IconCss.vue';
import IconSass from './icons/IconSass.vue';
import IconJs from './icons/IconJs.vue';
import IconRails from './icons/IconRails.vue';
import IconVue from './icons/IconVue.vue';
import IconNuxt from './icons/IconNuxt.vue';
import IconGsap from './icons/IconGsap.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconCodepen from './icons/IconCodepen.vue';
import IconArrow from './icons/IconArrow.vue';
import IconLab from './icons/IconLab.vue';
import IconBook from './icons/IconBook.vue';
import IconCamera from './icons/IconCamera.vue';
import IconWheel from './icons/IconWheel.vue';
import IconMesure from './icons/IconMesure.vue';

export default {
  components: {
    IconHtml,
    IconCss,
    IconSass,
    IconJs,
    IconRails,
    IconVue,
    IconNuxt,
    IconGsap,
    IconInstagram,
    IconLinkedin,
    IconCodepen,
    IconArrow,
    IconLab,
    IconBook,
    IconCamera,
    IconWheel,
    IconMesure,
  },
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
