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
import IconHtml from './icons/static/IconHtml.vue';
import IconCss from './icons/static/IconCss.vue';
import IconSass from './icons/static/IconSass.vue';
import IconJs from './icons/static/IconJs.vue';
import IconRails from './icons/static/IconRails.vue';
import IconVue from './icons/static/IconVue.vue';
import IconNuxt from './icons/static/IconNuxt.vue';
import IconGsap from './icons/static/IconGsap.vue';
import IconInstagram from './icons/static/IconInstagram.vue';
import IconLinkedin from './icons/static/IconLinkedin.vue';
import IconCodepen from './icons/static/IconCodepen.vue';
import IconArrow from './icons/static/IconArrow.vue';
import IconLab from './icons/static/IconLab.vue';
import IconBook from './icons/animate/IconBook.vue';
import IconCamera from './icons/animate/IconCamera.vue';
import IconMesure from './icons/animate/IconMesure.vue';
import IconGithub from './icons/static/IconGithub.vue';

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
    IconMesure,
    IconGithub,
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
