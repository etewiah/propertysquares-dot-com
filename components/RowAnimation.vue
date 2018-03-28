<template>
  <section class="slide-section" ref="section">
    <h1 class="section-title" ref="title">This is a section title</h1>
    <p class="section-copy" ref="copy">
      This is some section copy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo velit, ullamcorper sed elit sit amet, maximus lobortis felis. Duis quis dolor in purus aliquet tempus. Donec non feugiat felis.
    </p>
  </section>
</template>
<script>
import { TweenMax, Expo, Power2 } from 'gsap'
export default {
  data() {
    return {
      animated: false,
    }
  },
  watch: {
    visible(visible) {
      // debugger
      if (visible && !this.animated) {
        const { section, title, copy } = this.$refs
        const tweenContent = () =>
          TweenMax.staggerFromTo([title, copy], 0.5, { y: -25 }, { y: 0, opacity: 1, ease: Power2.easeOut }, 0.2)
        TweenMax.to(section, 0.6, { scaleX: 1, ease: Expo.easeInOut, onComplete: tweenContent })
        this.animated = true
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
<style scoped>
.slide-section {
  padding: 75px 0;
  background: #295271;
  transform-origin: left center;
  transform: scaleX(0);
}
.section-title,
.section-copy {
  opacity: 0;
  color: #fff;
  text-align: center;
}
.section-copy {
  max-width: 650px;
  margin: 0 auto;
}
.section-title {
  margin-top: 0;
  font-size: 48px;
}
</style>