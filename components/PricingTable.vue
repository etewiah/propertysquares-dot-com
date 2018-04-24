<template>
  <section id="vue-pricing-sect">
    <v-container grid-list-xl>
      <v-layout class="pt-5 pb-5" row wrap align-center>
        <v-flex xs12 md4>
          <v-card hover class="ma-1">
            <div class="headline text-xs-center pt-4">{{ $t('pricing.basic') }}</div>
            <v-card-title primary-title class="pb-0 pt-0 layout justify-center">
              <div class="cd-price">
                <span class="mt-4 cd-currency">
                  €
                  </span>
                <span class="cd-value-std">
                  5
                  </span>
                <span class="cd-duration">/ mo</span>
              </div>
            </v-card-title>
            <v-list class="price-features-list" two-line>
              <v-divider class=""></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">25</span><span class="italic"> {{ $t('func.properties') }}</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">250</span><span class="italic"> {{ $t('func.images') }}</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">1</span> {{ $t('func.user') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.custDomain') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.singLang') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.emailSupp') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card hover class="ma-1 elevation-10">
            <div class="headline text-xs-center pt-4">{{ $t('pricing.popular') }}</div>
            <v-card-title primary-title class="pt-0 layout justify-center">
              <div class="cd-price" style="color: green;">
                <span class="mt-5 cd-currency">
                  €
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
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">100</span><span class="italic"> {{ $t('func.properties') }}</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">1000</span><span class="italic"> {{ $t('func.images') }}</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">5</span> {{ $t('func.users') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.custDomain') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.multLang') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.emailSupp') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card hover class="ma-1">
            <div class="headline text-xs-center pt-4">{{ $t('pricing.premium') }}</div>
            <v-card-title primary-title class="pb-0 pt-0 layout justify-center">
              <div class="cd-price">
                <span class="mt-4 cd-currency">
                  €
                  </span>
                <span class="cd-value-std">
                  25
                  </span>
                <span class="cd-duration">/ mo</span>
              </div>
            </v-card-title>
            <v-list class="price-features-list" two-line>
              <v-divider class=""></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center">
                    <span v-html="$t('func.unlimitedProps')"></span>
                     </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">Unlimited</span><span class="italic"> {{ $t('func.images') }}</span> </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text">Unlimited</span> {{ $t('func.users') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.custDomain') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.multLang') }} </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="price-features-text text-xs-center" @click="">
                <v-list-tile-content>
                  <v-list-tile-sub-title class="headline text-xs-center"><span class="black--text"></span> {{ $t('func.emailAndPhoneSupp') }} </v-list-tile-sub-title>
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
.price-features-list .price-features-text:nth-of-type(2n+1) {
  background-color: rgba(23, 61, 80, 0.06);
}

.price-shade {
  background-color: rgba(23, 61, 80, 0.06);
}

@media only screen and (min-width: 768px) {
  .cd-value-std {
    font-size: 5em;
    font-weight: 200;
  }

  .cd-value {
    font-size: 7em;
    font-weight: 300;
  }

  .cd-currency,
  .cd-duration {
    color: rgba(23, 61, 80, 0.4);
  }

  .cd-popular .cd-currency,
  .cd-popular .cd-duration {
    color: #e97d68;
  }

  .cd-secondary-theme .cd-currency,
  .cd-secondary-theme .cd-duration {
    color: #2e80a7;
  }

  .cd-secondary-theme .cd-popular .cd-currency,
  .cd-secondary-theme .cd-popular .cd-duration {
    color: #ba6453;
  }

  .cd-currency {
    display: inline-block;
    margin-top: 10px;
    vertical-align: top;
    font-size: 2em;
    font-weight: 700;
  }

  .cd-duration {
    font-size: 1.4em;
  }
}
.cd-pricing-body {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>