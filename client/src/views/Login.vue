<template>
  <v-app>
    <v-layout class="layout" justify-center>
      <v-row align="center" justify="center">
        <v-card class="rounded-card" height="350px" width="400px" elevation="8">
          <v-img
            :aspect-ratio="16 / 9"
            :width="400"
            :height="350"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          <v-row>
            <v-col>
              <v-btn :width="400" @click="login">
                <a
                  class="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                  ><img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                  />
                  Login/Signup Using Google</a
                >
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-layout>
  </v-app>
</template>

<script>
import router from "../router";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {},
  data() {
    return {};
  },
  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          this.$bus.$emit("logged", {
            msg: {
              connectionstatus: "User logged in",
              username: user.displayName,
              email: user.email,
            },
          });
          router.push("/dashboard");
        });
    },
  },
};
</script>

<style scoped>
.layout {
  background-color: #ffff;
  padding-bottom: 200px;
  background: url("/client/public/backGround.jpg");
  background-size: cover;
}
.rounded-card {
  border-radius: 15px;
}

.v-text-field {
  width: 300px;
}

.v-text-field.v-text-field--enclosed {
  margin: auto;
}

.v-card__actions {
  padding: 0;
}
</style>
