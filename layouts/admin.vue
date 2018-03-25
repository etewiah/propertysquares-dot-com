<template>
  <v-app dark>
    <v-container :fluid="fluid" class="pa-0">
      <v-toolbar class="primary" style="height:28px;" primary>
        <v-toolbar-items>
          <LangSwitcher></LangSwitcher>
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
        <!--         <v-menu offset-y>
          <v-btn icon dark slot="activator">
            <v-icon dark>language</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="lang in locales" :key="lang" @mouseover.native="changeLocale(lang)">
              <v-list-tile-title>
                {{lang}}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn icon dark slot="activator">
            <v-icon dark>format_paint</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="n in colors" :key="n" :class="n" @mouseover.native="theme = n">
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon dark>language</v-icon>
          </v-btn>
        </v-menu> -->
      </v-toolbar>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>tttt</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- <ThemeGenerator></ThemeGenerator> -->
      <v-content>
        <router-view/>
      </v-content>
      <v-footer absolute >
        <v-container :fluid="fluid" class="blue darken-2 pa-0" height="auto">
          <PageFooter></PageFooter>
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Powered
                <!-- <v-icon class="red--text">favorite</v-icon> -->
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">PropertyWebBuilder</a>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-footer>
    </v-container>
    <v-content>
      <v-container>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        fluid: true,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
