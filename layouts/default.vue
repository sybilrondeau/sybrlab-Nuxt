<template>
  <div>
    <div class="cursor"></div>
    <TheNavBar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheNavBar,
    TheFooter,
  },
}
</script>

<style></style>
