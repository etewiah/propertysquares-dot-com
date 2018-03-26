<template>
  <div>
    <v-jumbotron :gradient="gradient" fill-height style="height:100%;" dark>
      <v-container>
        <v-layout wrap column>
          <v-flex class="xs-12 mt-5 mb-5" text-xs-center>
            <header class="major">
              <h2 class="display-3">{{ $t("contact.title") }}</h2>
              <p class="headline">{{ $t("contact.prompt") }}</p>
            </header>
          </v-flex>
        </v-layout>
        <v-layout wrap class="mt-0 mb-5" row>
          <v-flex class="" xs12 text-xs-center>
            <v-card class="elevation-2">
              <v-card-title primary-title class="layout">
                <div class="headline">
                  <!-- {{ $t("client.contactUsPrompt") }}: -->
                </div>
              </v-card-title>
              <v-card-text>
                <v-form v-model="formValid" ref="enqForm"  name="contact" action="" method="post" netlify>
                  <input type="hidden" name="form-name" value="contact" />
                  <v-layout v-for="(field) in contactUsFields" :key="field.fieldName" row>
                    <v-flex xs12 sm12 offset-sm0>
                      <v-text-field :multi-line="field.multiLine" :required="field.required" :rules="field.validationRules" name="" :label="$t(field.labelTextTKey)" v-model="enquiryContent[field.fieldName]"></v-text-field>
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
                    <v-btn class="primary" type="submit">Send</v-btn>
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
        labelTextTKey: "client.name",
        fieldName: "name",
        inputType: "text",
        required: true,
        validationRules: [
          v => !!v || 'Name is required',
        ]
      }, {
        labelTextTKey: "client.email",
        fieldName: "email",
        inputType: "text",
        required: true,
        validationRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }, {
        labelTextTKey: "client.tel",
        fieldName: "tel",
        inputType: "text",
        validationRules: []
      }, {
        labelTextTKey: "client.website",
        fieldName: "website",
        inputType: "text",
        validationRules: []
      }, {
        labelTextTKey: "client.message",
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
      debugger
      // this.enquiryContent.property_id = this.propId
      if (!this.formValid) {
        this.$refs.enqForm.validate()
        // in case nothing has been typed in, above will display error messages
      }
      // this.$store.dispatch('sendContactMessage', this.enquiryContent)
    }

  }
}
</script>
<style>
</style>