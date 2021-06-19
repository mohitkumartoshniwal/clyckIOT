<template>
  <v-container class="ml-7">
    <v-row>
      <v-col cols="8">
        <v-img
          alt="Logo"
          :height="height"
          width="100px"
          src="../assets/logo1.png"
          contain
        />
      </v-col>
      <v-col cols="4" align="center">
        <generateCode />
      </v-col>
    </v-row>

    <br />
    <v-row no-gutters>
      <v-col cols="12">
        <div>
          <v-btn
            class="defaultDeviceButton"
            color="#FF5A60"
            v-for="device in defaultDevices"
            :key="device.devicename"
            @click="addDefaultDevice(device.devicename)"
          >
            <v-icon color="#F5F5F5">{{ device.icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiPlusBoxMultipleOutline,
  mdiLightbulb,
  mdiLockOutline,
  mdiFireAlert,
  mdiCctv,
} from "@mdi/js";
import "firebase/auth";
import generateCode from "../components/generateCode.vue";
import { postService } from "../commonService/api.js";

export default {
  name: "addDevice",
  components: {
    generateCode,
  },
  data() {
    return {
      selected: "",
      icons: {
        mdiPlusBoxMultipleOutline,
        mdiLightbulb,
        mdiLockOutline,
        mdiFireAlert,
        mdiCctv,
      },
      items: ["Lights", "Door Lock", "Fire Alarm", "CCTV"],
      defaultDevices: [
        {
          devicename: "Lights",
          devicestatus: "OFF",
          icon: mdiLightbulb,
        },
        {
          devicename: "Door Lock",
          devicestatus: "OFF",
          icon: mdiLockOutline,
        },
        {
          devicename: "Fire Alarm",
          devicestatus: "OFF",
          icon: mdiFireAlert,
        },
        {
          devicename: "CCTV",
          devicestatus: "OFF",
          icon: mdiCctv,
        },
      ],
      devices: [],
      dialog: false,
      hidden: false,
    };
  },
  methods: {
    async addThem(data) {
      try {
        const respData = await postService("/addDevice", data);
        const commits = await respData.data;
        if (respData.status === 201) {
          this.devices = commits.msg.devices;
          this.$emit("clicked", commits.msg.devices);
          this.$bus.$emit("error", {
            msg: `${data.devicename} successfully added!`,
          });
        }
      } catch (error) {
        this.selected = "";
        this.$bus.$emit("error", {
          msg: "Device name already exists!",
        });
      }
    },

    async addDefaultDevice(value) {
      const data = {
        devicename: String(value),
      };
      this.addThem(data);
    },
  },
};
</script>

<style scoped>
.defaultDeviceButton {
  padding-right: 20px;
  margin-right: 10px;
}
</style>
