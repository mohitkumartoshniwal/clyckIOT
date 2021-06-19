<template>
  <div>
    <v-dialog
      transition="dialog-top-transition"
      scrollable
      max-width="900"
      v-model="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mt-15"
          color="primary"
          dark
          top
          right
          fixed
          fab
          v-bind="attrs"
          v-on="on"
          @click="generateCodeString"
        >
          <v-icon color="#F5F5F5">{{ generateIcon }}</v-icon>
        </v-btn>
      </template>

      <v-card id="codeGeneration">
        <v-row>
          <v-col cols="12">
            <v-card-actions class="justify-end">
              <v-icon @click="dialog = false">{{ closeIcon }}</v-icon>
            </v-card-actions>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card-title>
              AuthID: <br v-if="$vuetify.breakpoint.smAndDown" />
              {{ authID }}
            </v-card-title>
          </v-col>
        </v-row>
        <v-select
          :items="items"
          v-model="selected"
          label="Select Hardware"
          persistent-hint
          @input="getHarware(selected)"
          class="ml-5 mr-5"
        ></v-select>
        <v-divider></v-divider>
        <v-card-text>
          <codeC />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiCodeBraces, mdiCloseThick } from "@mdi/js";
import codeC from "../components/code.vue";
import "firebase/auth";
import {getService} from "../commonService/api.js";
export default {
  name: "generateCode",
  data() {
    return {
      authID: "",
      dialog: false,
      generateIcon: mdiCodeBraces,
      closeIcon: mdiCloseThick,
      buttonWidth: "Generate Code",
      items: ["esp32", "esp8266"],
      selected: "esp32",
    };
  },
  components: {
    codeC,
  },
  methods: {
    getHarware(val) {
      console.log(val, "Event");
      this.selected = val;
      this.$bus.$emit("hardWareSelect", this.selected);
    },
    generateCodeString() {
      return this.getUserData();
    },
    async getUserData() {
      const respData = await getService("/getUserData");
      const commits = await respData.data;
      this.authID = commits.googleID;
    },
  },
  created() {
    this.$bus.$emit("hardWareSelect", this.selected);
  }
 
};
</script>

<style scoped>
#codeGeneration {
  overflow: hidden;
}
</style>
