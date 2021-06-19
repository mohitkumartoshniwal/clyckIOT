<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg3
        v-bind:key="Device.devicename"
        v-for="Device in DeviceDetails"
      >
        <Device
          v-bind:device="Device"
          @updatedDevicesList="getValAfterDelete"
        />
        <v-row v-if="deviceCount === 0">
          Seems like you've added any device.
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Device from "../components/Device.vue";

export default {
  name: "DevicesLayout",
  props: ["DeviceDetails"],
  components: {
    Device,
  },
  data() {
    return {
      devicename: "",
      deviceState: "",
    };
  },
  mounted() {
    console.log(this.deviceCount, "DEVICECOUNT")
  },
  computed: {
    deviceCount: function() {
      console.log(this.DeviceDetails.length, "DEVICELENGTH");
      return this.DeviceDetails.length;
    },
  },
  methods: {
    getValAfterDelete(value) {
      this.$emit("updatedDevicesList", value.msg.devices);
    },
    getDeviceCount() {
      return this.DeviceDetails.length;
    },
  },
};
</script>
