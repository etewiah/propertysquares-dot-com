<template>
  <div>
    <v-jumbotron :gradient="gradient" fill-height style="height:100%;" dark>
      <v-container>
        <v-layout wrap column>
          <v-flex class="xs-12 mt-5 mb-5" text-xs-center>
            <header class="major">
              <h2 class="display-3">Finally, a great Open Source solution for realtors</h2>
              <p class="headline">You no longer have to rely on WordPress or expensive propriety software for your website</p>
            </header>
          </v-flex>
        </v-layout>
        <v-layout wrap class="mt-5 mb-5" row>
          <v-flex class="mt-5 mb-5" xs4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-globe icon-service</v-icon>
            <h3 class="display-1">Multilingual</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-mobile icon-service</v-icon>
            <h3 class="display-1">Mobile Friendly</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-gears icon-service</v-icon>
            <h3 class="display-1">Intuitive Admin Panel</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-wrench icon-service</v-icon>
            <h3 class="display-1">Easy to customise</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-map-o icon-service</v-icon>
            <h3 class="display-1">Google maps integration</h3>
            <p style="display: none;">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs4 text-xs-center>
            <v-icon x-large class="accent--text icon major">fa fa-github icon-service</v-icon>
            <h3 class="display-1">Open Source</h3>
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