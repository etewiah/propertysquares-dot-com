<template>
  <v-app light>
    <v-container fluid class="pa-0">
      <v-toolbar class="primary" style="height:28px;" primary>
        <v-toolbar-items>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <!-- <span v-text="title" style="margin-top: -30px;"></span> -->
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar>
        <v-toolbar-title>PropertyWebBuilder</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <!-- <MainNav :navLinks="displaySettings.top_nav_links"></MainNav> -->
        <!-- <v-btn></v-btn> -->
        <v-toolbar-items class="hidden-sm-and-down">
        </v-toolbar-items>
      </v-toolbar>
<!--       <v-expansion-panel>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>tttt</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel> -->
      <nuxt />
      <v-footer class="" style="background: transparent;" absolute>
        <v-container fluid class="pa-0" light>
          <v-card class="" dark flat tile>
            <v-card-text class="footercolor">
              <v-layout>
                <v-flex>
                  <div class="body-2 subheading">
                  </div>
                </v-flex>
                <v-spacer></v-spacer>
                <div>
                </div>
                <v-spacer></v-spacer>
                <v-flex>
                  <div> <span></span>
                  </div>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions class="">
              <div class="text-sm-left ml-3">
                <v-btn  href="https://www.facebook.com/propertywebbuilder"  icon class="mx-3">
                  <v-icon large color="accent" size="24px"> fa-facebook</v-icon>
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <div class="text-sm-right ml-3" style="float:right;">
                &copy; <strong>PropertySquares</strong>. All rights reserved.
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-footer>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      // fluid: true,
      // clipped: false,
      // drawer: true,
      // fixed: false,
      // items: [
      //   { icon: 'apps', title: 'Welcome', to: '/' },
      //   { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      // ],
      // miniVariant: false,
      // right: true,
      // rightDrawer: false,
      // title: 'Vuetify.js'
    }
  }
}
</script>