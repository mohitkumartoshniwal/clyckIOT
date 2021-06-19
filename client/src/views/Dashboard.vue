<template>
  <v-container>
    <DefaultDevices @clicked="DefaultDevicesCallback($event)" />

    <div class="text-center pt-15" v-if="!responseReceived">
      <v-progress-circular
        v-if="!responseReceived"
        :size="90"
        :width="7"
        color="green"
        indeterminate
      ></v-progress-circular>
    </div>
    <div class="text-center pt-15" v-if="devices.length === 0">
      You've no devices added, please try adding one.
    </div>
    <DevicesLayout
      :DeviceDetails="devices"
      @updatedDevicesList="updateAfterDelete"
    />

    <!-- Custom Devices Floating Action Button (FAB) -->
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-width="450"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="alignPlus mb-16"
          color="primary"
          dark
          bottom
          right
          fixed
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <template>
        <v-card id="addDevices">
          <v-toolbar color="#5680E9" dark>
            <v-card-title>
              Add Custom devices
            </v-card-title>
          </v-toolbar>
          <v-row>
            <v-col cols="10">
              <v-card-text>
                <v-text-field
                  type="name"
                  v-model="deviceName"
                  filled
                  clearable
                  label="Devicename"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="2" class="pt-7">
              <v-card-actions class="justify-end">
                <v-btn
                  color="primary"
                  dark
                  @click="addCustomDevice"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </template>
    </v-dialog>
    <error />
  </v-container>
</template>

<script>
import router from "../router";
import DefaultDevices from "../components/DefaultDevices.vue";
import DevicesLayout from "../components/DevicesLayout.vue";
import error from "../components/error.vue";
import "firebase/auth";
import { getService, postService } from "../commonService/api.js";

export default {
  name: "dashboard",
  data() {
    return {
      responseReceived: false,
      username: "",
      dialog: false,
      devices: {},
      deviceName: "",
      configurations: "",
    };
  },
  components: {
    DefaultDevices,
    DevicesLayout,
    error,
  },
  methods: {
    async logout() {
      await fetch("/api/logout");
      router.push("/login");
    },
    async DefaultDevicesCallback() {
      this.getDevices();
    },
    async getUserData() {
      const respData = await getService("/getUserData");
      const commits = await respData.data;

      if (respData.status === 200) {
        this.username = commits.name;
        this.devices = commits.devices;
        this.responseReceived = true;
        this.$bus.$emit("ID", {
          ID: commits.googleID,
        });
      } else {
        router.push("/login");
      }
    },
    async getDevices() {
      const respData = await getService("/getDeviceDetails");
      const commits = await respData.data;
      this.devices = commits;
    },
    async addCustomDevice() {
      if (this.deviceName === "") {
        this.$bus.$emit("error", {
          msg: "Please enter device name",
        });
      } else {
        const data = {
          devicename: this.deviceName,
        };
        this.addThem(data);
        this.deviceName = "";
      }
      this.dialog = false;
    },
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
        } else if (respData.status === 202) {
          this.$bus.$emit("error", {
            msg: "Maximum of 7 devices allowed!",
          });
        }
      } catch (error) {
        this.$bus.$emit("error", {
          msg: "Device name already exists!",
        });
      }
    },
    updateAfterDelete(value) {
      this.devices = value;
    },
  },
  created() {
    this.getUserData();
    this.getDevices();
  },
};
</script>

<style scoped>
.stateBtn {
  text-align: center;
}
.sButton {
  color: #11d332;
}
#plusbut {
  padding-bottom: 100px;
}
.v-progress-circular {
  margin: 1rem;
}
#addDevices {
  overflow: hidden;
}
</style>
