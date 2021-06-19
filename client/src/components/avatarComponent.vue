<template>
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="primary" size="48">
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="primary">
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
             <v-btn depressed text  @click="logout"><span>Logout</span></v-btn>              
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    
</template>

<script>
import router from "../router";
// import Avatar from "./avatarComponent.vue"
import firebase from "firebase/app";
import "firebase/auth";
  export default {
      name: 'Avatar',
      props: ['userDetails'],
    data() {
      return {
          user: {}
      }
    },
    methods: {
        async logout() {
            firebase
        .auth()
        .signOut()
        .then(() => {
          this.LoggedIn = false;
          router.push('/login')
        });
        }
    },
    mounted() {
        this.user = {
            initials: this.userDetails.username[0],
            fullName: this.userDetails.username,
            email: this.userDetails.email
        }
    }
  }
</script>