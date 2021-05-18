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
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @include respond(phone) {
    margin-bottom: 5rem;
  }

  .footer-text {
    flex: 0 1 70%;
    font-size: 1.2rem;

    @includes respond(phone) {
      flex: 0 1 90%;
    }
  }
}
</style>
