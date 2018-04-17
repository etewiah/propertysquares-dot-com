<template>
  <v-app light>
    <v-container fluid class="pa-0">
      <!--       <v-toolbar class="primary" style="height:28px;" primary>
        <v-toolbar-items>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar> -->
      <v-toolbar class="primary" style="display:none;" primary>
        <v-container fluid>
          <v-toolbar-title>{{ $t('whitelabel.name') }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
          <!-- <MainNav :navLinks="displaySettings.top_nav_links"></MainNav> -->
          <!-- <v-btn></v-btn> -->
          <v-toolbar-items class="hidden-sm-and-down">
          </v-toolbar-items>
        </v-container>
      </v-toolbar>
      <!--       <v-expansion-panel>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>tttt</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel> -->
      <nuxt />
      <v-footer class="" style="">
        <v-container style="background-color: #424242;" fluid class="pt-0">
          <v-layout>
            <v-flex xs7 offset-xs1 class="">
              <div class="text-sm-left ml-3">
                <v-btn :href="$t('whitelabel.fbUrl')" icon class="mx-3">
                  <v-icon large color="accent" size="24px"> fa-facebook</v-icon>
                </v-btn>
              </div>
            </v-flex>
            <v-flex xs3 style="margin-top: auto;
    height: 100%;">
             <div class="text-sm-right white--text ml-3" >
                &copy; <strong>{{ $t('whitelabel.name') }}</strong>. All rights reserved.
              </div>
<!--               <span class="text-sm-right ml-3" style="float:right;">
            Powered by <a class="" href="https://propertywebbuilder.com" target="_blank"><strong>PropertyWebBuilder</strong></a> -->
          </span>
            </v-flex>
          </v-layout>
        </v-container>
        <!--         <v-card class="" dark flat tile>
          <v-container class="pa-0" light>
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
                <v-btn :href="$t('whitelabel.fbUrl')" icon class="mx-3">
                  <v-icon large color="accent" size="24px"> fa-facebook</v-icon>
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <div class="text-sm-right ml-3" style="float:right;">
                &copy; <strong>{{ $t('whitelabel.name') }}</strong>. All rights reserved.
              </div>
            </v-card-actions>
          </v-container>
        </v-card>
 --></v-footer>
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