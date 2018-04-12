<template>
  <div>
    <v-jumbotron :gradient="gradient" fill-height style="height:100%;" dark>
      <v-container>
        <v-layout class="mt-5 mb-5" wrap>
          <v-flex class="mt-5 mb-5" xs12 sm12 md6 text-xs-center>
            <header class="major">
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
                <v-form v-model="formValid" ref="enqForm" name="contact" action="" method="post" netlify-honeypot="bot-field" netlify>
                  <input style="display:none;" name="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <v-layout v-for="(field) in contactUsFields" :key="field.fieldName" row>
                    <v-flex xs12 sm12 offset-sm0>
                      <v-text-field :multi-line="field.multiLine" :required="field.required" :rules="field.validationRules" name="field.fieldName" :label="$t(field.labelTextTKey)" v-model="enquiryContent[field.fieldName]"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <p v-if="contactUsErrors.length">
                    <template v-for="error in contactUsErrors">
                      <v-alert outline color="error" icon="warning" :value="true">
                        {{error}}
                      </v-alert>
                    </template>
                  </p>
                  <p v-if="contactUsSuccess.length">
                    <v-alert outline color="success" dismissible v-model="successModel">
                      {{ contactUsSuccess }}
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
  data() {
    return {
      gradient: 'to top, #3878b7, #4696e5',
      successModel: true,
      // above only needed so success alert can be dismissed
      formValid: false,
      // validationErrors: [],
      contactUsFields: [{
        labelTextTKey: "form.name",
        fieldName: "name",
        inputType: "text",
        required: true,
        validationRules: [
          v => !!v || 'Name is required',
        ]
      }, {
        labelTextTKey: "form.email",
        fieldName: "email",
        inputType: "text",
        required: true,
        validationRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }, {
        labelTextTKey: "form.tel",
        fieldName: "tel",
        inputType: "text",
        validationRules: []
      }, {
        labelTextTKey: "form.website",
        fieldName: "website",
        inputType: "text",
        validationRules: []
      }, {
        labelTextTKey: "form.message",
        multiLine: true,
        fieldName: "message",
        inputType: "text",
        required: false,
        validationRules: [
          v => !!v || 'Message is required',
        ]
      }],
      enquiryContent: {
        name: "",
        message: ""
      }
    }
  },
  computed: {
    contactUsSending() {
      return false
    },
    contactUsSuccess() {
      return []
    },
    contactUsErrors() {
      return []
    },
  },
  methods: {
    onSubmitEnquiry() {
      // this.enquiryContent.property_id = this.propId
      if (!this.formValid) {
        this.$refs.enqForm.validate()
        // in case nothing has been typed in, above will display error messages
      }

      var params = new URLSearchParams()
      params.append('param1', 'value1')
      params.append('param2', 'value2')
      axios.post('/foo', params)
      // if I decided to post via ajax to netlify
      // would have to url encode like above
      // TODO - come back to this later

      axios.post("/", {
        contact: this.enquiryContent
      }, {
        // headers: {
        //   // 'Content-Type': 'application/vnd.api+json',
        //   // 'Accept': 'application/vnd.api+json'
        // }
      }).then(response => {
        console.log(response)
        // commit('setPropertyEnquiry', { result: response.data })
      }, (err) => {
        let errResult = {
          errors: [err]
        }
        // commit('setPropertyEnquiry', { result: errResult })
        console.log(err)
      })


    }

  }
}
</script>
<style>
</style>