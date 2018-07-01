<template>
  <div class="nd-footer">
    <div class="nd-footer__copyright">
      &copy; Nicole Dominguez, NerdyFab LLC 1994-2018
    </div>
  </div>
</template>

<style lang="scss">
  @import '~assets/variables';

  .nd-footer {
    margin: 1.5rem 0;
  }

  .nd-footer__copyright {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.02rem;
    font-size: $font-size-small;
    color: $color-gray;
    margin: 3rem;
    display: block;
  }
</style>
