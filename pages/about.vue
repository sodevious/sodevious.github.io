<template>
  <div class="nd-row">
    <div class="nd-content-item about-item" v-for="item in about" :key="item.title">


      <template v-if="item.url">
        <a :href="item.url" target="_blank" class="nd-about-item__title" v-html="item.title">{{ item.title }}</a>

        <a :href="item.url" target="_blank" class="nd-about-item__source">
          <span>{{ item.type }}</span>
          {{ item.publication }}
        </a>
      </template>
      <template v-else>

        <p class="nd-about-item__title" v-html="item.title">{{ item.title }}</p>

        <div class="nd-about-item__source">
          <span>{{ item.type }}</span>
          {{ item.publication }}
          </div>
      </template>
    </div>
  </div>
</template>

<script>
  import about from '../content/about'

  export default {
    data () {
      return {
        about
      }
    }
  }
</script>
