<template>
  <v-content style="padding:0px;">
    <!-- not setting the padding above to 0 will cause a flicker when rendering -->
    <MainLanding></MainLanding>
    <scroll-view :offset="400">
      <template slot-scope="visibility">
        <Features :visible="visibility.features" key="features"></Features>
        <!-- <RowAnimation :visible="visibility.row" key="row"></RowAnimation> -->
        <!-- <ContactForm :visible="visibility.split" key="split"></ContactForm> -->
        <HalfShade :visible="visibility.col" key="col"></HalfShade>
        <PricingTable></PricingTable>
        <!-- <HalfShadeLeft :visible="visibility.hsl" key="hsl"></HalfShadeLeft> -->
      </template>
    </scroll-view>
    <ContactForm></ContactForm>
    <section style="display:none;">
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
  </v-content>
</template>
<script>
import PricingTable from '@/components/PricingTable'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import HalfShade from '@/components/HalfShade'
import HalfShadeLeft from '@/components/HalfShadeLeft'
import RowAnimation from '@/components/RowAnimation'
import MainLanding from '@/components/MainLanding'
import 'gsap'

export default {
  components: {
    Features,
    PricingTable,
    ContactForm,
    HalfShade,
    HalfShadeLeft,
    RowAnimation,
    MainLanding
  },
  layout: 'pwb'
}
</script>