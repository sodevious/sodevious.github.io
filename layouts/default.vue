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
