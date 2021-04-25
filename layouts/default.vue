<template>
  <div>
    <the-cursor />
    <the-navBar />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheCursor from '@/components/TheCursor.vue';

export default {
  components: {
    TheNavBar,
    TheFooter,
    TheCursor,
  },
};
</script>
