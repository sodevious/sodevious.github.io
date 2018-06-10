<template>
  <div class="nd-row">
    <div class="nd-content-item portfolio-item" v-for="item in portfolio" :key="item.client" :style="{ backgroundImage: 'url(/images/' + item.image + ')' }">
      <h5 class="nd-portfolio__title">
        <a :href="item.link">
        {{ item.client }}

        <small>{{ item.role }}</small>
      </a>
      </h5>
    </div>
  </div>
</template>

<script>
  import portfolio from '../content/portfolio'

  export default {
    data () {
      return {
        portfolio
      }
    }
  }
</script>


<style lang="scss">
  @import '~assets/variables';

  .nd-content-item.portfolio-item {
    background-color: $color-purple;
    position: relative;
    min-height: 12rem;

    @supports (display: flex) {
      justify-content: center;
      align-items: center;
      display: flex;
    }

    &:before {
      background-color: rgba(60,60,86, 0.8);
      transition: background-color ease-in 0.1s;
      position: absolute;
      z-index: 300;
      display: block;
      content: "";
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
    }

    &:hover {
      &:before {
        background-color: rgba(254,67,101, 0.75);
      }
    }
  }

  .nd-portfolio__title {
    color: white;
    z-index: 500;
    position: relative;
    font-size: 1.15rem;
    text-align: center;
    font-weight: 300;
    line-height: 1.15;
    margin: 0;

    small {
      /* display: none; */
      display: block;
      background-color: white;
      font-family: $font-freight;
      font-size: 1.05rem;
      margin: $gutter $gutter 0 $gutter;
      line-height: 1.15;
      margin-top: $gutter;
      padding: 5px 10px;
      color: $color-purple;
    }
  }
</style>
