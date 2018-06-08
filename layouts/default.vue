<template>
  <section class="container">
    <div class="nd-header">
      <logo/>
      <header-nav/>
    </div>

    <nuxt/>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import HeaderNav from '~/components/HeaderNav.vue'

  export default {
    components: {
      Logo,
      HeaderNav
    }
  }
</script>

<style lang="scss">
  @import '~assets/variables';

  .container {
    margin: 0 auto;
    max-width: 68rem;
  }

  .nd-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>
