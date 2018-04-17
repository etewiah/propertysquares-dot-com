<template>
  <div class="contenedor_idiomas">
    <ul class="idiomas">
      <template v-for="locale in expLocales">
        <li :class="[locale.selected]">
          <a @click="switchLocale(locale)" :class="[locale.variant, locale.selected]"></a>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    expLocales: function() {
      let locales = ["en", "es"]
      let expLocales = []
      let currentLocale = this.$route.params["lang"]
      locales.forEach(function(locale) {
        let selected = ""
        if (locale === currentLocale) {
          selected = "selected"
        }
        expLocales.push({
          variant: locale,
          selected: selected
        })
      })
      // expLocales = [
      //   {variant: "es"},
      //   {variant: "en"}
      // ]
      return expLocales
    }
  },
  methods: {
    switchLocale(locale) {
      // let params = this.$route.params
      let newParams = {
        lang: locale.variant
      }
      this.$router.replace({ name: this.$route.name, params: newParams })
      // this.$router.push({ name: this.$route.name, params: newParams })
    }
  }
}
</script>
<style scoped>
.contenedor_idiomas {
  /*background: blue;*/
}

ul.idiomas {
  float: right;
  padding: 0 15px 10px 10px;
  margin: -7px 0px -5px 10px;
  background-color: #fff;
}

ul.idiomas li {
  float: left;
  list-style: none outside none;
  margin: 0 0 0 5px;
  padding: 11px 0 0 0;
  width: 20px;
}

ul.idiomas li a {
  display: block;
  width: 20px;
  height: 14px;
  outline: 1px solid #555;
  margin: 0;
}
ul.idiomas .es {
  background: url("/imgs/idiomas.png") 0 0 no-repeat;
}
ul.idiomas .en,
ul.idiomas .uk {
  background: url(/imgs/idiomas.png) -20px 0;
}

ul.idiomas .ru {
  background: url("/imgs/idiomas.png") -40px 0;
}

ul.idiomas .sv {
  background: url("/imgs/idiomas.png") -60px 0;
}

ul.idiomas .no {
  background: url("/imgs/idiomas.png") -80px 0;
}

ul.idiomas .de {
  background: url("/imgs/idiomas.png") -100px 0;
}

ul.idiomas .fr {
  background: url("/imgs/idiomas.png") -120px 0;
}

ul.idiomas .ne {
  background: url("/imgs/idiomas.png") -140px 0;
}

ul.idiomas .ch {
  background: url("/imgs/idiomas.png") -160px 0;
}

ul.idiomas .fi {
  background: url("/imgs/idiomas.png") -180px 0;
}

ul.idiomas .eu {
  background: url("/imgs/idiomas.png") -200px 0;
}

ul.idiomas .pt {
  background: url("/imgs/idiomas.png") -220px 0;
}

ul.idiomas .ar {
  background: url("/imgs/idiomas.png") -240px 0;
}

ul.idiomas .ca {
  background: url("/imgs/idiomas.png") -260px 0;
}

ul.idiomas .br {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/br.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .cl {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/cl.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .hi {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/hi.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .it {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/it.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .mx {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/mx.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .nl {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/nl.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .pl {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/pl.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .ro {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/ro.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .us {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/us.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .vi {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/vn.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .tr {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/tr.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .kr {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/kr.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .bg {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/bg.svg") no-repeat;
  background-size: cover;
}

ul.idiomas li.selected,
ul.idiomas li:hover {
  background: url("/imgs/simple-nav-arrow.png") no-repeat top center;
}
</style>