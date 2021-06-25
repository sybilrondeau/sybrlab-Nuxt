<template>
  <div class="terms">
    <h1>
      {{ $t('legal.title') }}
    </h1>
    <div>
      <p>{{ $t('legal.legal1') }}</p>
      <p>{{ $t('legal.legal2') }}</p>
      <p>{{ $t('legal.legal3') }}</p>
      <p>{{ $t('legal.legal4') }}</p>
      <p>{{ $t('legal.legal5') }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terms {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  p {
    text-align: left;
  }
}
</style>
