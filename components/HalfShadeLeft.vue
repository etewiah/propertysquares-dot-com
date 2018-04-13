<template>
  <section class="">
    <v-parallax src="/imgs/single-prop.jpg" height="600" style="padding:0px;">
      <v-layout wrap align-center class="white--text">
        <v-flex xs12 sm12 md4>
          <transition name="slide-in">
            <div v-if="showText" class="spotlight style2 left">
              <div class="content slide-in-content" style="">
                <header class="white--text">
                  <transition name="slide-fade">
                    <p v-if="showText" class="display-2 text-sm-right">
                      Show you mean business</p>
                  </transition>
                  <transition name="slide-in">
                    <p class="text-sm-right headline" v-if="showText">The smartest way to create an amazing real estate website!</p>
                  </transition>
                </header>
              </div>
            </div>
          </transition>
        </v-flex>
        <v-flex xs12 sm12 md8>
<!--           <h1 class="mb-2 display-4 text-xs-center" style="color:#39c088;">Sell more properties</h1>
          <div class="subheading mb-3 text-xs-center"></div>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
            Get Started
          </v-btn> -->
        </v-flex>
      </v-layout>
    </v-parallax>
  </section>
</template>
<script>
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
        this.showText = true
        this.animated = true
      }
    }
  },
  data: () => ({
    showText: false,
    animated: false,
  })
  // data: () => ({
  //   show: false,
  //   showText: false
  // }),
  // mounted: function() {
  //   this.showText = true
  // }
}
</script>
<style scoped>
.slide-in-enter-active {
  transition: all 0.8s ease;
  transition-delay: 0.2s;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  opacity: 1;
}


.slide-in-content {
  border-top: 0;
  border-bottom: 0;
  float: left;
  height: 600px;
  margin-left: -2em;
}


.spotlight.left .content {
  /*height: 101%;*/
  padding: 6em 3em;
  top: 0;
  /*width: 28em;*/
}

.spotlight .image.main {
  display: none;
}
.spotlight .image.main img {
  position: relative;
}
.spotlight .content {
  -moz-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  -moz-transition: -moz-transform 1s ease, opacity 1s ease;
  -webkit-transition: -webkit-transform 1s ease, opacity 1s ease;
  -ms-transition: -ms-transform 1s ease, opacity 1s ease;
  transition: transform 1s ease, opacity 1s ease;
  background: rgba(23, 24, 32, 0.95);
  border-style: solid;
  opacity: 1;
  /*position: absolute;*/
}
.spotlight .goto-next {
  -moz-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  -moz-transition: -moz-transform 0.75s ease, opacity 1s ease-in;
  -webkit-transition: -webkit-transform 0.75s ease, opacity 1s ease-in;
  -ms-transition: -ms-transform 0.75s ease, opacity 1s ease-in;
  transition: transform 0.75s ease, opacity 1s ease-in;
  -moz-transition-delay: 0.5s;
  -webkit-transition-delay: 0.5s;
  -ms-transition-delay: 0.5s;
  transition-delay: 0.5s;
  opacity: 1;
}
.spotlight.top .content,
.spotlight.bottom .content {
  left: 0;
  padding: 5.1em 0 3.1em 0;
  width: 100%;
}
.spotlight.top .content {
  border-bottom-width: 0.35em;
  top: 0;
}
.spotlight.bottom .content {
  border-top-width: 0.35em;
  bottom: 0;
}
.spotlight.left .content {
  border-right-width: 0.35em;
  left: 0;
}
.spotlight.right .content {
  border-left-width: 0.35em;
  right: 0;
}


/*.spotlight.style1 .content {
  border-color: #39c088;
}
*/

.spotlight.style2 .content {
  border-color: #39c088;
}


/*.spotlight.style3 .content {
  border-color: #39c088;
}
*/

.spotlight.inactive .content {
  opacity: 0;
}
.spotlight.inactive .goto-next {
  -moz-transform: translate(0, 1.5em);
  -webkit-transform: translate(0, 1.5em);
  -ms-transform: translate(0, 1.5em);
  transform: translate(0, 1.5em);
  opacity: 0;
}
.spotlight.inactive.top .content {
  -moz-transform: translate(0, -5em);
  -webkit-transform: translate(0, -5em);
  -ms-transform: translate(0, -5em);
  transform: translate(0, -5em);
}
.spotlight.inactive.bottom .content {
  -moz-transform: translate(0, 5em);
  -webkit-transform: translate(0, 5em);
  -ms-transform: translate(0, 5em);
  transform: translate(0, 5em);
}
.spotlight.inactive.left .content {
  -moz-transform: translate(-5em, 0);
  -webkit-transform: translate(-5em, 0);
  -ms-transform: translate(-5em, 0);
  transform: translate(-5em, 0);
}


body.is-touch .spotlight {
  background-attachment: scroll;
}
</style>