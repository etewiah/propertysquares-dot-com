<template>
  <section id="vue-pricing-sect">
    <v-container grid-list-xl>
      <v-layout row wrap align-center>
        <v-flex xs12 md4>
          <v-card hover class="ma-1">
            <div class="headline text-xs-center">{{ $t('pricing.basic') }}</div>
            <v-card-title primary-title class="pt-0 layout justify-center">
              <div class="cd-price">
                <span class="mt-5 cd-currency">
                  $
                  </span>
                <span class="cd-value">
                  5
                  </span>
                <span class="cd-duration">/ mo</span>
              </div>
            </v-card-title>
            <v-list class="price-features-list" two-line>
              <v-divider class=""></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">25</span><span class="italic"> Properties</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">250</span><span class="italic"> Images</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">1</span> User </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Custom Domain </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Multiple Languages </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Email Support </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card hover class="ma-1">
            <div class="headline text-xs-center">{{ $t('pricing.popular') }}</div>
            <v-card-title primary-title class="pt-0 layout justify-center">
              <div class="cd-price">
                <span class="mt-5 cd-currency">
                  $
                  </span>
                <span class="cd-value">
                  10
                  </span>
                <span class="cd-duration">/ mo</span>
              </div>
            </v-card-title>
            <v-list class="price-features-list" two-line>
              <v-divider class=""></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">100</span><span class="italic"> Properties</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">1000</span><span class="italic"> Images</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">1</span> User </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Custom Domain </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Multiple Languages </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Email Support </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card hover class="ma-1">
            <div class="headline text-xs-center">{{ $t('pricing.basic') }}</div>
            <v-card-title primary-title class="pt-0 layout justify-center">
              <div class="cd-price">
                <span class="mt-5 cd-currency">
                  $
                  </span>
                <span class="cd-value">
                  5
                  </span>
                <span class="cd-duration">/ mo</span>
              </div>
            </v-card-title>
            <v-list class="price-features-list" two-line>
              <v-divider class=""></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">25</span><span class="italic"> Properties</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">250</span><span class="italic"> Images</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">1</span> User </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Custom Domain </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Multiple Languages </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> Email Support </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>         
      </v-layout>
    </v-container>
    <!-- .cd-pricing-container -->
  </section>
</template>
<style>
</style>