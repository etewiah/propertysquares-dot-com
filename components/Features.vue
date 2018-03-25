<template>
  <div>
    <v-jumbotron :gradient="gradient" fill-height style="height:100%;" dark>
      <v-container>
        <v-layout wrap column>
          <v-flex class="xs-12" text-xs-center>
            <header class="major">
              <h2>Finally, a great Open Source solution for realtors</h2>
              <p>You no longer have to rely on WordPress or expensive propriety software for your website</p>
            </header>
          </v-flex>
        </v-layout>
        <v-layout wrap row>
          <v-flex class="" xs4 text-xs-center>
            <v-icon x-large class="accent--text">fa fa-globe icon-service</v-icon>
            <h3 class="display-3">Multilingual</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="" xs4 text-xs-center>
            <v-icon x-large class="accent--text">fa fa-mobile icon-service</v-icon>
            <h3 class="display-3">Mobile Friendly</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="" xs4 text-xs-center>
            <v-icon x-large class="accent--text">fa fa-gears icon-service</v-icon>
            <h3 class="display-3">Intuitive Admin Panel</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="" xs4 text-xs-center>
            <v-icon x-large class="accent--text">fa fa-wrench icon-service</v-icon>
            <h3 class="display-3">Easy to customise</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="" xs4 text-xs-center>
            <v-icon x-large class="accent--text">fa fa-map-o icon-service</v-icon>
            <h3 class="display-3">Google maps integration</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="" xs4 text-xs-center>
            <v-icon x-large class="accent--text">fa fa-github icon-service</v-icon>
            <h3 class="display-3">Open Source</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>
<script>
export default {
  data: () => ({
    gradient: 'to top, #3878b7, #4696e5'
  })
}
</script>
<style>
</style>