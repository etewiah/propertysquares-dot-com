<template>
  <div>
    <v-jumbotron :gradient="gradient" fill-height style="height:100%;" dark>
      <v-container>
        <v-layout class="mt-5 mb-5" wrap>
          <v-flex class="mt-5 mb-5" xs12 sm12 md6 text-xs-center>
            <header class="major px-3">
              <h2 class="display-3">{{ $t("contact.title") }}</h2>
              <p class="headline">{{ $t("contact.prompt") }}</p>
            </header>
          </v-flex>
          <v-flex class="mt-5 mb-5" xs12 sm12 md6 text-xs-center>
            <v-card class="elevation-2">
              <v-card-title primary-title class="layout">
                <div class="headline">
                  <!-- {{ $t("form.contactUsPrompt") }}: -->
                </div>
              </v-card-title>
              <v-card-text>
                <v-form :lazy-validation="true" v-model="formValid" ref="enqForm" name="contact" @submit.prevent="onSubmitEnquiry">
                  <input style="display:none;" name="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <div v-for="(field) in contactUsFields" :key="field.fieldName" row>
                    <v-flex xs12 sm12 offset-sm0>
                      <v-text-field :multi-line="field.multiLine" @change="turnOnValidation" :autofocus="field.autofocus" :required="field.required" :rules="emailValidationRules" :ref="field.fieldName" name="field.fieldName" :label="$t(field.labelTextTKey)" v-model="enquiryContent[field.fieldName]"></v-text-field>
                    </v-flex>
                    <!-- <v-divider></v-divider> -->
                  </div>
                  <p v-if="contactUsErrors.length">
                    <template v-for="error in contactUsErrors">
                      <v-alert outline color="error" icon="warning" :value="true">
                        {{error}}
                      </v-alert>
                    </template>
                  </p>
                  <p v-if="contactUsSuccess">
                    <v-alert outline color="success" dismissible v-model="successModel">
                       {{ $t("form.successMessage") }}
                    </v-alert>
                  </p>
                  <v-flex xs12 sm12 offset-sm0>
                    <template v-if="contactUsSending">
                      <v-progress-linear :indeterminate="true"></v-progress-linear>
                    </template>
                    <v-btn style="width: 50%;" class="primary" type="submit">{{$t('form.submit')}}</v-btn>
                  </v-flex>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
  props: [],
  // mounted() {
  //   this.$refs.email[0].$el.querySelector("input").focus()
  // },
  data() {
    return {
      gradient: 'to top, #3878b7, #4696e5',
      contactUsSuccess: false,
      contactUsSending: false,
      successModel: true,
      // above only needed so success alert can be dismissed
      formValid: true,
      emailValidationRules: [
        // v => !!v || 'E-mail is required',
        // v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      // validationErrors: [],
      contactUsFields: [{
        //   labelTextTKey: "form.name",
        //   fieldName: "name",
        //   inputType: "text",
        //   required: true,
        //   validationRules: [
        //     // v => !!v || 'Name is required',
        //   ]
        // }, {
        labelTextTKey: "form.email",
        fieldName: "email",
        inputType: "text",
        autofocus: true,
        required: true,
        validationRules: [],
        //   }, {
        //   labelTextTKey: "form.tel",
        //   fieldName: "tel",
        //   inputType: "text",
        //   validationRules: []
        // }, {
        //   labelTextTKey: "form.website",
        //   fieldName: "website",
        //   inputType: "text",
        //   validationRules: []
        // }, {
        //   labelTextTKey: "form.message",
        //   multiLine: true,
        //   fieldName: "message",
        //   inputType: "text",
        //   required: false,
        //   validationRules: [
        //     v => !!v || 'Message is required',
        //   ]
      }],
      enquiryContent: {
        name: "",
        message: ""
      }
    }
  },
  computed: {
    contactUsErrors() {
      return []
    },
  },
  methods: {
    turnOnValidation() {
      if (this.enquiryContent["email"].length > 0) {
        this.emailValidationRules = [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      } else {
        this.emailValidationRules = []
      }
    },
    // submitContactReq() {
    //   if (this.$refs.form.validate()) {
    //     // Native form submission is not yet supported
    //     axios.post('', {
    //       name: this.name,
    //       email: this.email,
    //       select: this.select,
    //       checkbox: this.checkbox
    //     })
    //   }
    // },
    clear() {
      this.$refs.form.reset()
    },
    onSubmitEnquiry() {
      // this.enquiryContent.property_id = this.propId
      if (!this.formValid) {
        return
        // this.$refs.enqForm.validate()
        // in case nothing has been typed in, above will display error messages
      }

      var params = new URLSearchParams()
      params.append('param1', 'value1')
      params.append('param2', 'value2')
      // axios.post('/foo', params)
      // if I decided to post via ajax to netlify
      // would have to url encode like above
      // TODO - come back to this later

      var data = {
        contact: this.enquiryContent
      }

      // let targetUrl = " http://localhost:3001/users/1/web_requests/9/supersecretstring"
      let targetUrl = "http://huginn-app.relocationportal.com/users/1/web_requests/9/weebrixCt"
      this.contactUsSending = true
      axios.post(targetUrl, data, {
        headers: {
          // 'Content-Type': 'text/plain'
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/vnd.api+json',
          // 'Accept': 'application/vnd.api+json'
        }
      }).then(response => {
        this.contactUsSending = false
        this.contactUsSuccess = true
        // console.log(response)
        // commit('setPropertyEnquiry', { result: response.data })
      }, (err) => {
        this.contactUsSending = false
        this.contactUsErrors = [err]
        let errResult = {
          errors: [err]
        }
        // commit('setPropertyEnquiry', { result: errResult })
        // console.log(err)
      })


    }

  }
}
</script>
<style>
.input-group__details:before {
  /*without increasing below, input line disappears at some resolutions*/
  height: 2px;
  /*https://github.com/vuetifyjs/vuetify/pull/3601*/
}
</style>