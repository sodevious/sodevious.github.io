<template>
  <section class="container">
    <div class="nd-header">
      <logo/>
      <header-nav/>
    </div>

    <nuxt/>

    <site-footer />
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import HeaderNav from '~/components/HeaderNav.vue'
  import SiteFooter from '~/components/Footer.vue'

  export default {
    components: {
      Logo,
      HeaderNav,
      SiteFooter
    }
  }
</script>

<style lang="scss">
  @import '~assets/variables';

  .container {
    margin: 0 auto;
    max-width: 68rem;
    padding: 0 1rem;
  }

  .nd-header {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 3rem 0;
    text-align: center;

    @media (min-width: $narrow-tablet) {
      display: flex;
      margin: 1rem 0 0 0;
    }
  }
</style>
