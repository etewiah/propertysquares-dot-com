<template>
  <v-content>
    <section id="banner">
      <div class="content">
        <header class="white--text">
          <h2 class="display-2">PropertySquares</h2>
          <p class="headline">
            Beautiful property listings</p>
          <p>The smartest way to create
            <br /> an amazing real estate website!</p>
        </header>
        <span class="image"><img src="/imgs/rerenting-landing_framed.png" alt="" /></span>
      </div>
      <a href="#one" class="goto-next scrolly">Next</a>
    </section>
    <HalfShade></HalfShade>
    <ContactForm></ContactForm>
    <PricingTable></PricingTable>
    <Features></Features>
    <section>
      <v-parallax src="/imgs/terraced-houses-2.jpeg" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
          <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section style="">
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
      <v-parallax src="/imgs/terraced-houses-2.jpeg" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
          <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>

    </section>
  </v-content>
</template>
<script>
import PricingTable from '@/components/PricingTable'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import HalfShade from '@/components/HalfShade'

export default {
  components: {
    Features,
    PricingTable,
    ContactForm,
    HalfShade
  },
  layout: 'pwb'
}
</script>