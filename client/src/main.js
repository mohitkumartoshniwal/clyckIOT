import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import EventBus from "./BusListener/bus.js";
import axios from "axios";
import firebase from "firebase/app";
import Clipboard from "v-clipboard";
import firebaseConfig from "./firebaseCredentials.js";
Vue.use(Clipboard);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.prototype.$bus = EventBus;

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
