<template>
  <nav>
    <v-app-bar app color="#5680E9" dark>
      <div class="d-flex mx-n16">
        <v-img
          alt="Logo"
          :height="height"
          width="200px"
          src="../assets/logo1.png"
          contain
        />
      </div>

      <v-spacer></v-spacer>
      <v-menu bottom left v-if="$vuetify.breakpoint.smAndDown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <!-- <v-list-item v-for="(link, i) in menu" :key="i" :to="link.to"> -->
          <div class="mx-auto text-center">
            <v-list-item-title v-if="LoggedIn">
              <v-avatar color="#5596e6" size="48">
                <span class="white--text headline">{{
                  LoggedInUser.username[0]
                }}</span>
              </v-avatar>
              <h3>{{ LoggedInUser.username }}</h3>
              <v-divider class="my-1"></v-divider>
            </v-list-item-title>

            <v-list-item-title>
              <v-list-item-title to="about"
                ><v-btn width="100%" to="about" text
                  >About Us</v-btn
                ></v-list-item-title
              >
            </v-list-item-title>

            <v-list-item-title to="working">
              <v-btn width="100%" to="working" text>How does it work?</v-btn>
            </v-list-item-title>

            <v-list-item-title to="login" v-if="!LoggedIn">
              <v-btn width="100%" to="login" v-if="!LoggedIn" text>Login</v-btn>
            </v-list-item-title>

            <v-list-item-title to="dashboard" v-if="LoggedIn">
              <v-btn width="100%" to="dashboard" v-if="LoggedIn" text
                >Dashboard</v-btn
              >
            </v-list-item-title>

            <v-list-item-title>
              <v-btn width="100%" text v-if="LoggedIn" @click="logout"
                ><span>Logout</span></v-btn
              >
            </v-list-item-title>
          </div>
          <!-- </v-list-item> -->
        </v-list>
      </v-menu>

      <div v-else>
        <v-btn to="about" text>About Us</v-btn>
        <v-btn to="working" text>How does it work?</v-btn>
        <v-btn to="login" v-if="!LoggedIn" text>Login</v-btn>
        <v-btn to="dashboard" v-if="LoggedIn" text>Dashboard</v-btn>
        <Avatar v-if="LoggedIn" :userDetails="LoggedInUser" />
      </div>
    </v-app-bar>
  </nav>
</template>
<script>
// import router from "../router";
import Avatar from "./avatarComponent.vue";
import firebase from "firebase/app";
import "firebase/auth";
// import axios from "axios";
import router from "../router/index";
export default {
  data() {
    return {
      LoggedIn: false,
      LoggedInUser: {},
    };
  },
  components: {
    Avatar,
  },

  computed: {
    CheckForLogIn: function() {
      return this.LoggedIn;
    },
    height: function() {
      let breakpoint = this.$vuetify.breakpoint.name;
      if (breakpoint === "xs" || breakpoint === "sm") {
        return "56px";
      } else return "64px";
    },
    menu: function() {
      return [
        { title: "About Us", to: "/about", showButton: this.LoggedIn },
        { title: "Dashboard", to: "/dashboard", showButton: this.LoggedIn },
        { title: "Login", to: "/login", showButton: !this.LoggedIn },
      ];
    },
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.LoggedIn = true;
          this.LoggedInUser = {
            username: user.displayName,
            email: user.email,
          };
        } else {
          this.LoggedIn = false;
        }
      });
    },
    async logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.LoggedIn = false;
          router.push("/login");
        });
    },
  },
  mounted() {
    this.setupFirebase();
  },
};
</script>
