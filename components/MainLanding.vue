<template>
  <section id="banner">
    <div class="content" style="padding: 0px;">
      <v-layout class="hidden-md-and-down" style="padding-top: 12%;" wrap>
        <v-flex class="pr-5 mt-5 mb-5" xs12 sm12 md6>
          <header class="white--text text-sm-left">
            <h2 class="display-3">{{ $t('whitelabel.name') }}</h2>
            <transition name="slide-fade">
              <p v-if="showText" class="display-1">
                {{ $t('whitelabel.tagline1') }}</p>
            </transition>
            <transition name="slide-in">
              <p class="headline" v-if="showText">{{ $t('whitelabel.tagline2') }}</p>
            </transition>
          </header>
        </v-flex>
        <v-flex class="mt-5 mb-5" xs12 sm12 md6>
          <span class="image" style="">
            <transition name="bounce">
              <img v-if="show" src="/imgs/rerenting-landing_framed.png" alt="" />
            </transition>
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="hidden-lg-and-up" style="padding-top: 2%;" wrap>
        <v-flex class="mt-5 mb-5" xs12 sm12 md6>
          <header class="white--text text-sm-left">
            <h2 class="display-2 text-sm-left">{{ $t('whitelabel.name') }}</h2>
            <transition name="slide-fade">
              <p v-if="showText" class="headline  text-sm-left">
                {{ $t('whitelabel.tagline1') }}</p>
            </transition>
            <transition name="slide-in">
              <p v-if="showText">{{ $t('whitelabel.tagline2') }}</p>
            </transition>
          </header>
        </v-flex>
        <v-flex class="mt-5 mb-5" align-content-center xs12 sm12 md6>
          <transition name="bounce">
            <span v-if="show" class="image" style="height: 49%;width: 100%;"><img src="/imgs/rerenting-landing_framed.png" alt="" /></span>
          </transition>
        </v-flex>
      </v-layout>
    </div>
    <a href="#one" class="goto-next scrolly">Next</a>
  </section>
</template>
<script>
export default {
  data: () => ({
    show: false,
    showText: false
  }),
  mounted: function() {
    this.show = true
    var that = this
    setTimeout(function() {
      that.showText = true
    }, 100)
  }
}
</script>
<style scoped>
#banner .content .image {
  /*edd no longer circular*/
  /*border-radius: 100%;*/
  display: inline-block;
  height: 18em;
  /*margin-left: 3em;*/
  vertical-align: middle;
  width: 28em;
}

#banner .content .image img {
  /*border-radius: 100%;*/
  /*below was for when I used logo as main
        image compensate for img pos*/
  /*margin-top: -15px;*/
  display: block;
  width: 100%;
}

@media (min-width: 960px) {
  #banner .content .image {
    height: 18em;
    width: 44em;
    margin-left: 3em;
  }
}
.slide-in-enter-active {
  transition: all .3s ease;
  transition-delay: 2.0s;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  opacity: 0;
}


.slide-fade-enter-active {
  transition: all .3s ease;
  transition-delay: 1s;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

{
  transform: translateX(10px);
  opacity: 0;
}

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
  animation: bounce 1.5s;
}
.bounce-leave-active {
  animation: bounce 1.5s reverse;
}
.goto-next {
  border: 0;
  bottom: 0;
  display: block;
  height: 5em;
  left: 50%;
  margin: 0 0 0 -5em;
  overflow: hidden;
  position: absolute;
  text-indent: 10em;
  white-space: nowrap;
  width: 10em;
  z-index: 1;
}








/* line 961, main.css.scss */

.goto-next:before {
  background-image: url("/imgs/arrow.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  content: '';
  display: block;
  height: 1.5em;
  left: 50%;
  margin: -0.75em 0 0 -1em;
  position: absolute;
  top: 50%;
  width: 2em;
  z-index: 1;
}








/* Banner */

#banner {
  background-attachment: fixed;
  background-color: #1b70c3;
  background-image: url("/imgs/pwb_admin_map.png");
  background-position: center center;
  background-size: cover;
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25);
  min-height: 90vh;
  position: relative;
  text-align: center;
  z-index: 21;
}

#banner:before {
  /*  content: '';
  display: inline-block;
  height: 100vh;
  vertical-align: middle;
  width: 1%;*/
}

#banner:after {
  background-image: -moz-linear-gradient(top, rgba(23, 24, 32, 0.95), rgba(23, 24, 32, 0.95)), url("/imgs/overlay.png");
  ;
  background-image: -webkit-linear-gradient(top, rgba(23, 24, 32, 0.95), rgba(23, 24, 32, 0.95)), url("/imgs/overlay.png");
  ;
  background-image: -ms-linear-gradient(top, rgba(23, 24, 32, 0.95), rgba(23, 24, 32, 0.95)), url("/imgs/overlay.png");
  ;
  background-image: linear-gradient(top, rgba(23, 24, 32, 0.95), rgba(23, 24, 32, 0.95)), url("/imgs/overlay.png");
  ;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

#banner .content {
  display: inline-block;
  margin-right: 1%;
  max-width: 95%;
  padding: 6em;
  position: relative;
  /*text-align: right;*/
  vertical-align: middle;
  z-index: 1;
}

#banner .content header {
  display: inline-block;
  vertical-align: middle;
}

#banner .content header h2 {
  font-size: 2.5em;
  margin: 0;
}

#banner .content header p {
  margin: 0.5em 0 0 0;
  top: 0;
}
</style>