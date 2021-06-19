<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :timeout="timeout" class="pb-8">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: "",
      timeout: 2000,
    };
  },
  created() {
    this.$bus.$on("error", (val) => {
      this.text = val.msg;
      this.snackbar = true;
    });
  },
};
</script>
