<template>
  <h1 class="nd-logo-container">
    <a href="/">
      <img src="/images/nd-logo__purple.svg" class="nd-logo" alt="Nicole Dominguez"/>
    </a>
  </h1>
</template>

<style lang="scss">
  @import '~assets/variables';

  .nd-logo-container {
    width: 50%;
    margin: 1.5rem auto;

    @media (min-width: $narrow-tablet) {
      margin: 1rem 0;
      width: 25%;
    }
  }

  .nd-logo {
    width: 100%;
  }
</style>
