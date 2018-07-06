<template>
  <div class="nd-nav">
    <a href="/about" class="nd-nav-item">
      About
    </a>

    <a href="#" target="_blank" class="nd-nav-item">
      Resumé
    </a>

    <a href="/portfolio" class="nd-nav-item">
      Portfolio
    </a>

    <!--
    <a href="/portfolio" class="nd-nav-item">
      <i class="fa fa-image"></i>
      Contact
    </a>-->
  </div>
</template>

<style lang="scss">
  @import '~assets/variables';

  .nd-nav-item {
    margin: 0 1rem;
    text-decoration: none;
    color: $color-purple-dark;

    @media (min-width: $narrow-tablet) {
      margin-left: 1.5rem;
      margin-right: 0;
    }
  }
</style>
