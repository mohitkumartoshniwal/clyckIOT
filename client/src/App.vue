<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html, body {
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
