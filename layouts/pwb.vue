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
      <v-expansion-panel>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>tttt</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- <ThemeGenerator></ThemeGenerator> -->
      <v-content>
        <nuxt />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
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
