<template>
  <v-expand-transition>
    <v-card
      v-show="expand"
      flat
      color="#5AB9EA"
      class="text-xs-center mx-10 ma-5"
      elevation="8"
      transition="scale-transition"
      
    >
      <div class="text-right">
        <v-dialog
          v-model="dialog"
          transition="dialog-top-transition"
          max-width="390"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="ma-3" v-bind="attrs" dark v-on="on">{{
              icons.mdiCloseThick
            }}</v-icon>
          </template>

          <!-- Pop Up for removing device -->
          <v-card>
            <v-toolbar color="#5680E9" dark>
              <v-card-title>
                Do you want to remove {{ device.devicename }} ?
              </v-card-title>
            </v-toolbar>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#FF5A60" dark class="mr-4" @click="deleteDevice">
                yes
              </v-btn>
              <v-btn color="#FF5A60" dark class="mr-4" @click="dialog = false">
                no
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-card-title class="justify-center headline mt-1 font-weight-white">
        {{ device.devicename }}
      </v-card-title>

      <v-card-actions class="justify-center">
        <v-switch v-model="deviceSwitch" flat @click="changeState"></v-switch>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script>
import { mdiCloseThick } from "@mdi/js";
import "firebase/auth";
import { putService } from "../commonService/api.js";
export default {
  name: "Device",
  props: ["device"],
  data() {
    return {
      icons: {
        mdiCloseThick,
      },
      deviceSwitch: this.device.devicestatus === "ON" ? true : false,
      dialog: false,
      expand: false,
    };
  },
  methods: {
    async changeState() {
      let deviceState = this.deviceSwitch ? "ON" : "OFF";
      const data = {
        devicename: this.device.devicename,
        deviceState,
      };
      const respData = await putService("/changeState", data);
      const commits = await respData.data;
      deviceState = commits.devicestatus;
      this.deviceSwitch = deviceState === "ON" ? true : false;
    },

    async getDevice() {
      this.deviceSwitch = this.device.devicestatus === "ON" ? true : false;
      setTimeout(() => {
        this.expand = true;
      }, 1000);
    },

    async deleteDevice() {
      const data = {
        devicename: this.device.devicename,
      };
      const respData = await putService("/deleteDevice", data);
      const commits = await respData.data;
      this.$emit("updatedDevicesList", commits);
      this.$bus.$emit("error", {
        msg: "Device successfully deleted",
      });
    },
  },
  mounted() {
    this.getDevice();
  },
};
</script>

<style scoped></style>
