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

<style lang="scss">
  @import '~assets/variables';

  .nd-about-item__title {
    font-size: $lg-font-size;
    font-family: $font-freight;
    color: $color-purple-dark;
    line-height: 1.25em;
    padding-bottom: 30px;
    display: block;
    margin: 0;
    position: relative;

    &:hover {
      color: $color-pink;
    }

    .fa {
      font-size: $sm-font-size;
      margin-left: 6px;
      opacity: 0.4;
    }
  }

  .nd-about-item__source {
    line-height: $md-font-size;
    font-size: $sm-font-size;
    color: $color-purple;
    display: block;

    span {
      text-transform: uppercase;
      color: lighten($color-purple-light, 10%);
      font-weight: $nd-adelle-bold;
      font-size: $xs-font-size;
      margin-right: 5px;
    }

    .fa {
      color: $color-purple-light;
      text-align: center;
      margin-right: 4px;
    }
  }

  .nd-about-item__year {
    line-height: $md-font-size;
    font-size: $sm-font-size;
    position: absolute;
    display: block;
    opacity: 0.35;
    bottom: 0;
    right: 0;
  }
</style>

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
