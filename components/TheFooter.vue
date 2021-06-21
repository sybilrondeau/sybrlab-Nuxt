<template>
  <div class="footer">
    <p class="footer-text">
      {{ $t('legal') }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--backg);
  padding: 1rem;
  z-index: 100;

  @include respond(phone) {
  }

  .footer-text {
    flex: 0 1 60%;
    font-size: 1.2rem;
    text-align: center;

    @include respond(tab) {
      flex: 0 1 85%;
    }
  }
}
</style>
