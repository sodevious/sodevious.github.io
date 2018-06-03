<template>
  <section class="container">
    <div class="nd-header">
      <logo/>
      <header-nav/>
    </div>
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

<style>
  .nd-header {
    display: flex;
    justify-content: space-between;
  }
</style>
