<template>
  <div class="nd-row">
    <div class="nd-content-item lead-item">
      <p class="lead">
        <span>Currently</span> Digital nomading around Europe, working with LincolnLoop and other clients. Finding my bliss.
      </p>

      <p class="lead">
        I first discovered that I could make things on the internet when I stumbled upon the Neopets tutorial for
        making pet pages. And 11 years later, the rest is history. Since then, I dove head first
        into design, development and the community. I have participated in countless hackathons,
        spent a few years hosting local Django meetups and particupating in Django Girls events.
      </p>

      <p>
        The links below are a collection of milestones, interviews, pieces I've written, and other resources
        that may help you learn more about me.
      </p>
    </div>

    <div class="nd-content-item about-item" v-for="item in about" :key="item.title">
      <template v-if="item.url">
        <a :href="item.url" target="_blank" class="nd-about-item__title">
          <span v-html="item.title">{{ item.title }}</span>
          <icon name="external-link" scale="0.75"></icon>
        </a>

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

  .nd-content-item.lead-item {
    flex-basis: 100%;
    background: transparent;
    box-shadow: none;
    margin: 0;
    width: 100%;
  }

  .nd-content-item.about-item {
    position: relative;
    float: none;
    display: flex;
    flex-flow: column wrap;

    a {
      text-decoration: none;

      &:hover {
        color: $color-pink;
      }
    }

    @media (min-width: $narrow-tablet) {
      margin-right: 0;
      flex: 0 0 30%;
    }
  }

  .nd-about-item__title {
    font-size: $lg-font-size;
    font-family: $font-freight;
    color: $color-purple-dark;
    line-height: 1.25em;
    padding-bottom: 30px;
    display: block;
    margin: 0;
    position: relative;

    .fa-icon {
      fill: $color-gray;
      margin-left: 0.5rem;
    }
  }

  .nd-about-item__source {
    line-height: $md-font-size;
    font-size: $sm-font-size;
    color: $color-purple;
    display: block;
    margin-top: auto;

    span {
      text-transform: uppercase;
      color: lighten($color-purple-light, 10%);
      font-weight: $nd-adelle-bold;
      font-size: $xs-font-size;
      margin-right: 5px;
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
