<template>
  <div>
    <v-jumbotron :gradient="gradient" fill-height style="height:100%;" dark>
      <v-container>
        <v-layout wrap column>
          <v-flex class="xs-12 mt-5 mb-5" text-xs-center>
            <header class="major">
              <h2 class="display-3">
              {{ $t('features.tagline1') }}
              </h2>
              <p class="headline">
                {{ $t('features.tagline2') }}
              </p>
            </header>
          </v-flex>
        </v-layout>
        <v-layout wrap class="mt-5 mb-5" row>
          <v-flex class="mt-5 mb-5" xs12 sm6 md4 text-xs-center>
            <transition name="bounce">
              <v-icon v-if="bounceIcon1" x-large class="accent--text icon major">fa fa-globe icon-service</v-icon>
            </transition>
            <h3 class="display-1 px-5">
              {{ $t('features.multilingual') }}
            </h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs12 sm6 md4 text-xs-center>
            <transition name="bounce2">
              <v-icon v-if="bounceIcon1" x-large class="accent--text icon major">fa fa-mobile icon-service</v-icon>
            </transition>
            <h3 class="display-1 px-5">
              {{ $t('features.mobile') }}
            </h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs12 sm6 md4 text-xs-center>
            <transition name="bounce3">
              <v-icon v-if="bounceIcon1" x-large class="accent--text icon major">fa fa-gears icon-service</v-icon>
            </transition>
            <h3 class="display-1 px-5">
              {{ $t('features.adminPanel') }}
            </h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs12 sm6 md4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-wrench icon-service</v-icon>
            <h3 class="display-1 px-5">
              {{ $t('features.customise') }}
            </h3>            
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs12 sm6 md4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-map-o icon-service</v-icon>
            <h3 class="display-1 px-5">
              {{ $t('features.maps') }}
            </h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs12 sm6 md4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-github icon-service</v-icon>
            <h3 class="display-1 px-5">
              {{ $t('features.search') }}
            </h3>            
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>
<script>
import { TweenMax, Expo, Power2 } from 'gsap'
export default {
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
  },
  watch: {
    visible(visible) {
      if (visible && !this.animated) {
        this.bounceIcon1 = true
        // const { section, title, copy } = this.$refs
        // const tweenContent = () =>
        //   TweenMax.staggerFromTo([title, copy], 0.5, { y: -25 }, { y: 0, opacity: 1, ease: Power2.easeOut }, 0.2)
        // TweenMax.to(section, 0.6, { scaleX: 1, ease: Expo.easeInOut, onComplete: tweenContent })
        this.animated = true
      }
    }
  },
  data: () => ({
    bounceIcon1: false,
    animated: false,
    gradient: 'to top, #3878b7, #4696e5'
  })
}
</script>
<style>
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.bounce-enter-active {
  animation: bounce 1.0s;
}
.bounce-leave-active {
  animation: bounce 1.0s reverse;
}
.bounce2-enter-active {
  animation: bounce 1.0s;
  animation-delay: 1.5s;
}
.bounce2-leave-active {
  animation: bounce 1.0s reverse;
  animation-delay: 1.5s;
}
.bounce3-enter-active {
  animation: bounce 1.0s;
  animation-delay: 3.5s;
}
.bounce3-leave-active {
  animation: bounce 1.0s reverse;
  animation-delay: 3.5s;
}
.icon.major {
  background: #1b70c3;
  border-radius: 100%;
  cursor: default;
  display: inline-block;
  height: 3em;
  line-height: 3em;
  margin: 0 0 .5em 0;
  text-align: center;
  width: 3em;
}
</style>