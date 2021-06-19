<template>
  <v-footer class="mr-n5" color="#5680E9">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        color="white"
        text
        rounded
        class="my-2"
      >
        <span >{{ link.text }} </span>
      </v-btn>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Clyck</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mdiAlphaCCircleOutline, mdiPlusBoxMultipleOutline } from "@mdi/js";
export default {
  data() {
    return {
      icons: [mdiAlphaCCircleOutline, mdiPlusBoxMultipleOutline],
      links: [{ to: "/contactus", text: "Contact Us" }],
    };
  },
};
</script>

<style scoped>
#footer {
  margin: 0;
}
</style>
